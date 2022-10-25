//新闻列表
$(function () {
	$(".page1").css({ "background-color": "#434343", color: "#fff" });
	function getNewsList() {
		//刷新新闻列表
		axios({
			method: "get", //请求方式
			url: "https://api-hmugo-web.itheima.net/api/public/v1/goods/search", //请求地址,
			params: {
				//url参数
				query:"特产",//关键字
				pagenum:1,//页码
				pagesize:10,//单页内容
			},
			// headers: {//头信息
			// },
			data: {
				//请求体参数
			},
		}).then(function (res) {

			var htmlList = template("tpl-news2", res.data);
			$("#tpl-news1").html(htmlList);
		});
	} //切换新闻列表的函数
	getNewsList();
	$(".up-dw-box a").click(function () {
		//分页按钮
		$(this).css({ "background-color": "#434343", color: "#fff" });
		// 3. 其余的兄弟去掉背景颜色 隐式迭代
		$(this).siblings("a").css({ background: "", color: "#434343" });
	});
	$(".up-page,.down-page").click(function () {
		getNewsList();
	});
});
