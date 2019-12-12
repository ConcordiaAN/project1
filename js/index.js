;(function($){

    // 轮播图
    $('.banner').fade({
        imgs: $('.banner').find('.items').find('img'), // 必选
        prev: $('.banner').find('.prev'), // 必选，上一页按钮
        next: $('.banner').find('.next'), // 必选, 下一页按钮
        points: $('.banner').find('.points'), // 可选，小圆点
        autoplay: true,  // 可选, 默认为true
        delay: 3000, // 可选，默认为3000
        current: 0, // 可选， 默认是第0张图片显示
        duration: 500 // 可选， 默认为300 -- 动画时长
    })
    
    // // 公共头部、底部
    // $(".public_h").load("http://localhost/project/server/html/public.html .public_header")
    // $(".public_f").load("http://localhost/project/server/html/public.html .public_footer")
    

    $("dl.expand").mouseenter(function () {
        $(this).find("dd").stop().show();
    })
    $("li.dblock").mouseleave(function () {
        $(this).find("dd").stop().hide();
    })
    
    // 鼠标滑过改变字体颜色
    var color = "";
    // console.log($(".colorHong"))
    $(".red").mouseenter(function (){
        // console.log(0)
        color = $(this).css("color");   // 先把之前的颜色保存下来，鼠标离开时还原
        $(this).css("color","#e13358");
    });
    // 鼠标离开时，恢复为原来的颜色
    $(".red").mouseleave(function () {
        $(this).css("color",color);
    })

    

})(jQuery);