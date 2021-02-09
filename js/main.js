	$(window).ready(function(){
		$('#slider').slick({
		dots: true,
			customPaging: function (slider, i) {
				return '<button class="tab">' + $(slider.$slides[i]).attr('title') + '</button>';
			},
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: false,
		arrows: true,
	});

		$('.drawer').drawer({
			class: {
				nav: 'drawer-nav',
				toggle: 'drawer-toggle',
				overlay: 'drawer-overlay',
				open: 'drawer-open',
				close: 'drawer-close',
				dropdown: 'drawer-dropdown'
			},
			iscroll: {
				mouseWheel: true,
				preventDefault: false
			},
			showOverlay: true
		});

});

function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}




$(document).ready(function () {
	$('.accordion-item__trigger').click(function () {
		$(this).next('.accordion-item__content').slideToggle(400);
	})
})