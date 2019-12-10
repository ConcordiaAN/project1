;(function($){
    class signin{
        constructor(){
            this.addEvent();
            
        }
        addEvent(){
            var that=this;
            $('button').on('click',function(){
                that.judge()
            })
            $("#text").focus(function(){
                $(this).css('border','1px solid dodgerblue');
            })
            $('#text').blur(function(){
                $(this).css('border','1px solid #ccc');
            })
            $("#pass").focus(function(){
                $(this).css('border','1px solid dodgerblue');
            })
            $('#pass').blur(function(){
                $(this).css('border','1px solid #ccc');
            })
        }
        judge(){
            var type=1;
            this.data=localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')) : [] ;
            if(this.data.length<1){
                alert('用户名不存在请注册')
                // window.location.href='./register.html';
            }else{
                var i=0;
                var on=this.data.some((val,index) => {
                    i=index;
                    return val.name ==$("#text").val() && val.pass ==$("#pass").val();
                })
                if(on){
                    alert("登录成功");
                    this.data[i].onoff=1;
                     window.location.href='./index.html';
                }else{
                    alert('用户名不存在')
                    // window.location.href='./register.html';
                }
            }
            localStorage.setItem('user',JSON.stringify(this.data))
            
        }
    }
    
    new signin;

   

})(jQuery);