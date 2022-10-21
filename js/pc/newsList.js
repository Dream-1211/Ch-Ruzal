//新闻列表
$(function () {
	function getNewsList() {
		$(".page1").css({ "background-color": "#434343", "color": "#fff" });
		$.get(
			"https://www.mxnzp.com/api/news/list?typeId=511&page=1&app_id=qhoalrrshsilrpkg&app_secret=Rm9qSElZZDJzaXZ5UHNuMGZtWThzZz09",
			function (res) {
				if (res.code !== 1) {
					return alert("数据请求失败");
				}
				// $.each(res.data, function (i, ele) {
				// 	if (ele.imgList[0]) {
				// 	} else [$.get("https://www.mxnzp.com/api/news/list?typeId=511&page=1&app_id=qhoalrrshsilrpkg&app_secret=Rm9qSElZZDJzaXZ5UHNuMGZtWThzZz09")];
				// 	console.log(ele.imgList);
				// });
				// if (res.data.imgList[0]) {
				// 	res.data.imgList[0] = "";
				// } else {
				// 	res.data.imgList[0] = res.data.imgList[0];
				// }
				var htmlList = template("tpl-news2", res);
				$("#tpl-news1").html(htmlList);
			},
		);
	} //获取新闻列表的函数
	getNewsList();
	$(".up-dw-box a").click(function () {
		// $(this).css({ "background-color": "#fff", color: "#434343" });
		// $(this)
		// 	.siblings("button")
		// 	.css({ "background-color": "#434343", color: "#fff" });
   
		$.get(
			"https://www.mxnzp.com/api/news/list?typeId=511&page=1&app_id=qhoalrrshsilrpkg&app_secret=Rm9qSElZZDJzaXZ5UHNuMGZtWThzZz09",
			function (res) {
				if (res.code !== 1) {
					return alert("数据请求失败");
				}
				var htmlList = template("tpl-news2", res);
				$("#tpl-news1").html(htmlList);
			},
		);
        $(this).css({"background-color":"#434343","color":"#fff"});
        // 3. 其余的兄弟去掉背景颜色 隐式迭代
        $(this).siblings('a').css({"background":"","color":"#434343"});
	});
});
