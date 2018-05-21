


var options = {
  strings: ["Searching the web for answers, you find yourself in a peculiar corner of the internet."],
  typeSpeed: 60,
  startDelay: 2500,
  backDelay: 2000
}

var typed = new Typed(".firstTyped", options);



$('.darkCorner').delay(9000).fadeIn(5000, function() {
  $(this).css("display", "flex");
  $('.cornerButtons').show(2000);
});




$('#lookDeepWithin').on("click", function() {
  $('.secondTyped').show();
  $('.cornerButtons').hide(2000);
  var options2 = {
    strings: ["Upon looking deep within, the world around you begins to change."],
    typeSpeed: 60,
    startDelay: 0,
    backDelay: 2000
  }

  var typed2 = new Typed(".secondTyped", options2);


  $('.cloudTime').delay(4000).fadeIn(5000, function() {
    $('.secondTyped').hide();
    // $('.darkCorner').hide();
    // $('.cloudTime').delay(3000).css("transform", "rotateX(180deg)")
    $('.elsewhere').fadeIn(3000);
    $('.cloudTime').fadeOut(3000, function() {
      $('.dontMoveContent').delay(500).fadeIn(2000);
      $('.thirdTyped').delay(500).fadeIn(2000);

      var options3 = {
        strings: ["You find yourself<br>Elsewhere.", "This world exists on top of our reality.", "You’ve always been aware of it, and that’s what brought you here.", "Hop on in and look for the answers you seek."],
        typeSpeed: 60,
        startDelay: 0,
        backDelay: 2000
      }

      var typed3 = new Typed(".thirdTyped", options3);
      $('.hopOnIn').hide()
      $('.hopOnIn').delay(15000).show();
    });

  });

})


$('.hopOnIn').on("click", function() {
  $('.elsewhere').fadeOut(2000);
  $('.door').fadeIn(2000, function() {

    $('.fourthTyped').show();

    var options4 = {
      strings: ["Close the door behind you."],
      typeSpeed: 60,
      startDelay: 0,
      backDelay: 2000
    }

    var typed4 = new Typed(".fourthTyped", options4);



  });
})

$('.skipIntro').on("click", function() {
  $('.intro').fadeOut(2000);
  $('.notTheIntro').fadeIn(2000);
})


$('.theDoor').on("click", function() {
  $('.intro').fadeOut(2000);
  $('.notTheIntro').fadeIn(2000);
})





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
    $(this).delay(4000).css("transform", "rotate(20deg)")
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
