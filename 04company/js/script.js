//header
const menuPos = $(".fixed-area").position().top;

$(window).scroll(function(){
  if (menuPos < $(window).scrollTop()){
    $(".fixed-area").addClass("fixed")
  } else {
    $(".fixed-area").removeClass("fixed")
  }
})

$(".toggleBtn").click(function() {
  const toggle = $(".toggleBtn").attr("class");
  if (toggle == "toggleBtn") {
    $(".toggleBtn").addClass("change");
    $(".menuWrap").stop().animate({
      right: 0
    })
  } else {
    $(".toggleBtn").removeClass("change");
    $(".menuWrap").stop().animate({
      right: "-100%"
    })
  }
});
$(window).resize(function() {
  $(".menuWrap").removeAttr("style");
  $(".toggleBtn").removeClass("change");
});

$(".language li").click(function() {
  $(".language li").removeClass("active");
  $(this).addClass("active")
});

//slider
$(".slider").bxSlider({
  controls: false,
  auto: true,
  mode: 'fade',
  pagerCustom: '.pager',
  speed: 1000,
  pause: 6000
});

// container
// $(window).resize(function(){
//   if($(this).width() <= 640){
//     let cw = $("section > div").width()
//     $("section > div").height(cw / 2)
//   }else{
//     $("section > div").height(310)
//   }
// })

//contents1
// cont1
$(".cont1 a").hover(function() {
  $(".cont1-img").css("left", "-1200px").clearQueue().stop().animate({
    left: -376
  }, 300);
  $(".cont1-txt").clearQueue().stop().delay(300).animate({
    opacity: 1
  }, 300);
}, function() {
  $(".cont1-img").css("left", "-376px").clearQueue().stop().delay(300).animate({
    left: 996
  }, 500);
  $(".cont1-txt").clearQueue().stop().animate({
    opacity: 0
  }, 300);
});

// cont2
let current1 = 0;
let current2 = 0;
const banner1 = $(".slider1 li");
const banner2 = $(".slider2 li");
let viewTop = 0;
const banCount1 = banner1.length;
const banCount2 = banner2.length;
let i = 0; // next image
let overBtn = false;

$(".sliderWrap1 .next").click(function() {
  if (overBtn == false) {
    overBtn = true;
    i = current1 + 1;
    i = current2 + 1;

    if (i == banCount1) {
      i = 0;
    }

    banner1.eq(current1).css({
      opacity: 1
    })
    banner1.eq(i).css({
      opacity: 0,
      "z-index": viewTop++
    }).animate({
      opacity: 1
    }, 500);

    current1 = i;

    if (i == banCount2) {
      i = 0;
    }

    banner2.eq(current2).css({
      left: 0
    }).stop().animate({
      left: "-100%"
    }, 500)
    banner2.eq(i)
      .css({
        left: "100%"
      })
      .stop()
      .animate({
        left: 0
      }, {
        duration: 500,
        complete: function() {
          overBtn = false
        }
      });

    current2 = i;
  }
}); // next btn

$(".sliderWrap1 .prev").click(function() {
  if (overBtn == false) {
    overBtn = true;
    i = current1 - 1;
    i = current2 - 1;

    if (i == -1) {
      i = banCount1 - 1;
    }

    banner1.eq(current1).css({
      opacity: 1
    })
    banner1.eq(i).css({
      opacity: 0,
      "z-index": viewTop++
    }).animate({
      opacity: 1
    }, 500);

    current1 = i;

    if (i == -1) {
      i = banCount2 - 1;
    }

    banner2.eq(current2).css({
      left: 0
    }).stop().animate({
      left: "100%"
    }, 500)
    banner2.eq(i)
      .css({
        left: "-100%"
      })
      .stop()
      .animate({
        left: 0
      }, {
        duration: 500,
        complete: function() {
          overBtn = false
        }
      });

    current2 = i;
  }
}); // prev btn

function slide() {
  $(".sliderWrap1 .next").trigger("click")
}

setInterval(slide, 6000)

$(".slider3").bxSlider({
  auto:true,
  pager:false,
  controls:false,
  speed: 500,
  pause: 6000,
  autoHover:true
})

// cont3
$(".cont3 a").hover(function() {
  $(this).children(".fill").css("left", "-100%").stop().animate({
    left: 0
  }, 300);
}, function() {
  $(this).children(".fill").css("left", 0).stop().animate({
    left: "100%"
  }, 300);
});

$(".owl-carousel").owlCarousel({
  autoplayHoverPause:true,
  responsiveRefreshRate:0,
  responsive:{
    0:{
      items:2,
      autoplay:true,
      loop:true,
      autoplaySpeed:500,
      autoplayTimeout:6000
    },
    641:{
      items:3
    }
  }
})

// cont4
$(".slider4").bxSlider({
  auto:true,
  pager:false,
  controls:false,
  speed: 500,
  pause: 6000,
  autoHover:true
})

$(".youtube").colorbox({
  iframe:true,
  innerWidth:864,
  innerHeight:486
})

// contents2
