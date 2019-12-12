;(function($){
    
    $(function () {
        
        $("#j_cbAll").click(function () {
            
            $(".qx input:checkbox").prop("checked", $(this).prop("checked"));
        });

        $(".qx").delegate(".checkbox","click",function(){
            
            if ($(".qx input:checkbox").length === $(".qx input:checked").length) {
                
                $("#j_cbAll").prop("checked", true);
            } else {
                $("#j_cbAll").prop("checked", false);
            }
        })
        


    })

})(jQuery);