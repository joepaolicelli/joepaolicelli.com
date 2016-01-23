$(document).foundation();

if(Foundation.MediaQuery.atLeast('medium')) {

  var myHeaderHeight = $(".my-header").height();
  var siteTitleHeight = $(".site-title > h1").height();
  var headerLinksHeight = $(".header-links").height();

  var adjustHeaderPadding = function () {
      $(".site-title").css("padding-top", myHeaderHeight - siteTitleHeight);
      $(".header-links").css("padding-top", myHeaderHeight - headerLinksHeight);
  }

  adjustHeaderPadding();

  $(window).on('resize', adjustHeaderPadding);
}

/* Sticky Footer */
/* http://codepen.io/imohkay/pen/htpzf */
$(document).ready(function(){
  $(window).resize(function(){
      var footerHeight = $('#footer').outerHeight();
      var stickFooterPush = $('#push').height(footerHeight);

      $('#wrapper').css({'marginBottom':'-' + footerHeight + 'px'});
    });

    $(window).resize();
  });
