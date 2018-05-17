$(document).ready(function(){
    
    //$('.owl-1').owlCarousel({
    //    loop:true,
    //    margin:10,
    //    responsiveClass:true,
    //    responsive:{
    //        0:{
    //            items:1,
    //            nav:true
    //        },
    //        500:{
    //            items:2,
    //            nav:true
    //        },
    //        768:{
    //            items:2,
    //            nav:false
    //        },
    //        992:{
    //            items:3,
    //            nav:true,
    //            
    //        },
    //        1200:{
    //            items:6,
    //            nav:true,
    //            loop:false
    //        },
    //        1800:{
    //            items:6,
    //            nav:true,
    //            loop:false
    //        }
    //    }
    //})

    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
      });
      // layout Masonry after each image loads
      $grid.imagesLoaded().progress( function() {
        $grid.masonry();
    });  

    $('.owl-2').owlCarousel({
        loop:true,
        margin:0,        
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            550:{
                items:2,
                nav:true
            },
            768:{
                items:2,
                nav:false
            },
            992:{
                items:3,
                nav:true,
                
            },
            1200:{
                items:4,
                nav:true,
                loop:false
            },
            1800:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });
});
