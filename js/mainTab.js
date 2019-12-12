;(function ($) {

    //  首页 - 国家馆  ---   选项卡

    // 录入需要给选项卡添加的内容 以对象数组表示:
    var sqjx =
        [
            {
                "riben": ["http://image.kjt.com/g1/M00/00/28/CgoJzVqmK3yAT6chAABi6cRAlqc845_P240.jpg","Innisfree悦诗风吟绿茶精萃平衡柔肤露 160ml/瓶","￥29.00 ","￥58.00","0"]
            },
            {
                "hanguo": ["http://image.kjt.com/g1/M00/00/24/CgoJzVql3FKAeIWTAAB3kjey6qk874_P240.jpg",
                "Sulwhasoo/雪花秀 玉璨净柔面膜 150ml 玉容撕拉面膜",
                "￥29.00 ",
                "￥58.00",
                "8"]
            },
            {
                "beimei": ["http://image.kjt.com/g1/M00/02/E1/CgoJ5V0IcjaAYlTzAAH7wEERedw401_P240.jpg",
                "Deep-formula Restructuring深层滋润亮肤霜 130ml/瓶",
                "￥29.00 ",
                "￥58.00",
                "9"]
            },
            {
                "ouzhou": ["http://image.kjt.com/g1/M00/00/12/CgoJ5VqmEuuAOpRaAAFcCZqfXwA996_P240.jpg",
                "AHC保湿补水B5玻尿酸洗面奶 180ml/瓶",
                "￥29.00 ",
                "￥58.00",
                "6"]
            },
            {
                "aozhou": ["http://image.kjt.com/g1/M00/00/17/CgoJ5VqnNiCAf70AAABi70RC814022_P240.jpg",
                "UNNY/悠宜 悠宜卸妆水 500ml/瓶",
                "￥29.00 ",
                "￥58.00",
                "5"]
            }
        ]

    var sqjx_methods = {
        cut: function () {
            var cutTit = document.getElementById('tit').getElementsByTagName('span'); //得到要切换的选项卡
            var cont = document.getElementById('cont');//得到选项卡切换时，对应的内容

            // 循环数组sqjx动态给cont添加数组第一条内容， 给cont(所有选项卡对应的内容)  设置默认值
            for (var x in sqjx[0]) {
                sqjx[0][x].forEach(function (index, t) {
                    cont.innerHTML += '<li>'+
                                            '<div class="inner">'+
                                                '<a href="particulars.html">'+ 
                                                    '<img data-src="'+sqjx[0][x][0]+'">'+
                                                '</a>'+
                                            '</div>'+
                                            '<a href="###" class="pro-name">'+sqjx[0][x][1] + '</a>'+
                                            '<span>'+sqjx[0][x][2] +'</span>'+
                                            '<span>'+sqjx[0][x][3] +'</span>'+
                                        '</li>';

                                        
                });
            }
            // 循环点击选项卡
            for (var i = 0; i < cutTit.length; i++) {
                new function (i) {   //利用new function将循环的i值保存到内存中
                    cutTit[i].onclick = function () {
                          
                        for (var j = 0; j < cutTit.length; j++) {
                            cutTit[j].className = "";  //去除选项卡的class名
                        }
                        this.className = 'on'; //给当前点击的选项卡，添加class名on
                        cont.innerHTML = '';//点击时首先清空 ——>循环数组sqjx，动态给cont添加数组第一条内容 ——>由于使用的是innerHTML给选项卡对应的内容依次累计追加字段，如果不清除，点击第一个选项卡后面的所有选项卡，都会有第一个选项卡所对应的内容，所以要清空，每次点击选项卡重新赋值；   
                        switch (i) {//判断点击选项卡的索引
                            case i: { //如果点击的是第一个，那么下面代码，将展示数组中的第一条,后续点击选项卡依次对应其点击的内容
                                for (var x in sqjx[i]) {//循环数组sqjx的每一项
                                    sqjx[i][x].forEach(function (index, t) {//sqjx[i][x]表示循环数组每一项的键对应的值（数组）
                                        cont.innerHTML += '<li>'+
                                        '<div class="inner">'+
                                            '<a href="particulars.html">'+ 
                                                '<img data-src="'+sqjx[i][x][0]+'">'+
                                            '</a>'+
                                        '</div>'+
                                        '<a href="###" class="pro-name">'+sqjx[i][x][1] + '</a>'+
                                        '<span>'+sqjx[i][x][2] +'</span>'+
                                        '<span>'+sqjx[i][x][3] +'</span>'+
                                        '</li>';//动态给选项卡对应的内容添加字段
                                    });
                                }
                            };
                            break;
                        }
                            
                        

                        // 调用懒加载的方法
                        lazyLoad(imgs,clientH,scrollT);
                        }
                    }(i);
                }
            }
        }
        sqjx_methods.cut();//调用切换方法

    
    

})(jQuery);


