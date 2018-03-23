$('.what').on("click", function() {
  $('.title').addClass('animated strobe');
  $('.hero').fadeOut(3000);
    $('.hero2').css('transform', 'scale(0)')
    $('.titleEx').delay(5000).fadeIn(5000);
$('.title2').delay(15000).fadeIn(3000);
})
