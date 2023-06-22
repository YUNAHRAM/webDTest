$(function(){

    // right->left slide
     let currentIndex=0;
    $(".sliderWrap").append($(".slider").first().clone(true));

    setInterval(function(){
        currentIndex++;
        $(".sliderWrap").animate({marginLeft: - currentIndex * 100 +"%"},600);

        if(currentIndex==3){
            setTimeout(function(){
                $(".sliderWrap").animate({marginLeft: 0},0);
                currentIndex = 0;
            },700)
        }
    },2000);

    // fadein -> fadeout
    // let currentIndex = 0;
    // setInterval(()=>{
    //     let nextIndex = (currentIndex + 1)%3 ;

    //     $(".slider").eq(currentIndex).fadeOut(400);
    //     $(".slider").eq(nextIndex).fadeIn(400);
    //     currentIndex = nextIndex;
    // },2000);
   

    // down -> up 
    // let currentIndex = 0;
    // $(".sliderWrap").append($(".slider").first().clone(true));
    // setInterval(function(){
    //     currentIndex++;
    //     $(".sliderWrap").animate({marginTop: - currentIndex * 400 +"px"},600);

    //     if(currentIndex ==3){
    //         setTimeout(function(){
    //             $(".sliderWrap").animate({marginTop: 0},0);
    //             currentIndex = 0;
    //         },700);
    //     }
    // },2000);

    // nav menu 제목마다 자식 내려오기
    $(".navmenu > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
    });
    $(".navmenu > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
    });
    // nav menu 제목과 상관없이 모든자식 내려오기
    // $(".navmenu > li").mouseover(function(){
    //     $(".submenu").stop().slideDown();
    // })
    // $(".navmenu > li").mouseout(function(){
    //     $(".submenu").stop().slideUp();
    // })

    // nav menu -> header 채로 내려오기
    // header CSS 에서 
    // header::after {height: 0;}
    // header .on::after {height:150px}
    // $(".navmenu > li").mouseover(function(){
    //     $(".submenu").stop().slideDown();
    //     $("#header").addClass("on")
    // });
    // $(".navmenu > li").mouseout(function(){
    //     $(".submenu").stop().slideUp();
    //     $("#header").removeClass("on")
    // });

    //popup
    $(".popupclk").click(function(){
        $(".popupcnt").show();
    });
    $(".popupclose").click(function(){
        $(".popupcnt").hide();
    });


    // tab button
    let tabBtn = $(".tabbtn >ul >li");
    let tabCnt = $(".tabcnt > div");
    tabCnt.hide().eq(0).show();
    tabBtn.click(function(){
        const index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        tabCnt.eq(index).show().siblings().hide();
    })
});