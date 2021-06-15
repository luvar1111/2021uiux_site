//headerTop
const menuPos = $(".fixed-area").offset().top;

$(window).scroll(function(){
  let scrollY = $(window).scrollTop();
  if(menuPos < scrollY){
    $(".fixed-area").addClass("fixed")
  }else{
    $(".fixed-area").removeClass("fixed")
  }
});

$(".language li").click(function(){
  $(".language li").removeClass("active");
  $(this).addClass("active")
});

//bxslider
let myslider = $(".slider").bxSlider({
    controls:false,
    auto:true,
    mode:'fade',
    pagerCustom:'.pager',
    speed:1000,
    pause:6000
});
$(".left").click(function(){
    myslider.goToPrevSlide();
});
$(".right").click(function(){
    myslider.goToNextSlide();
});

//contents1
//$(".cont1 a").hover(function(){
//  $(".cont1-img img").stop().animate({left:-376}, 300);
//  $(".cont1-img .cont1-txt").stop().delay(300).animate({opacity:1}, 300);
//  }, function(){
//    $(".cont1-img .cont1-txt").stop().animate({opacity:0}, 300);
//    $(".cont1-img img").stop().delay(300).animate({left:996}, 400, function(){
//        $(".cont1 a img").css("left","-1200px");
//    });
//});

$(".cont1 a").hover(function(){
  $(".cont1-img img").stop().clearQueue().animate({left:-376}, 300, function(){
    $(".cont1-img .cont1-txt").stop().animate({opacity:1}, 300);
  });
  }, function(){
    $(".cont1-img .cont1-txt").stop().animate({opacity:0}, 300, function(){
      $(".cont1-img img").stop().animate({left:996}, 400, function(){
          $(".cont1-img img").css("left","-1200px");
      });
    });
});
