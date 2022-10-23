//新闻列表
$(function () {
	$(".page1").css({ "background-color": "#434343", color: "#fff" });
	function getNewsList() {
		axios
			.get(
				"https://www.mxnzp.com/api/news/list?typeId=511&page=1&app_id=qhoalrrshsilrpkg&app_secret=Rm9qSElZZDJzaXZ5UHNuMGZtWThzZz09",
			)
			.then(function (res) {
				if (res.data.code !== 1 || res.code == 102) {
					return alert("数据请求失败");
				}
				for (var i = 0; i < 8; i++) {
					if(res.data.data.length>4){
					//删除多余值
					res.data.data.shift();
					}
				}
				console.log(res.data.data.length);
				console.log(res.data.data);
				console.log(res.data.data[0].imgList[0] = "../img/zjsp/云南雪莲果.jpg");
				console.log(
					res.data.data.length !== 4 || res.data.data[0].imgList === null,
				);
				if (res.data.data[0].imgList === null) {
					for (var i = 0; i < 4; i++) {
						res.data.data[i].imgList[0] = "../img/zjsp/云南雪莲果.jpg"
						console.log(imgList[i])
					}
				}
				// for(;res.data.data.length !== 4 || res.data.data[0].imgList === null;){
				// 	setTimeout(() => {
				// 		axios
				// 	.get(
				// 		"https://www.mxnzp.com/api/news/list?typeId=511&page=1&app_id=qhoalrrshsilrpkg&app_secret=Rm9qSElZZDJzaXZ5UHNuMGZtWThzZz09",
				// 	)
				// 	.then(function (res) {
				// 		if (res.data.code !== 1 || res.code == 102) {
				// 			return alert("数据请求失败");
				// 		}
				// 		for (var i = 0; i < 8; i++) {
				// 			//删除多余值
				// 			res.data.data.shift();
				// 		}
				// 	});
				// 	}, 2000);
				// 	if((res.data.data.length !== 4 || res.data.data[0].imgList === null)==false){
				// 		return false
				// 	}
				// 	console.log(res.data.data.length);
				// 	console.log(res.data.data);
				// 	console.log(res.data.data.length !== 4);
				// 	console.log(res.data.data[0].imgList === null);
				// }
				var htmlList = template("tpl-news2", res.data);
				$("#tpl-news1").html(htmlList);
			});
	} //切换新闻列表的函数
	getNewsList();
	$(".up-dw-box a").click(function () {
		$(this).css({ "background-color": "#434343", color: "#fff" });
		// 3. 其余的兄弟去掉背景颜色 隐式迭代
		$(this).siblings("a").css({ background: "", color: "#434343" });
	});
	$(".up-page,.down-page").click(function () {
		getNewsList();
	});
});
