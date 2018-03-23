$('.what').on("click", function() {
  $('.title').addClass('animated strobe');
  $('.hero').fadeOut(3000);
    $('.hero2').css('transform', 'scale(0)')
    $('.titleEx').delay(5000).fadeIn(5000);
    // $('.title2').delay(15000).fadeIn(3000);
    $('.divinevid').delay(20000).fadeIn(3000, function() {
      // Get the video
      var video = document.getElementById("myVideo");
      var btn = document.getElementById("myBtn");



      video.play();

      $('.divinevid').delay(60 * 1000).fadeOut(3000);
      $('.hero').delay(60 * 1000).fadeIn(3000);

    })

})
