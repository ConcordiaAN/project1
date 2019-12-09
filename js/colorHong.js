;(function ($) {

    // 鼠标滑过改变字体颜色
    var color = "";
    // console.log($(".colorHong"))
    $(".colorHong").mouseenter(function (){
        // console.log(0)
        color = $(this).css("color");   // 先把之前的颜色保存下来，鼠标离开时还原
        $(this).css("color","red");
    });
    // 鼠标离开时，恢复为原来的颜色
    $(".colorHong").mouseleave(function () {
        $(this).css("color",color);
    })

})(jQuery);