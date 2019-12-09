;(function ($) {

    $("#pagination").pagination(30,{
        itmes_per_page:4,  // 每页显示的条数目
        num_display_entries:2,  // 连续分页主体部分显示的条目数
        current_page:0,     // 当前选中的页面
        num_edge_entries:2,    // 两侧显示的条目数 
        link_to:"###",
        prev_text:"上一页",
        next_text:"下一页",
        // prev_show_always: false,
        // next_show_always: false,
        callback: function(index){
            console.log(index)
            $.ajax({
                url:"http://localhost/project/server/data/tabList.json",
                type: "get",
                // data:{
                //     count: 10,
                //     start: 10*index
                // },
                dataType:'json',
                success: function(data){
                    console.log(data)
                    var str = ""
                    data.map(item=>{
                        str += '<li>'+ 
                                '<div class="inner">'+
                                    '<div class="img-wrap">'+
                                        '<a href="#">'+
                                            '<img src="'+ item.img +'">'
                                        +'</a>'
                                    +'</div>'
                                    +'<a href="#" class=".pro-name">'+ item.title
                                    +'<div class="pro-price">'+
                                        '<span class="price-now">'+ item.price +'</span>'
                                        +'<em class="price-old">'+ item.discount +'</em>'
                                    +'</div>'
                                +'</div>'    
                            +'</li>';
                    })
                    $("#list").html(str)
                }
            })
        }
    })

})(jQuery);