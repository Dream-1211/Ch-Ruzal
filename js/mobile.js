// // 以下为轮播图js
// var banner=document.querySelector('#banneres-1');
// var bannerImg=document.querySelectorAll('.banneres img');
// var index=0;
// //  (1.鼠标不在轮播图区域的时候 轮播图正常播放)
// var t=setInterval(function(){
//     if(index==2){
//         index=0;
//     }else{
//         index++;
//     }
//     for(var n=0;n<=2;n++){
//         bannerImg[n].className='';
//     }
//     bannerImg[index].className='show';
//     for(var n=0;n<=2;n++){
//         bannerlist[n].className='';
//     }
//     bannerlist[index].className='active';
// }, 2000)
// //  (2.鼠标移入轮播图区域 轮播图播放暂停)
// banner.addEventListener('mouseenter',function(){
//     clearInterval(t);
// })
// //  (3.鼠标移出轮播图区域 轮播图恢复播放)
// banner.addEventListener('mouseleave',function(){
//     t=setInterval(function(){
//         if(index==2){
//         index=0;
//     }else{
//         index++;
//     }
//     for(var n=0;n<=2;n++){
//         bannerImg[n].className='';
//     }
//     bannerImg[index].className='show';
//     for(var n=0;n<=2;n++){
//         bannerlist[n].className='';
//     }
//     bannerlist[index].className='active';
//     },2000)
// })
var advertise = document.querySelector(".header-banner-head");
var topbar = document.querySelector(".topbar");
var zhuye = document.querySelector(".zhuye");
var about = document.querySelector(".guanyuwomen");
var price_buy = document.querySelector(".price-buy-box");
var shop_car = document.querySelector(".shop-car-infor");
var footer = document.querySelector(".footer-more");
var topbar_ele = document.querySelectorAll(".topbar-footer p");
var ele = [zhuye, price_buy, about];
price_buy.style.display = "none";
topbar_ele[0].style.borderBottom = "3px solid #1d99e3";
// 排他算法
for (var i = 0; i < topbar_ele.length; i++) {
	topbar_ele[i].onclick = function () {
		for (var i = 0; i < topbar_ele.length; i++) {
			topbar_ele[i].style.borderBottom = "";
		}
		this.style.borderBottom = "3px solid #1d99e3";
	};
}
topbar_ele[0].addEventListener("click", function () {
	ele[0].style.display = "block";
    ele[1].style.display = "none";
    ele[2].style.display = "none";
});
topbar_ele[1].addEventListener("click", function () {
	ele[0].style.display = "none";
    ele[1].style.display = "block";
    ele[2].style.display = "none";
});
topbar_ele[5].addEventListener("click", function () {
	ele[0].style.display = "none";
    ele[1].style.display = "none";
    ele[2].style.display = "block";
});