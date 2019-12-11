;(function ($) {

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
                            html += "<li inadex='"+data.list[i].id+"'>"
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
                            html += "<em class='addCar'>加入购物车</em>"
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