var $j = jQuery.noConflict();
	
$j('#back-to-top').on('click', function(e) {
  e.preventDefault();
  $j('html, body').animate({scrollTop:0}, '300');
});