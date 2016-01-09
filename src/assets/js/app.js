$(document).foundation();


(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

// Make site title stay on one line and be close to the div bottom border.

$(".site-title > h1").fitText(0.8);

var myHeaderHeight = $(".my-header").height();
var siteTitleHeight = $(".site-title > h1").height();

var adjustHeaderPadding = function () {
    $(".site-title").css("padding-top", myHeaderHeight - siteTitleHeight);
}

adjustHeaderPadding();
