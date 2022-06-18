const core = require("@actions/core"),
    github = require("@actions/github");
    getInfor = require('./infor.js')

function toOrd(e) {
    const t = ["th", "st", "nd", "rd"],
        o = e % 100;
    return e + (t[(o - 20) % 10] || t[o] || t[0])
}
async function run() {
    try {
        const e = core.getInput("githubToken"),
            t = core.getInput("actor") || "",
            o = github.getOctokit(e),
            n = "thuongtruong1009";
        let a = [],
            r = 1;
        for (;;) {
            const e = await o.request("GET /users/{username}/repos", { username: n, type: "public", page: r, per_page: 100, mediaType: { previews: ["mercy"] } });
            if (r += 1, 0 === e.data.length) break;
            const t = e.data.map(e => ({ name: e.name, full_name: e.full_name, stargazers_count: e.stargazers_count, forks_count: e.forks_count }));
            a = a.concat(t.filter(e => e.name.includes("a_repo_with_")))
        }
        a.forEach(async({ full_name: e, stargazers_count: n, forks_count: a }) => {
            const [r, s] = e.split("/"), c = `a_repo_with_${n}_stars_and_${a}_forks`, i = `a repo with ${n} stars ⭐️ and ${a} forks <br/> ${getInfor()}`, u = `- [${t}](https://github.com/${t}) helped me reach ${toOrd(n)} stars and ${toOrd(a)} forks.`;
            let m = await o.request("GET /repos/{owner}/{repo}/contents/{path}", { owner: r, repo: s, path: "README.md" }),
                p = new Buffer(m.data.content, "base64").toString().split("\n");
            if (p[p.length - 1] == u || p[p.length - 2] == u) {
                const e = `# ${i}` + "\n" + (p = p.slice(0, -2)).slice(1).join("\n");
                await o.request("PUT /repos/{owner}/{repo}/contents/{path}", { owner: r, repo: s, path: "README.md", message: `⭐️ ${n}`, content: Buffer.from(e).toString("base64"), sha: m.data.sha, author: { name: t, email: `${t}@users.noreply.github.com` }, committer: { name: "Tran Nguyen Thuong Truong", email: "ititiu19228@student.hcmiu.edu.vn" } }), m = await o.request("GET /repos/{owner}/{repo}/contents/{path}", { owner: r, repo: s, path: "README.md" })
            } else await o.request("PATCH /repos/{owner}/{repo}", { owner: r, repo: s, name: c, description: 'Automatic change repository name with stars and forks count' });
            const l = `# ${i}` + "\n" + p.slice(1).join("\n") + "\n" + u + "\n";
            await o.request("PUT /repos/{owner}/{repo}/contents/{path}", { owner: r, repo: s, path: "README.md", message: `chore: update README with ⭐️ ${n}`, content: Buffer.from(l).toString("base64"), sha: m.data.sha, author: { name: t, email: `${t}@users.noreply.github.com` }, committer: { name: "Tran Nguyen Thuong Truong", email: "ititiu19228@student.hcmiu.edu.vn" } })
        })
    } catch (e) { core.setFailed(e.message) }
}
run();