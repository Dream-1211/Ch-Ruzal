import './animate'
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
// 返回顶部
var reback = document.querySelector('.shar-three');
reback.addEventListener('click', function(){
	window.scroll(0,0)
	animate(window,0)
})