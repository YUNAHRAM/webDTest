$(function(){
    // slider
    let currentIndex = 0;
    $(".sliderWrap").append($(".slider").first().clone(true));

    setInterval(function(){
        currentIndex++;
        $(".sliderWrap").animate({marginTop: -currentIndex * 400 + "px"},600);
    
        if(currentIndex==3){
            setTimeout(function(){
                $(".sliderWrap").animate({marginTop: 0},0);
                    currentIndex=0;
            },700);
        }
        
    },2000);

    // navmenu
    $(".navmenu>li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    });
    $(".navmenu>li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    });
    // popup
    $(".popupclk").click(function(){
        $(".popup").show();
    });
    $(".popupclose").click(function(){
        $(".popup").hide();
    });

});