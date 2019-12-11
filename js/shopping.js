;(function($){
    
    $(function () {
        
        $("#j_cbAll").click(function () {
            
            $(".qf input:checkbox").prop("checked", $(this).prop("checked"));
        });

        
        $(".qf input:checkbox").click(function () {
            
            if ($(".qf input:checkbox").length === $(".qf input:checked").length) {
                
                $("#j_cbAll").prop("checked", true);
            } else {
                $("#j_cbAll").prop("checked", false);
            }
        });


    })

})(jQuery);