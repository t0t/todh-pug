$('.CoverFeatures > div:gt(0)').hide();

setInterval( function() {
	$(".CoverFeatures > div:first")
		.fadeOut(500)
		.next()
		.fadeIn(500)
		.end()
		.appendTo(".CoverFeatures");
}, 4000);
