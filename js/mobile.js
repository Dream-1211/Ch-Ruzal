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
window.addEventListener("load",function(){

	var advertise = document.querySelector(".header-banner-head");
	var topbar = document.querySelector(".topbar");
	var zhuye = document.querySelector(".zhuye");
	var about = document.querySelector(".guanyuwomen");
	var price_buy = document.querySelector(".price-buy-box");
	var shop_car = document.querySelector(".shop-car-infor");
	var footer = document.querySelector(".footer-more");
	var topbar_ele = document.querySelectorAll(".topbar-footer p");
	var topbar_head= document.querySelector(".topabr");
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
	for(var i = 0; i < 3; i++) {
		ele[i].style.paddingTop = "150px";
	}
	topbar_ele[0].addEventListener("click", () => {
		ele[0].style.display = "block";
		ele[1].style.display = "none";
		ele[2].style.display = "none";
	});
	topbar_ele[1].addEventListener("click", () => {
		ele[0].style.display = "none";
		ele[1].style.display = "block";
		ele[2].style.display = "none";
	});
	topbar_ele[5].addEventListener("click", () => {
		ele[0].style.display = "none";
		ele[1].style.display = "none";
		ele[2].style.display = "block";
	});
	// 关闭广告
	var ad_btn = document.querySelector(".closed-btn-1");
	var top_banner_head = document.querySelector(".top-bar-head");
	ad_btn.addEventListener("click", () => {
		advertise.style.display = "none";
		topbar.style.cssText = "top: 0"
		ele[0].style.cssText = "padding-top: 105px"
		ele[1].style.cssText = "padding-top: 105px"
		ele[2].style.cssText = "padding-top: 105px"
	});
	
	var footer_bar = document.querySelectorAll(".footer-banner-header a")
	footer_bar[0].style.color="#1d99e3"
	for (var i = 0; i < footer_bar.length; i++) {
		footer_bar[i].onclick = function () {
			for (var i = 0; i < footer_bar.length; i++) {
				footer_bar[i].style.color='';
			}
			this.style.color='#1d99e3';
		};
	}
	footer_bar[1].addEventListener("click",()=>{
		shop_car.style.display='block';
		zhuye.style.display='none';
	})
})