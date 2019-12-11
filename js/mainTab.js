;(function ($) {

    //  首页 - 国家馆  ---   选项卡

    // 选项卡
    //需求:鼠标点击那个li，让该li添加active类，下面的对应的.item的div添加selected
    $(".tab-hd").find("li").click(function () {
        //不用判断，当前的li添加active类，其他的删除active类
        // console.log(this)
        $(this).addClass("active").siblings("li").removeClass("active");
        //对应索引值的div添加selected类，其他的删除selected类
        //【重要】根据tab的索引值获取下方图片div的索引值
        $(".tab-bd>.item").eq($(this).index()).addClass("selected").siblings(".item").removeClass("selected");
        // console.log($(".selected"))
   
    });

    $.ajax({	
        //请求方式
        type:'get',
        
        //发送请求的地址
        url:'http://localhost/project/server/data/tabList.json',
        
        //服务器返回的数据类型
        dataType:'json',
        
        //请求成功的处理
        success:function(data){
            console.log(data);
            //获取需要的数据
            var group = data;
            // console.log(data.each(0))
            
            //拼接字符串
            var str = '';
            //对数据做遍历，拼接到页面显示
            for(var i=0;i<group.length-5;i++){
                
                    str += '<li>'+ 
                                '<div class="inner">'+
                                    '<div class="img-wrap">'+
                                        '<a href="particulars.html">'+
                                            '<img src="'+ group[i].img +'">'
                                        +'</a>'
                                    +'</div>'
                                    +'<a href="#" class=".pro-name">'+ group[i].title +'</a>'
                                    +'<div class="pro-price">'+
                                        '<span class="price-now">'+ group[i].price +'</span>'
                                        +'<em class="price-old">'+ group[i].discount +'</em>'
                                    +'</div>'
                                +'</div>'    
                            +'</li>';
                            $('.selected').find(".pro-list-p").html(str);
                }
                //放入页面的容器显示
                $('.selected').find(".pro-list-p").html(str);
                       
        },
        //请求失败的处理
        error:function(jqXHR){
            console.log(jqXHR);
        }
    });
    
    

})(jQuery);


