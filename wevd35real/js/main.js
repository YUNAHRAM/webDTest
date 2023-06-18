$(function(){
    //image slider
    let currentIndex = 0 ;

    $(".sliderWrap").append($(".slider").first().clone(true));
    setInterval(function(){
        currentIndex++;
        $(".sliderWrap").animate({marginLeft: - currentIndex * 1200+ "px"},600);

        if(currentIndex ==3 ){
            setTimeout(function(){
                $(".sliderWrap").animate({marginLeft:0},0);
                currentIndex = 0;
            },700)
            
        }
    },2000);

    // menu
    $(".navmenu > li").mouseover(function(){
        $(".submenu").stop().fadeIn(200);
        $("#header .container").addClass("on")
    });
    $(".navmenu > li").mouseout(function(){
        $(".submenu").stop().fadeOut(200);
        $("#header .container").removeClass("on")
    });
    // popup
    $(".popupclk").click(function(){
        $(".popupcnt").show();
    });
    $(".popexc").click(function(){
        $(".popupcnt").hide();
    });
});