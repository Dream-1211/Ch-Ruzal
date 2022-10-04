//弹出广告

$('.ad-bb img').fadeIn(2000).delay(3000).animate({
	opacity: '0',
	width: '0'
}, 2000, function() {
	$(this).hide();
})