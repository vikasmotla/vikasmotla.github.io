// Menu-toggle button
$(document).ready(function() {
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
});
// Scrolling Effect
var lastScrollTop = 0;
var divs = $('.centerText');
$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $('nav').addClass('black');
    $('#logo')[0].style.color='#fff'
    $('#menuIcons')[0].style.color='#fff'
    console.log($('#logo'));
    var st = $(this).scrollTop();
    var op = 1;
    if (st > lastScrollTop){
      op = op - 0.01;
    } else {
      op = op + 0.01;
    }
    lastScrollTop = st;
  } else {
    $('nav').removeClass('black');
    $('#logo')[0].style.color='#000'
    $('#menuIcons')[0].style.color='#000'

    console.log('top');
  }
})
