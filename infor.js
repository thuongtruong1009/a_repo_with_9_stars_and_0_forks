const infor = [
    `## Package\n

    :heavy_check_mark: [@actions/core](packages/core)\n

    Provides functions for inputs, outputs, results, logging, secrets and variables. Read more [here](packages/core)\n

    :octocat: [@actions/github](packages/github)\n

    Provides an Octokit client hydrated with the context that the current action is being run in. Read more [here](packages/github)\n

    See more at [action/toolkit](https://github.com/actions/toolkit) and [action/javascript](https://github.com/actions/javascript-action)\n

    ## References\n

    - Relax with [bee-music](https://github.com/thuongtruong1009/bee-music)\n

    - Enhance Vuejs skills through [e-shopee](https://github.com/thuongtruong1009/e-shopee)\n

    - Starting Quasar framework with [twitter-meta](https://github.com/thuongtruong1009/twitter-meta)\n

    - Generate your GitHub informations by [gitbox](https://github.com/thuongtruong1009/gitbox)\n

    - Begining Vue through [notedev](https://github.com/thuongtruong1009/notedev)\n

    - Learning front-end web full course at [frontend-master](https://github.com/thuongtruong1009/frontend-master)\n

    - Learn Object-Oriented-Programming tutorial at [Snake-Game-OOP](https://github.com/thuongtruong1009/Snake-Game-OOP)\n

    - Become Java master for new beginner at [Java-training](https://github.com/thuongtruong1009/java-oop-training)\n

    - Pratice UI/UX at [league-fo-legend](https://github.com/thuongtruong1009/league-of-legends-clone)\n

    - Make flip card game at [flip-card](https://github.com/thuongtruong1009/flip-cards)\n

    - Learn computer architecture at [computer-architecture](https://github.com/thuongtruong1009/computer-architecture)\n

    ## ❤️ [Support me](https://www.paypal.me/thuongtruong1009)\n

    > We are looking for sponsors to join us to have better community reach and impact.\n

    [![MOMO](https://img.shields.io/badge/-MOMO-red?style=flat&labelColor=RED&logo=MOMO&logoColor=black)](https://nhantien.momo.vn/0917085937)\n

    <a href="https://www.paypal.me/thuongtruong1009">
    <img height="25" marginTop="10" src="https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/C2/logos-buttons/optimize/26_Blue_PayPal_Pill_Button.png"></a>\n

    <a href='https://ko-fi.com/thuongtruong1009' target='_blank'>
    <img height='25' style='border:0px;height:28px;color:blue' src='https://az743702.vo.msecnd.net/cdn/kofi3.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>\n
    
    ## 📰 [License](LICENSE)\n
    
    - ##### This project is distributed under the [MIT License](LICENSE).\n

    - ##### Copyright 2022-PRESENT © [Tran Nguyen Thuong Truong](https://github.com/thuongtruong1009)\n

    ---\n

    ## Generation details\n`
];

module.exports = getInfor = () => infor.split('\n').forEach(item => item + '<br/>');