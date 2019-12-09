;(function ($) {
    
    $(".anchor").find("li").click(function(){
        // console.log($(this).index());
        
        var t = $(".louceng").eq($(this).index()).offset().top;
        $("html").stop().animate({
            scrollTop:t
        })
    })
})(jQuery);

    
