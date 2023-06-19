$(function(){

    // slider
    let currentIndex = 0;
    $(".sliderWrap").append($(".slider").first().clone(true));
    setInterval(function(){
        currentIndex++;
        $(".sliderWrap").animate({marginLeft :- currentIndex * 800 + "px"},600);
        if(currentIndex ==3 ){
            setTimeout(function(){
                $(".sliderWrap").animate({marginLeft : 0},0);
                currentIndex = 0;
            },700)
        }
    },2000);

    // navmenu
    $(".navmenu > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(400);
    })
    $(".navmenu > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(400);
    })

    // popup
    $(".popupclk").click(function(){
        $(".popup").show();
    });
    $(".popupclose").click(function(){
        $(".popup").hide();
    });
});