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
var 