;(function ($) {

    $.ajax({
        url: 'https://www.daxunxun.com/douban',
        type: 'get',
        success: function (data) {
          console.log(data)
          var html = '<ul>'
          data.map(item => {
            html += "<li>"
            html += "<div class='inner'>"
            html += "<a href='particulars.html'>"
            html += "<img src='" + item.img + "'>"
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
          })
          $('.main-l').html(html)
        }
      })
    
    

})(jQuery);