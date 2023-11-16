<?php 
/* *** enqueue custom scripts and styles *** */
add_action( 'wp_enqueue_scripts', function() {

	if ( ! bricks_is_builder_main() ) {
		wp_enqueue_style( 'bricks-child', get_stylesheet_uri(), ['bricks-frontend'], filemtime( get_stylesheet_directory() . '/style.css' ) );
    wp_enqueue_script( 'back-to-top', get_stylesheet_directory_uri() . '/lib/js/back-to-top.js', array('jquery'), null, true);
    wp_enqueue_script( 'location-map', get_stylesheet_directory_uri() . '/lib/js/location-map.js', array('jquery'), null, true);
    wp_enqueue_script( 'splider', get_stylesheet_directory_uri() . '/lib/js/splider.js', array('jquery'), null, true);
		wp_enqueue_script( 'google-maps', '//maps.googleapis.com/maps/api/js?key=AIzaSyD89Q_d3mJYLvb9K1Rvj1wV61nH3Afg59E&callback=initMap', array(), null, true );
	}
} );

// require_once dirname( __FILE__ ) . '/elements/map.php';

/* *** add theme support for logo *** */
add_theme_support( 'custom-logo' );

/* *** add text strings to builder *** */
add_filter( 'bricks/builder/i18n', function( $i18n ) {
  // for element category 'custom'
  $i18n['custom'] = esc_html__( 'Custom', 'bricks' );

  return $i18n;
} );

/* *** add body class *** */
add_filter( 'body_class', function( $classes ) {
	return array_merge( $classes, array( 'hero-active' ) );
} );

/* *** disable theme and plugin editor *** */
define('DISALLOW_FILE_EDIT',true);

/* *** custom login *** */
add_action( 'login_head', function() {
	echo '<link rel="stylesheet" type="text/css" href="'.get_stylesheet_directory_uri().'/lib/css/login.css" />';
} );

add_filter( 'login_headerurl', function() {
	return get_bloginfo( 'url' );
} );

add_filter( 'login_headertitle', function() {
	return get_bloginfo( 'name' );
} );

