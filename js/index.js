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

var wangzhanshouye = document.querySelector(".wangzhanshouye");
var aixinzhunong = document.querySelector(".aixinzhunong");
var guanyuwomen = document.querySelector(".guanyuwomen");
var caigoudating = document.querySelector(".caigoudating");
var topbar = document.querySelectorAll(".topbar li");
var index = document.querySelector("#index");
var caigou = document.querySelector("#caigou");
var aixin = document.querySelector("#aixin");
var guanyu = document.querySelector("#guanyu");
//导航颜色切换
topbar[0].style.backgroundColor = "#f3f3f3";
topbar[0].childNodes[0].style.color = "rgb(134,191, 50";
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

//页面切换
var nongye = document.querySelector("#nongye");
var zixun = document.querySelector(".zixun");
index.onclick = function () {
	wangzhanshouye.style.display = "block";
	aixinzhunong.style.display = "none";
	guanyuwomen.style.display = "none";
	caigoudating.style.display = "none";
	zixun.style.display = "none";
};
aixin.onclick = function () {
	aixinzhunong.style.display = "block";
	wangzhanshouye.style.display = "none";
	guanyuwomen.style.display = "none";
	zixun.style.display = "none";
	caigoudating.style.display = "none";
};
guanyu.onclick = function () {
	guanyuwomen.style.display = "block";
	aixinzhunong.style.display = "none";
	wangzhanshouye.style.display = "none";
	caigoudating.style.display = "none";
	zixun.style.display = "none";
};
caigou.onclick = function () {
	caigoudating.style.display = "block";
	advert.style.display = "block";
	aixinzhunong.style.display = "none";
	guanyuwomen.style.display = "none";
	wangzhanshouye.style.display = "none";
	zixun.style.display = "none";
};
nongye.onclick = function () {
	caigoudating.style.display = "none";
	aixinzhunong.style.display = "none";
	guanyuwomen.style.display = "none";
	wangzhanshouye.style.display = "none";
	zixun.style.display = "block";
};

// 以下为轮播图js
var banner = document.querySelector("#banner-1");
var bannerImg = document.querySelectorAll(".img-list img");
var bannerlist = document.querySelectorAll(".pointer a");
var index = 0;
//  (1.鼠标不在轮播图区域的时候 轮播图正常播放)
var t = setInterval(function () {
	if (index == 2) {
		index = 0;
	} else {
		index++;
	}
	for (var n = 0; n <= 2; n++) {
		bannerImg[n].className = "";
	}
	bannerImg[index].className = "show";
	for (var n = 0; n <= 2; n++) {
		bannerlist[n].className = "";
	}
	bannerlist[index].className = "active";
}, 2000);
//  (2.鼠标移入轮播图区域 轮播图播放暂停)
banner.addEventListener("mouseenter", function () {
	clearInterval(t);
});
//  (3.鼠标移出轮播图区域 轮播图恢复播放)
banner.addEventListener("mouseleave", function () {
	t = setInterval(function () {
		if (index == 2) {
			index = 0;
		} else {
			index++;
		}
		for (var n = 0; n <= 2; n++) {
			bannerImg[n].className = "";
		}
		bannerImg[index].className = "show";
		for (var n = 0; n <= 2; n++) {
			bannerlist[n].className = "";
		}
		bannerlist[index].className = "active";
	}, 2000);
});
var bannerLeft = document.querySelector("#bannerLeft");
var bannerRight = document.querySelector("#bannerRight");
bannerLeft.addEventListener("click", function () {
	if (index == 0) {
		index = 2;
	} else {
		index--;
	}
	for (var n = 0; n <= 2; n++) {
		bannerImg[n].className = "";
	}
	bannerImg[index].className = "show";
	for (var n = 0; n <= 2; n++) {
		bannerlist[n].className = "";
	}
	bannerlist[index].className = "active";
});
bannerRight.addEventListener("click", function () {
	if (index == 2) {
		index = 0;
	} else {
		index++;
	}
	for (var n = 0; n <= 2; n++) {
		bannerImg[n].className = "";
	}
	bannerImg[index].className = "show";
	for (var n = 0; n <= 2; n++) {
		bannerlist[n].className = "";
	}
	bannerlist[index].className = "active";
});
// 鼠标移入左下方导航（小圆点）切换到对应的图片
for (var n = 0; n <= 2; n++) {
	bannerlist[n].index = n;
	bannerlist[n].addEventListener("mouseenter", function () {
		for (var n = 0; n <= 2; n++) {
			bannerImg[n].className = "";
		}
		index = this.index;
		for (var n = 0; n <= 2; n++) {
			bannerlist[n].className = "";
		}
		bannerImg[index].className = "show";
		bannerlist[index].className = "active";
	});
}
// 登录显示
var login = document.querySelector(".header-body-right");
var login_regster = document.querySelector(".login-regster-box");
var closed_login = document.querySelector("#closed-login");
var root_login = document.querySelector("#root-login");
var login_regster_btn = document.querySelector("#login-regster-btn");
var title = document.querySelector('.login-regster-head');
var login_body = document.querySelector(".login-regster");
//拖拽
// (1) 鼠标按下， 就获得鼠标在盒子内的坐标
title.addEventListener("mousedown", function (e) {
	var x = e.pageX - login_body.offsetLeft;
	var y = e.pageY - login_body.offsetTop;
	// (2) 鼠标移动的时候，把鼠标在页面中的坐标，减去 鼠标在盒子内的坐标就是模态框的left和top值
	document.addEventListener("mousemove", move);

	function move(e) {
		login_body.style.left = e.pageX - x + "px";
		login_body.style.top = e.pageY - y + "px";
	}
	// (3) 鼠标弹起，就让鼠标移动事件移除
	document.addEventListener("mouseup", function () {
		document.removeEventListener("mousemove", move);
	});
});

