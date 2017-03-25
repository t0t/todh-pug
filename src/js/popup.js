var $popupBtn = $('.ContactBtn');
var $popupDiv = $('.Contact--form');
$popupBtn.click(function(){
	$popupDiv.css({
		opacity: 1,
		position: "fixed"
	});
});
console.log($popupDiv);
