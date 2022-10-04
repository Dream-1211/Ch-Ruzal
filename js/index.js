// 滚动动画
var speed = 20; //速度数值越大速度越慢
var colee_right2 = document.getElementById("colee_right2");
var colee_right1 = document.getElementById("colee_right1");
var colee_right = document.getElementById("colee_right");
colee_right2.innerHTML = colee_right1.innerHTML;
var fx = 0;
var icount = 1;
var MyMar4;
function setFx(vle) {
	fx = vle;
	icount = 1;
	MyMar4 = setInterval(Marquee, speed);
	//alert(vle);
}
function Marquee() {
	if (fx == 0) {
		Marquee3();
	} else {
		Marquee4();
	}
}
function Marquee3() {
	if (colee_right2.offsetWidth - colee_right.scrollLeft <= 0)
		//offsetWidth 是对象的可见宽度
		colee_right.scrollLeft -= colee_right1.offsetWidth;
	//scrollWidth 是对象的实际内容的宽，不包边线宽度
	else {
		colee_right.scrollLeft++;
	}
}
function Marquee4() {
	if (colee_right.scrollLeft >= 0) colee_right.scrollLeft--;
}
var MyMar4 = setInterval(Marquee, speed);
colee_right.onmouseover = function () {
	clearInterval(MyMar4);
};
colee_right.onmouseout = function () {
	MyMar4 = setInterval(Marquee, speed);
};

// 动画函数
function animate(obj, target, callback) {
	// console.log(callback);  callback = function() {}  调用的时候 callback()

	// 先清除以前的定时器，只保留当前的一个定时器执行
	clearInterval(obj.timer);
	obj.timer = setInterval(function () {
		// 步长值写到定时器的里面
		// 把我们步长值改为整数 不要出现小数的问题
		// var step = Math.ceil((target - window.pageYOffset) / 10);
		var step = (target - window.pageYOffset) / 10;
		step = step > 0 ? Math.ceil(step) : Math.floor(step);
		if (window.pageYOffset == target) {
			// 停止动画 本质是停止定时器
			clearInterval(obj.timer);
			// 回调函数写到定时器结束里面
			// if (callback) {
			//     // 调用函数
			//     callback();
			// }
			callback && callback();
		}
		// 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
		// obj.style.left = window.pageYOffset + step + 'px';
		window.scroll(0, window.pageYOffset + step);
	}, 15);
}
// 返回顶部
var reback = document.querySelector(".shar-three");
reback.addEventListener("click", function () {
	animate(window, 0);
});

// 关闭二维码
// 1. 获取元素
var btn = document.querySelector(".close-btn");
var box = document.querySelector(".box-qr");
// 2.注册事件 程序处理
btn.onclick = function () {
	box.style.display = "none";
};

//弹出广告
// var ad = document.querySelector(".ad");
// setTimeout(function () {
// 	ad.style.display = "none";
// }, 4000);

// 页面切换
var wangzhanshouye = document.querySelector(".wangzhanshouye");
var aixinzhunong = document.querySelector(".aixinzhunong");
var guanyuwomen = document.querySelector(".guanyuwomen");
var caigoudating = document.querySelector(".caigoudating");
var topbar = document.querySelectorAll(".topbar li");
var index = document.querySelector('#index');
var caigou = document.querySelector('#caigou');
var aixin = document.querySelector('#aixin');
var guanyu = document.querySelector('#guanyu');
//
topbar[0].style.backgroundColor = "#f3f3f3";
topbar[0].childNodes[0].style.color = "rgb(134,191, 50"
// 排他算法
for (var i = 0; i < topbar.length; i++) {
	topbar[i].onclick = function () {
		for (var i = 0; i < topbar.length; i++) {
			topbar[i].style.backgroundColor = "";
			topbar[i].childNodes[0].style.color = "";
		}
		this.style.backgroundColor = "#F3F3F3";
		this.childNodes[0].style.color = "rgb(134, 191, 50)";
	};
}
console.log(aixin)

index.onclick = function(){
	wangzhanshouye.style.display = "block";
	aixinzhunong.style.display = "none";
	guanyuwomen.style.display = "none";
	caigoudating.style.display = "none";
	console.log(this);
}
aixin.onclick = function(){
	aixinzhunong.style.display = "block";
	wangzhanshouye.style.display = "none";
	guanyuwomen.style.display = "none";
	caigoudating.style.display = "none";
	console.log(this);
};
guanyu.onclick = function(){
	guanyuwomen.style.display = "block";
	aixinzhunong.style.display = "none";
	wangzhanshouye.style.display = "none";
	caigoudating.style.display = "none";
	console.log(this);
};
caigou.onclick = function(){
	caigoudating.style.display = "block";
	aixinzhunong.style.display = "none";
	guanyuwomen.style.display = "none";
	wangzhanshouye.style.display = "none";
	console.log(this);
};