login.addEventListener("click", function () {
	//点击后显示登录注册
	login_regster.style.display = "block";
});
closed_login.addEventListener("click", function () {
	//点击后隐藏登录注册
	login_regster.style.display = "none";
});
root_login.addEventListener("click", function () {
	login_regster_btn.style.display = "none";
	login_regster.style.display = "none";
});
for(var n=0;n<=2;n++){
    bannerlist[n].index=n;
    bannerlist[n].addEventListener('mouseenter',function(){
        for(var n=0;n<=2;n++){
            bannerImg[n].className='';
        }
        index=this.index;
        for(var n=0;n<=2;n++){
            bannerlist[n].className='';
        }
        bannerImg[index].className='show';
        bannerlist[index].className='active';
    })
}
var advert= document.querySelector('.advert');
var spans = document.querySelector('.span-s');
spans.onclick = function(){
	advert.style.display = "none";
}

// 该效果未实现！！！
// $(function(){
// 	$('.advert').stop().slideDown(1000).fadeOut.dadeln(1000);
// })
// 搜索框焦点显示
var search_btn= document.querySelector(".search-btn");
var search = document.querySelector('.search-input');
search.onfocus = function(){
	if(this.value==='请输入内容'){
		this.value='';
	}
	search_btn.style.backgroundColor="#1d99e3"
	this.style.borderColor="#1d99e3"
	this.style.borderLeft="6px solid #fff"
	this.style.borderRight="6px solid #fff"
}
search.onblur = function(){
	if(this.value===''){
		this.value="请输入内容"
	}
	search_btn.style.backgroundColor="#8dc742"
	this.style.borderColor="#8dc742"
	this.style.borderLeft="6px solid #fff"
	this.style.borderRight="6px solid #fff"
}
// 点击后返回显示消失
var return_top_btn = document.querySelector('.shar-to-three')
document.addEventListener("scroll", function(){
	console.log(window.pageYOffset)
	if(window.pageYOffset>=200){
		return_top_btn.style.display="block"
	}else{
		return_top_btn.style.display="none"
	}
})
