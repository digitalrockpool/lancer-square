var $j = jQuery.noConflict();
	
$j(document).ready(function() {
	console.log('loaded js')
  $j('.slider-trigger').on('click', function() {
 var classArray = this.className.split(' ');
       classArray.forEach(function(cls) {
          var pattern = /^slider-(\d+)$/;
          var match = pattern.exec(cls);
          if (match) {
            var sliderNumber = match[1]; 
            var splide = new Splide('#brxe-mxdmjh').mount();
            splide.go(sliderNumber - 1);
          }
        });
  });
});