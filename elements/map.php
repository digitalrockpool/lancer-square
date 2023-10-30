<?php 
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

add_shortcode( 'map', 'location_map' );
function location_map( $args ) {
	
	ob_start(); ?>
  
	<div class='map' style='height:700px;' id='location-map'></div> 

	<?php
	$output = ob_get_clean();
	return $output;
}