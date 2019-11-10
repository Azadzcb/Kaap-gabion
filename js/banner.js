var animationSpeed = 1; //一次切换的图片数
var minSpeed = 5; //每次left增加或减少的数
var stopTime = 5000; //要隔多少秒开始切换下一张

//获取页面元素
var prev = document.getElementById("banner-btn-left");
var next = document.getElementById("banner-btn-right");
var banner = document.getElementById("home-banner");
var box = document.getElementById("home-banner-box");
var imgcon = document.getElementById("home-banner-content");
// console.log(imgcon);
var imgdiv = document.getElementById("home-banner-content").getElementsByTagName("div");
var divwidth = document.getElementById("home-banner-content").getElementsByTagName("div")[0].offsetWidth;
var dot = document.getElementById("home-banner-dot");
var dotul = document.getElementById("home-banner-dotul");
var dotli = document.getElementById("home-banner-dotul").getElementsByTagName('li');
var length = document.getElementById("home-banner-dotul").getElementsByTagName('li').length;
var type = true; //是否可以渲染
var nextTimer = null;
var prevTimer = null;
var mainTimer = null;

imgcon.style.width = divwidth * length + "px"; //将ul的宽度设置为所有照片宽度的总和

//给每一个dotli添加一个index属性，方便改变小圆点的背景颜色

for (var i = 0; i < length; i++) {
    imgdiv[i].index = i;
    dotli[i].index = i;
}
//给第一个小圆点加上背景
changeColor(imgdiv[0]);

// 下一张
next.onclick = function (_ev) {
    if (type) {
    divwidth = 0;
    clearInterval(nextTimer); //定时器渲染与点击渲染判断,先把上一次留下来的定时器清除（确保清除干净—）
    nextTimer = setInterval(nextImg, animationSpeed);
    type = false;

    changeColor(imgdiv[1]) //改变原点颜色
    }
};
// 将图片向右移动整个宽度的宽度，底下的图片就出现
function nextImg() {
    imgcon.style.left = "-" + divwidth + "px";
    divwidth += minSpeed;
    if (divwidth >= imgdiv[0].offsetWidth) {
        clearInterval(nextTimer);
        imgcon.appendChild(imgdiv[0]); //先上出imgdiv[0]，再加到末尾来，实现循环展示
        imgcon.style.left = 0;
        type = true;
    }
};

//上一张
prev.onclick = function (_ev) {
    if (type) { //如果可以渲染
        imgcon.insertBefore(imgdiv[length - 1], imgdiv[0]); //因为当前图片的位置一直都是imgdiv[0]，所以按照循环的思想，上一张就是imli[length-1]
        clearInterval(prevTimer);
        divwidth = imgdiv[0].offsetWidth;
        prevTimer = setInterval(prevImg, animationSpeed);
        type = false; //因为设置了定时器，定时器在渲染，所以这时不能被渲染

        changeColor(imgdiv[0]);
    }
};

function prevImg() {
    imgcon.style.left = "-" + divwidth + "px";
    divwidth -= minSpeed;
    if (divwidth <= -1) {
        clearInterval(prevTimer);
        imgcon.style.left = 0;
        type = true; //定时器已经完成渲染了，所以此时可以渲染
    }
};

//轮播效果
mainTimer = setInterval(next.onclick, 5000); //5秒调用一次

// 改变原点颜色
function changeColor(target) {
    for (let j = 0; j < length; j++) {
        dotli[j].className = "";

    }
    dotli[target.index].className = "active"
}

//小圆点点击事件
dot.onclick = function (ev) {
    var ev = ev || window.event;
    var target = ev.target || ev.srcElement;
    if (target.nodeName.toLowerCase() == "li") {
        if (type) {
            showImg(target.index);
            changeColor(target);
            type = true;
        }
    }
};

//根据参数显示对应的图片

function showImg(inde) {
    var this_li = imgdiv[0].index;
    //把第一个元素放到最后面
    if (inde > this_li) {
        var x = inde - this_li;
        for (let y = 0; y < x; y++) {
            imgcon.appendChild(imgdiv[0]);
        }
    }
    //把最后一个元素放到第一位
    if (inde < this_li) {
        var x_x = this_li - inde;
        for (let g = 0; g < x_x; g++) {
            imgcon.insertBefore(imgdiv[length - 1], imgdiv[0]);

        }
    }
};

//当鼠标移入图片区域时，消除定时器，鼠标移出时恢复定时器
box.onmouseover = function (_ev) {
    clearInterval(mainTimer);
};
box.onmouseout = function (_ev) {
    mainTimer = setInterval(next.onclick, stopTime);
};