$(function(){
//  alert("연결되니???");
// 탭메뉴
let i;

$(".tabmenu li").click(function(){
    $(".tabmenu li").removeClass("on")
    $(this).addClass("on");

    i=$(this).index();
    $(".tabcon").hide();
    $(".tabcon").eq(i).show();
    return false;
})

// 팝업
$(".popclk").click(function(){
    $(".popup").show();
    return false;
})
$(".popup>button").click(function(){
    $(".popup").hide();
})


// 슬라이드
let z=0;

function slide(){
    if(z < 2){
        z++;
    }else{
        z = 0;
    }

   
    
    
        $(".slide ul").animate({top:z*300*(-1)},1000)
    
}
setInterval(slide,1000)


// 메뉴
$("nav>ul>li").mouseenter(function(){
    $(".submenu").stop().slideDown();
})
$("nav>ul>li").mouseleave(function(){
    $(".submenu").stop().slideUp();
})
});