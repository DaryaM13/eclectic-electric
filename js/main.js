var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

$(function() {
 let header_logo = $('.header-top_logo');
  
 $(window).scroll(function() {
   if($(this).scrollTop() > 82) {
    header_logo.addClass('logo-fixed');
   } else {
    header_logo.removeClass('logo-fixed');
   }
 });
});

$(function() {
  let header_top = $('.header-top_menu');
  
  $(window).scroll(function() {
    if($(this).scrollTop() > 82) {
     header_top.addClass('header-fixed');
    } else {
     header_top.removeClass('header-fixed');
    }
  });
 });

 $(function() {
  let header_links = $('.header-top_menu');
  
  $(window).scroll(function() {
    if($(this).scrollTop() > 82) {
     header_links.addClass('link-fixed');
    } else {
     header_links.removeClass('link-fixed');
    }
  });
 });

 $(function() {
  let primary_logo = $('.primary-logo');
  
  $(window).scroll(function() {
    if($(this).scrollTop() > 80) {
      primary_logo.addClass('primary-fixed');
    } else {
      primary_logo.removeClass('primary-fixed');
    }
  });
 });

 $(function() {
  let contact_btn = $('.contact-btn');
  
  $(window).scroll(function() {
    if($(this).scrollTop() > 80) {
      contact_btn.addClass('btn-fixed');
    } else {
      contact_btn.removeClass('btn-fixed');
    }
  });
 });