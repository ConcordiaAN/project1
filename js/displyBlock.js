;(function ($) {

    
    $("dl.expand").mouseenter(function () {
        $(this).find("dd").stop().show();
    })
    $("li.dblock").mouseleave(function () {
        $(this).find("dd").stop().hide();
    })
    
})(jQuery);