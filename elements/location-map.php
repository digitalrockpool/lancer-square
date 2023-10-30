<?php 
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

add_shortcode( 'location-map', 'location_map' );
function location_map( $args ) {
	
	ob_start();
	?>
  <div class="brxe-block">
	  <div class='map' style='height:700px;' id='location-map'></div> 
</div>

<div class="brxe-block">
  <button class="accordion">Section 1</button>
<div class="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button class="accordion">Section 2</button>
<div class="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<button class="accordion">Section 3</button>
<div class="panel">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
</div>

<script>
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
</script>

	<script type='text/javascript'>
    var $j = jQuery.noConflict();
var labels = '123456';
var labelIndex = 0;

window.addEventListener('DOMContentLoaded', function() {
  var parkAccordion = document.getElementById("accordion-park");
  var parkClass = parkAccordion.classList.contains("brx-open");
  if (parkClass) {
    var locations = [
      ['Kensington Gardens', 51.5069903, -0.1817399, 1],
      ['Holland Park', 51.5020449, -0.2056415, 2],
      ['Green Park', 51.5039071, -0.1464316, 3],
      ['Regents Park', 51.5284877, -0.1512304, 4],
      ['Hyde Park', 51.5105411, -0.1715335, 5],
      ['St James Park', 51.502463, -0.1373858, 6]
    ];
  }

  var cultureAccordion = document.getElementById("accordion-culture");
  var cultureClass = cultureAccordion.classList.contains("brx-open");
  if (cultureClass) {
    var locations = [
      ['Kensington Gardens', 51.501364, 51.501364, 1],
      ['Christies', , , 2],
      ['Royal Hospital Chelsea', , , 3],
      ['Cadogan Hall', , , 4],
      ['Burton Court', , , 5],
      ['Natural History Museum', , , 6],
      ['Royal Albert Hall', , , 7],
      ['Design Museum', , , 8],
      ['Victoria and Albert Museum', , , 9],
      ['18 Stafford Terrace', , , 10],
      ['Portabello Market', , , 11],
      ['Kensington Olympia', , , 12],
      ['Serpentine Sackler Gallery', , , 13],
      ['Serpentine Gallery', , , 14],
      ['Saatchi Gallery', , , 15],
      ['Stamford Bridge Stadium', , , 16],
      ['Queens Club', , , 17],
      ['Opera Holland Park', , , 18],
      ['Sloane Square', , , 19],
      ['RHS Chelsea Flower Show', , , 20]
    ];
  }

  var retailAccordion = document.getElementById("accordion-retail");
  var retailClass = retailAccordion.classList.contains("brx-open");
  if (retailClass) {
    var locations = [
      ['Gucci', , , 1],
      ['Harrods', , , 2],
      ['Louis Vuitton', , , 3],
      ['Havey Nichols', , , 4],
      ['Chanel', , , 5],
      ['Burberry', , , 6],
      ['Hermes', , , 7],
      ['Cartier', , , 8],
      ['Selfridges', , , 9],
      ['Westfield London Shopping Centre', , , 10]
    ];
  }

  var diningAccordion = document.getElementById("accordion-dining");
  var diningClass = diningAccordion.classList.contains("brx-open");
  if (diningClass) {
    var locations = [
      ['Lanceston Place', , , 1],
      ['Core by Clare Smyth', , , 2],
      ['Zuma Knightsbridge', , , 3],
      ['The Ritz', , , 4],
      ['Min Jiang at the Royal Garden Hotel', , , 5],
      ['Sexy Fish', , , 6],
      ['Restaurant Ours', , , 7],
      ['Annabels Mayfair', , , 8],
      ['Novikov Restaurant', , , 9],
      ['Sumosan Twiga Knightsbridge', , , 10],
      ['Scotts Mayfair', , , 11]
    ];
  }

  var educationAccordion = document.getElementById("accordion-education");
  var educationClass = educationAccordion.classList.contains("brx-open");
  if (educationClass) {
    var locations = [
      ['Little Cherubs', , , 1],
      ['The Willcocks Nursery School', , , 2],
      ['The Kensington Kindergarten', , , 3],
      ['UCL', , , 4],
      ['LSE', , , 5],
      ['Lings College London', , , 6]
    ];
  }

  var transportAccordion = document.getElementById("accordion-transport");
  var transportClass = transportAccordion.classList.contains("brx-open");
  if (transportClass) {
    var locations = [
      ['High Street Kensington', 51.5008834, -0.1952212, 1],
      ['Knightsbridge', 51.5014016, -0.1627277, 2],
      ['Oxford Circus Underground', 51.5152117, -0.1444302, 3],
      ['Piccadilly Circus', 51.5099734, -0.1375449, 4],
      ['Hyde Park Corner', 51.50303, -0.1549949, 5],
      ['Green Park', 51.5069327, -0.1454587, 6],
      ['Sloane Square', , , 7]
    ];
  }
});

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('location-map'), {
    center: {lat: 51.5033464, lng: -0.1936648},
    zoom: 15,
    streetViewControl: false,
    mapTypeControl: false,
    mapId: '515deb64a21ab722'
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
      label: labels[labelIndex++ % labels.length],
    });
  };
} 

$j("a").click(function(){
    var id = this.id;
    map.setCenter(new google.maps.LatLng(locations[id][1], locations[id][2]))
    return false;
});
</script>
<?php
	$output = ob_get_clean();
	return $output;
}