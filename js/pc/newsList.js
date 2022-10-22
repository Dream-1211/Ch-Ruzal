//新闻列表
$(function () {
	$(".page1").css({ "background-color": "#434343", color: "#fff" });
	function getNewsList() {
		axios
			.get(
				"https://www.mxnzp.com/api/news/list?typeId=511&page=1&app_id=qhoalrrshsilrpkg&app_secret=Rm9qSElZZDJzaXZ5UHNuMGZtWThzZz09",
			)
			.then(function (res) {
				if (res.data.code !== 1|| res.code ==102) {
					return alert("数据请求失败");
				}
				for (var i = 0; i < 9; i++) {
					if (res.data.data.length !== 4) {
						//重新请求
						axios.get(
							"https://www.mxnzp.com/api/news/list?typeId=511&page=1&app_id=qhoalrrshsilrpkg&app_secret=Rm9qSElZZDJzaXZ5UHNuMGZtWThzZz09",
						);
					} else {
						//删除多余值
						res.data.data.shift();
					}
				}
				res.data.data.imgList === undefined
					? axios.get(
							//重新请求
							"https://www.mxnzp.com/api/news/list?typeId=511&page=1&app_id=qhoalrrshsilrpkg&app_secret=Rm9qSElZZDJzaXZ5UHNuMGZtWThzZz09",
					  )
					: console.log("请求成功!");
				var htmlList = template("tpl-news2", res.data.data);
				$("#tpl-news1").html(htmlList);
			});
	} //切换新闻列表的函数
	getNewsList();
	$(".up-dw-box a").click(function () {
		// $(this).css({ "background-color": "#fff", color: "#434343" });
		// $(this)
		// 	.siblings("button")
		// 	.css({ "background-color": "#434343", color: "#fff" });
		$(this).css({ "background-color": "#434343", color: "#fff" });
		// 3. 其余的兄弟去掉背景颜色 隐式迭代
		$(this).siblings("a").css({ background: "", color: "#434343" });
	});
	$(".up-page,.down-page").click(function () {
		getNewsList()
	});
});
