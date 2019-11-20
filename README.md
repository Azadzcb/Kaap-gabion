﻿## http://kaap-gabion.com 
+ 纯HTML5+CSS3+Javascript制作
- 由于div设置了inline-block，添加文字后会产生位移，使用 vertical-align:top消除
```
    vertical-align:top
```
+ CSS3实现渐入渐出轮播效果
- opcity设置不透明度，0%时开始动画，20%时开始淡出，22%时图片不透明度为0，也就是20%~22%这段时间中图片由完全不透明变为完全透明，实现淡出效果，24%时变换图片，且图片透明度为1 ---> 22%~24%这段时间为新图片淡入效果。24%~44%图片停留20%的时间。
```
    .about-banner-img1{
        width: 100vw;
        height: 350px;
        /* position: absolute; */
        background: url(../img/about_banner01.jpg) no-repeat center;
        opacity: 1;/*设置不透明度*/
        animation: fateimg 10s linear infinite;
    }
    @keyframes fateimg{
        0%{background: url(../img/about_banner01.jpg)  no-repeat center;opacity: 1;}
        20%{background: url(../img/about_banner01.jpg) no-repeat center;opacity: 1;}
        22%{background: url(../img/about_banner01.jpg) no-repeat center;opacity: 0;}
        24%{background: url(../img/about_banner02.jpg) no-repeat center;opacity: 1;}
        44%{background: url(../img/about_banner02.jpg) no-repeat center;opacity: 1;}
        46%{background: url(../img/about_banner02.jpg) no-repeat center;opacity: 0;}
        48%{background: url(../img/about_banner03.jpg) no-repeat center;opacity: 1;}
        68%{background: url(../img/about_banner03.jpg) no-repeat center;opacity: 1;}
        70%{background: url(../img/about_banner03.jpg) no-repeat center;opacity: 0;}
        72%{background: url(../img/about_banner04.jpg) no-repeat center;opacity: 1;}
        92%{background: url(../img/about_banner04.jpg) no-repeat center;opacity: 1;}
        94%{background: url(../img/about_banner04.jpg) no-repeat center;opacity: 0;}
        96%{background: url(../img/about_banner01.jpg) no-repeat center;opacity: 1;}
    }
```
- 文字显示
```
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
```
