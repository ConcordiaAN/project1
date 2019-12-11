;(function($){
    
    $(function () {
        
        $("#j_cbAll").click(function () {
            
            $(".qf input:checkbox").prop("checked", $(this).prop("checked"));
        });

        
        $(".checkbox").delegate().click(function () {
            console.log(1)
            console.log($(".qf input:checked").length)
            if ($(".qf input:checkbox").length === $(".qf input:checked").length) {
                
                $("#j_cbAll").prop("checked", true);
            } else {
                $("#j_cbAll").prop("checked", false);
            }
        });


    })

})(jQuery);