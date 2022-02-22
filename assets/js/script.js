$(document).ready(function(){



  $('.min-nav-bar-section .nav-bar-ul .nav-ul-link ul li a').click(function(){
    $('html, body').animate({
      scrollTop: $('#' + $(this).data('scroll')).offset().top
    },1100);
  });
  
  
  



  $('.menu-icon i ').click(function(){
    $('.nav-bar-ul').addClass( "left-0");
    $('.over-lay').show();
    $('body').addClass('over-la')
  });


  $('.close-icon i, .over-lay, .projects , .contact, .about-us').click(function(){
    $('.nav-bar-ul').removeClass('left-0')
    $('.over-lay').hide();
    $('body').removeClass('over-la')
  });



// strat min-slider-intro
$('#intro-slider-contect').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    rtl: true,
    dots:true,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 2000,
    

  });



// client-slider


  $('.client-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    rtl: true,
    dots:true,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 2000,

  });

// end intro-slider-contect



AOS.init();
});