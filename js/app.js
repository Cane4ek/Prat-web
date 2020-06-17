$(document).ready(function(){
	$('.bank-slider').slick({
  		slidesToShow: 4,
  		slidesToScroll: 1,
  		autoplay: true,
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

/*---Calendar---*/
jQuery(document).ready(function(){
    $.datepicker.setDefaults({
    	changeMonth: true,
  		changeYear: true
    });
    
    $( "#datepicker" ).datepicker();
  } );

    $('#datepicker').datepicker("setDate", new Date()
 );







/*$( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
})
$( function( datepicker ) {

$.datepicker.regional.uk = {
	closeText: "Закрити",
	prevText: "&#x3C;",
	nextText: "&#x3E;",
	currentText: "Сьогодні",
	monthNames: [ "Січень","Лютий","Березень","Квітень","Травень","Червень",
	"Липень","Серпень","Вересень","Жовтень","Листопад","Грудень" ],
	monthNamesShort: [ "Січ","Лют","Бер","Кві","Тра","Чер",
	"Лип","Сер","Вер","Жов","Лис","Гру" ],
	dayNames: [ "неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота" ],
	dayNamesShort: [ "нед","пнд","вів","срд","чтв","птн","сбт" ],
	dayNamesMin: [ "Нд","Пн","Вт","Ср","Чт","Пт","Сб" ],
	weekHeader: "Тиж",
	dateFormat: "dd.mm.yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
$.datepicker.setDefaults( datepicker.regional.uk );

return datepicker.regional.uk;

} ) ;*/
/*---End Calendar---*/



     jQuery(function($) {
      /*function for placeholder select*/
      function selectPlaceholder(selectID){
        var selected = $(selectID + ' option:selected');
        var val = selected.val();
        $(selectID + ' option' ).css('color', '#000');
        selected.css('color', '#d5d5d5');
        if (val == "") {
          $(selectID).css('color', '#d5d5d5');
        };
        $(selectID).change(function(){
          var val = $(selectID + ' option:selected' ).val();
          if (val == "") {
            $(selectID).css('color', '#d5d5d5');
          }else{
            $(selectID).css('color', '#000');
          };
        });
      };

      selectPlaceholder('#select');

    });

      jQuery(function($) {
      /*function for placeholder select*/
      function selectPlaceholder(selectID){
        var selected = $(selectID + ' option:selected');
        var val = selected.val();
        $(selectID + ' option' ).css('color', '#000');
        selected.css('color', '#d5d5d5');
        if (val == "") {
          $(selectID).css('color', '#d5d5d5');
        };
        $(selectID).change(function(){
          var val = $(selectID + ' option:selected' ).val();
          if (val == "") {
            $(selectID).css('color', '#d5d5d5');
          }else{
            $(selectID).css('color', '#000');
          };
        });
      };

      selectPlaceholder('#select-first');

    });

          jQuery(function($) {
      /*function for placeholder select*/
      function selectPlaceholder(selectID){
        var selected = $(selectID + ' option:selected');
        var val = selected.val();
        $(selectID + ' option' ).css('color', '#000');
        selected.css('color', '#d5d5d5');
        if (val == "") {
          $(selectID).css('color', '#d5d5d5');
        };
        $(selectID).change(function(){
          var val = $(selectID + ' option:selected' ).val();
          if (val == "") {
            $(selectID).css('color', '#d5d5d5');
          }else{
            $(selectID).css('color', '#000');
          };
        });
      };

      selectPlaceholder('#select-second');

    });

/*let arrSelect = document.querySelectorAll('.form-item select');

arrSelect.forEach(e => e.classList.add('has-placeholder'));

arrSelect.forEach(e => e.addEventListener('change', (e) => {
  e.currentTarget.classList.remove('has-placeholder');
}));
*/
/*$("select:has(option[value=]:first-child)").on('change', function() {
  $(this).toggleClass("form-option", $.inArray($(this).val(), ['', null]) >= 0);
}).trigger('change');*/


/* var map;
 var baOffices;
      function initMap() {
      	var markerBA = {lat: 49.9741606, lng: 36.2889036};

        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 49.9741606, lng: 36.2889036},
          zoom: 15,
       styles:   [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
 });
   var uluru = {lat: 49.9741606, lng:  36.2889036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru,icon: 'image/map-marker/marker.svg', map: map});
    function newLocation(newLat,newLng){
	map.setCenter({
		lat: newLat,
		lng: newLng
	});
}

};
 const googleMapsScript = document.createElement('script');
 googleMapsScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAu_qTeVtQzsi87xkRdcjYk7IP4xvDs9bo&callback=initMap";
 document.head.appendChild(googleMapsScript);*/
