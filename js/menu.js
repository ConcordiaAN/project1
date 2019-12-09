;(function ($) {

    $(".navTag").children("dl.navTagList").mouseenter(function () {
        // console.log(this);
        $(this)
        .css("background","#fff")
        .find("a")
        .css("color","red");
        $(this)
        .next(".navCon")
        .stop()
        .show(500)
        .parent()
        .siblings()
        .children("div")
        .stop()
        .hide(500);
    })
    $(".navTag").mouseleave(function(){
        $(this)
        .children("dl.navTagList")
        .css("background","rgba(67, 69, 77, 0.9)")
        .find("a")
        .css("color","#fff");
        $(this)
        .find(".navCon")
        .stop()
        .hide(500);
    })


})(jQuery);