$('.what').on("click", function() {
  $('.landingPage').hide(0);
  $('.title').addClass('animated strobe');
  $('.hero').fadeOut(3000);
    $('.hero2').css('transform', 'scale(0)')
    $('.titleEx').delay(5000).fadeIn(5000);
    // $('.title2').delay(15000).fadeIn(3000);
    $('.divinevid').delay(20000).fadeIn(3000, function() {
      // Get the video
      var video = document.getElementById("myVideo");
      var btn = document.getElementById("myBtn");

      $('.arrow').delay(1000).fadeOut(2000);

      video.play();

      $('.divinevid').delay(60 * 1000).fadeOut(3000);
      $('.hero').delay(60 * 1000).fadeIn(3000, function() {
        $('.landingPage').show();
      });

    })

})

$('#discoJejune').on("click", function() {
  // $('.landingPage').hide(0);
  $('.jejunetitle').addClass('woah spin3D');
  $('.hero2').hide();
  $('.section1').fadeOut(3000);
  $('.jejuneJourney').fadeIn(3000);
  $('.jejuneJourney').css("transform", "scale(3)");
  $('.jejunejourneyCover').delay(3000).fadeOut(400);
  $('.jejunewhat').delay(3500).fadeIn(400, function() {
    $('body').addClass("newbody");
    // $('body').css("background-repeat", "no-repeat");
    // $('body').css("background-size", "cover");
    $(this).css("transform", "scale(1)");
    $(this).delay(4000).css("transform", "rotate(360deg)")
    $('.jejunewhattext').delay(3000).show(500, function() {
      $('.lighthouse').hide();
      $('.rotaterdiv').css("transform", "rotate(360deg)");
      $('.jejunevid').hide();
      $('.rotaterdiv').delay(9000).fadeOut(0, function() {

        $('.lighthouse').show(900, function() {
          $('.lighthouse').css("transform", "scale(1)");
          $('.whoisoct').show();
          $('.nothing').delay(6000).show(0, function() {
            $('.lighthouse').fadeOut(2000);


            $('.jejunevid').fadeIn(1000);
            var myVideo2 = document.getElementById("myVideo2");


            myVideo2.play();


            $('.jejune').delay(120 * 1000).fadeOut(3000);
            $('.section1').delay(120 * 1000).fadeIn(3000, function() {
              $('.landingPage').show();
            });


          })
        })


      });


    });
  });
})
