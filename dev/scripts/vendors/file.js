$(document).ready(function(){
    
    $('.owl-1').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
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
                items:6,
                nav:true,
                loop:false
            },
            1800:{
                items:5,
                nav:true,
                loop:false
            }
        }
    })

    $('.owl-2').owlCarousel({
        loop:true,
        margin:0,        
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
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
                items:3,
                nav:true,
                loop:false
            },
            1800:{
                items:4,
                nav:true,
                loop:false
            }
        }
    })

$("#offcanvas-btn").click(function(){
    $("#offcanvas").css("width", "212px");
    $("body").css("margin-right","212px");
})
$("#offcanvas a").click(function(){
    $("#offcanvas").css("width", "0px");
    $("body").css("margin-right","0px");
})  


});
