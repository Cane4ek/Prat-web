$(document).ready(function(){
	$('.bank-slider').slick({
  		slidesToShow: 4,
  		slidesToScroll: 1,
  		autoplay: false,
  		autoplaySpeed: 3000,
  		infinite: true,
  		dots: false,
  		focusOnSelect: true,
  		nextArrow: '<div class="next"></div>',
  		prevArrow: '<div class="prev"></div>',
  		responsive: [
				    {
				      breakpoint: 1400,
				      settings: {
				        arrows: true,
				        centerMode: true,
				        centerPadding: '10px',
				        slidesToShow: 3
				      }
  					},
					  {
					      breakpoint: 1120,
					      settings: {
					        arrows: false,
					        centerMode: true,
					        centerPadding: '10px',
					        slidesToShow: 2
					      }
					  	},
						  	{
						      breakpoint: 800,
						      settings: {
						        arrows: false,
						        centerMode: true,
						        centerPadding: '0',
						        slidesToShow: 1
						      }
						  	},
     					]
					})
				});

$('.dropdown-menu').on('click', function(e){
	$('#navbarPages').toggleClass('show')
});



