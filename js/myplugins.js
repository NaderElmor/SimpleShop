/*global $, jQuery*/
$(document).ready(function () {
    "use strict";
    
    //nice scroll library
    $("body").niceScroll({
        
        cursorwidth: 12,
        cursoropacitymin: 0.4,
        cursorborder: 'none',
        cursorborderradius: 4,
        autohidemode: 'leave'
        
    });

    
    //Carousel control
    $('.carousel').carousel({
        
        interval: 5000,
        pause: false
    });
    
    
    //Show/hide color box when clicks
    $('.gear-check').click(function () {
        
        $('.color-box').fadeToggle(700);
    });
    
    //change the color on click
    var  $colorBox = $('.option-box .color-box ul li'),
        $scrollBtn = $('.scrolltop');

    
    $colorBox.click(function () {
        $('link[href*="theme"]').attr("href", $(this).attr('data-value'));
        
    });
    
 
    //scrollTop    
    // Show/hide the button
    $(window).on('scroll', function () {
        
        if ($(this).scrollTop() >= 400) {
            
            $scrollBtn.fadeIn(500);
            
        } else {
            $scrollBtn.fadeOut(500);
        }
    });
    
    $scrollBtn.on('click', function () {
        
        $('html').animate({scrollTop: 0}, 1000);
    });
    
    //scroll to element
    $('.navbar-inverse .navbar-nav > li > a.contactUs').on('click', function (e) {
        
        e.preventDefault();
        $('html, body').animate({
        
            scrollTop: $('#' + $(this).data('scroll')).offset().top
        }, 1000);
    
    });
    
});


//loading 
$(window).on('load', function () {
    
    "use strict";
    
    $(".loading").delay(1000).fadeOut(500);
});

