$(function(){
    // let currentIndex = 0 ;
    // $(".sliderWrap").append($(".slider").first().clone(true));

    // setInterval(function(){
    //     currentIndex++;
    //     $(".sliderWrap").animate({marginLeft :- 100 * currentIndex +"%"},600);

    //     if(currentIndex ==3){
    //         setTimeout(function(){
    //             $(".sliderWrap").animate({marginLeft :0},0);
    //             currentIndex =0 ;
    //         },700)
    //     }
    // },2000);
    let currentIndex = 0 ;
    setInterval(function(){
        let nextIndex = (currentIndex +1)%3;
        $(".slider").eq(currentIndex).fadeOut(600);
        $(".slider").eq(nextIndex).fadeIn(600);
        currentIndex=nextIndex;

    },2000);

    // $(".navmenu > li").mouseover(function(){
    //     $(this).find(".submenu").stop().slideDown();
    // });
    // $(".navmenu > li").mouseout(function(){
    //     $(this).find(".submenu").stop().slideUp();
    // });

    $(".navmenu > li").mouseover(function(){
        $(".submenu").stop().slideDown(600);
        $("#header").addClass("on")
    })
    $(".navmenu > li").mouseout(function(){
        $(".submenu").stop().slideUp(600);
        $("#header").removeClass("on")
    });

    $(".popupclk").click(function(){
        $(".popup").show();
    })
    $(".popupclose").click(function(){
        $(".popup").hide();
    })

    const tabBtn = $(".tabmenu > a");
    const tabCnt = $(".tabcnt>div")
    tabCnt.hide().eq(0).show();

    tabBtn.click(function(){
        const index =$(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        tabCnt.eq(index).show().siblings().hide();
    });
});


// fadeout fadein 
let currentIndex = 0;
$(".slider").hide().first().show()
setInterval(function(){
    let nextIndex = (currentIndex + 1) %3 ;
    $(".slider").eq(currentIndex).fadeOut(600)
    $(".slider").eq(nextIndex).fadeIn(600)
    currentIndex = nextIndex;
},2000);

// navmenu 
$(".navmenu > li").click(function(){
    $(".submenu").stop().slideDown(400);
});



const tabBtn = $(".tab-btn > div")
const tabCnt = $(".tab-cnt > p")
tabCnt.hide().eq(0).show()

tabBtn.click(function(){
    const index = $(this).index();
    $(this).addClass("active").siblings().removeClass("active");
    tabCnt.eq(index).show().siblings().hide()
})


let currentIndex = 0;
$(".slider").hide().first().show();

setInterval(function(){
    let nextIndex = (currentIndex+1)%3;
    $(".slider").eq(currentIndex).fadeOut();
    $(".slider").eq(nextIndex).fadeIn();
    currentIndex =nextIndex;
},2000);


$(".navmenu > li").mouseover(function(){
    $(".submenu").stop().fadeIn();
    $("#header").addClass("on")
})