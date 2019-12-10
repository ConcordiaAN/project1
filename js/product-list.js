;(function ($) {

    // 商品列表
//  {
//         var pageSize = 3;// 定义每页显示记录条数
        
//         init();// 初始化函数
        
//         /**
//          * 因为pagination插件初始化需要数据的总条目数作为参数 所以init函数作用就是查询总条目数
//          */
//         function init() {
//             $.ajax({
//                 type : "GET",
//                 url : "http://localhost/project/server/data/tabList.json",
//                 async : false, // 因为需要赋值,不可以异步
//                 success : function(total) {
//                     // 分页按钮属性定义
//                     $("#pagination").pagination(total, {
//                         callback : PageCallback, // 点击分页按钮的回调函数
//                         items_per_page : pageSize, // 每页显示的条目数
//                         prev_text : '上一页', // "前一页"分页按钮上显示的文字
//                         next_text : '下一页', // "后一页"分页按钮上显示的文字
//                         num_display_entries : 4, // 连续分页主体部分显示的分页条目数
//                         num_edge_entries : 1, // 两侧显示的首尾分页的条目数
//                     });
//                 }
//             });
//         }
        
//         // 分页按钮点击事件
//         function PageCallback(page, jq) { // page表示当前页索引值，jq表示装载容器。
//            getPage(page);
//         }
        
//        // 去后台加载数据，并拼接显示出来
//        function getPage(page) { // 参数就是点击的那个分页的页数索引值
//             $.ajax({
//                 type : "GET",
//                 url : "http://localhost/project/server/data/tabList.json" + page + "&pageSize=" + pageSize,
//                 dataType : "json",
//                 success : function(data) {
//                     // 拼接html(这个部分根据自己的需求去实现)
//                     var list = data;
//                     var str = '';
//                     for (var i = 0; i < list.length; i++) {

//                         str += '<li>'+ 
//                                     '<div class="inner">'+
//                                         '<div class="img-wrap">'+
//                                             '<a href="#">'+
//                                                 '<img src="'+ list[i].img +'">'
//                                             +'</a>'
//                                         +'</div>'
//                                         +'<a href="#" class=".pro-name">'+ list[i].title
//                                         +'<div class="pro-price">'+
//                                             '<span class="price-now">'+ list[i].price +'</span>'
//                                             +'<em class="price-old">'+ list[i].discount +'</em>'
//                                         +'</div>'
//                                     +'</div>'    
//                                 +'</li>';

//                     }
//                     $('#htmlDiv').html(str)
//                 }
//             });
//         }
// }




// 商品列表
 
$('.setPageDiv').change(function() {

    getMsg(parseInt($(this).val()))
})

function getMsg(num) {
    $.ajax({
        url: 'http://localhost/project/server/data/product-list.json',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            //1.计算分页数量
            var showNum = num;
            var dataL = data.list.length;
            var pageNum = Math.ceil(dataL / showNum);
            $('.Pagination').pagination(pageNum, {
                num_edge_entries: 1, //边缘页数
                num_display_entries: 4, //主体页数
                items_per_page: 1, //每页显示1项
                prev_text: "上一页",
                next_text: "下一页",
                callback: function(index) {
                    //console.log(index);
                    var html = '<ul>'

                    // console.log(showNum * index + '~' + parseInt(showNum * index) + parseInt(showNum))
                    for(var i = showNum * index; i < showNum * index + showNum; i++) {
                        //console.log(i)
                        if(i < dataL) {

                            var img = data.list[i].img;
                            var title = data.list[i].title;
                            var price = data.list[i].price; 
                            var discount = data.list[i].discount;
                            html += "<li>"
                            html += "<div class='inner'>"
                            html += "<a href='particulars.html'>"
                            html += "<img src='" + img + "'>"
                            html += "</a>"
                            html += "</div>"
                            html += "<a href='#' class='.pro-name'>"
                            html +=  title 
                            html += "<div class='pro-price'>"
                            html += "<span class='price-now'>" + price + "</span>"
                            html += "<em class='price-old'>" + discount + "</em>"
                            html += "</div>"
                            html += "</a>"
                            html += "</div>"
                            html += "</li>"

                        }
                    }
                    html += '</ul>';
                    $('.list').html(html)
                }
            })

        }
    })
}
getMsg(6)




})(jQuery);