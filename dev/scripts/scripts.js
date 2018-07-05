$(document).ready(function () {
    // Resize adjustment
    $(window).resize(function () {
      footerAdjustment();
      headerAdjustment();
      wrapAdjustment();
    });
    footerAdjustment();
    headerAdjustment();
    wrapAdjustment();
    
  });  

  function wrapAdjustment(){
    var headerHeight = $('.theme-header').outerHeight();
    $(".theme-wrap").css('margin-top', headerHeight + 'px');
    $(".theme-banner").css('margin-top', headerHeight + 'px');
  }
  
  // Sticky Footer
  function footerAdjustment() {
    var height = $(".theme-footer").outerHeight();
    $("#push").css('height', height);
    $(".theme-wrap").css('margin-bottom', '-' + height + 'px');
  }
  
  //var navigation = $('#nav-main').okayNav({
  //    //toggle_icon_content: '<div style="position: relative;float: left;padding-right: 0;">Navigation</div> <div><span /><span /><span /></div>',
  //});
  
  function headerAdjustment() {
    var headerHeight = $('.theme-header').outerHeight(),
    finalHeight = headerHeight;
    $('.nav-right').css('height', 'calc(100% - ' + finalHeight + 'px)');
    //$(".theme-main").css('padding-top', '' + finalHeight + 'px');
  }
  
  
  var Layout = (function () {
    // handle carousel
    var handleCarousel = function () {
      var $item = $(".theme-carousel__carousel-inner .item");
      $item.eq(0).addClass("active");
      $item.addClass("full-screen");
  
      $(".carousel img").each(function () {
        var $src = $(this).attr("src");
        var $color = $(this).attr("data-color");
        $(this)
          .parent()
          .css({
            "background-image": "url(" + $src + ")",
            "background-color": $color
          });
        $(this).remove();
      });
    };
  
    var handleCard = function () {
      var $item = $(".card__img");
      $item.addClass("full-screen");
      $(".card__img img").each(function () {
        var $src = $(this).attr("src");
        var $color = $(this).attr("data-color");
        
        $(this)
          .parent()
          .css({
            "background-image": "url(" + $src + ")",
            "background-color": $color
          });
        $(this).remove();
      });
    };
  
    var carouselAdjustment = function () {
      var height = $(window).height() - $(".theme-header").outerHeight(); //getting windows height
      $('.theme-carousel').css('height', (height + 1) + 'px'); //and setting height of carousel
    };
  
    var attachResizeEvent = function () {
      $(window).on("resize", function () {
        carouselAdjustment();
      });
    };
  
    return {
      init: function () {
        handleCarousel(); // initial setup for carousel
        handleCard(); // initial setup for card
        carouselAdjustment();
        attachResizeEvent();
      }
    };
  })();
  
  $(document).ready(function () {
    Layout.init();
  });
  


$("#offcanvas-btn").click(function(){
  $("#theme-offcanvas").css({"width":"250px", "transition":"all .7s ease-in-out"});
  $(".theme-main").css("margin-right","250px");
});

$("#theme-offcanvas a").click(function(){
  $("#theme-offcanvas").css({"width":"0px", "transition":"all .7s ease-in-out"});
  $(".theme-main").css("margin-right","0px");
});