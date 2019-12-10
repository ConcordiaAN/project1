;(function($){


    // 用户名验证
    var temp1=temp2=temp3=temp4=0;
    $('#text').focus(function(){
        $(this).css('border','1px solid dodgerblue');
        $(this).val('');
        $('.tishi1').html('请输入邮箱/手机号/用户名').css({
            color:'#000',
        });
    })

    // 用户名失去焦点
    $('#text').blur(function(){
        $(this).css('border','1px solid #ccc');
        var re1=/^[\w\-\u4e00-\u9fa5]{4,20}$/;
        
        if(re1.test($(this).val())){
            temp1=1;
            $('.tishi1').html('用户名可以使用').css({ color:'orange',})
        }else{
            $('.tishi1').html('输入格式错误，请重新输入').css({
                color:'red',
            });
            temp1=0;
        }
    })
   
    // 密码一获取焦点
    $('#pass').focus(function(){
        $(this).css('border','1px solid dodgerblue');
        $('.tishi2').html('6-20字符，可以输入数字字母下划线').css({
            color:'#000',
        });
    })
    
    var re2=/^.{6,18}$/;
    var shuzi=zimu=fuhao=0;
    var num=/\d/;
    var azAZ=/[a-zA-Z]/;
    var tsfh=/\w/;
    //   失去焦点
    $('#pass').blur(function(){
        $(this).css('border','1px solid #ccc');
        if(re2.test($(this).val())){
            temp2=1;
            //密码强度检测
            if(num.test(this.value)){shuzi = 1;}
            if(azAZ.test(this.value)){zimu = 1;}
            if(tsfh.test(this.value)){fuhao = 1;}
            switch(shuzi+zimu+fuhao){
                case 1:$('.tishi2').html("简单").css({ color:'orange',});break;
                case 2:$('.tishi2').html("一般").css({ color:'orange',});break;
                case 3:$('.tishi2').html("复杂").css({ color:'orange',});break;
            }
        }else{
            $('.tishi2').html('密码长度6到20').css({
                color:'red',
            });
            temp2=0;
        }
    })
// 确认密码2
$('#password').focus(function(){
    $(this).css('border','1px solid dodgerblue');
    $('.tishi3').html('请再次输入密码').css({
        color:'#000',
    });
})

$('#password').blur(function(){
    $(this).css('border','1px solid #ccc');
    if($(this).val() ===$('#pass').val()){
        temp3=1;
        $('.tishi3').html('密码正确').css({
            color:'orange',
        });
    }else{
        $('.tishi3').html('两次密码不一致').css({
            color:'red',
        });
        temp3=0;
    }
})

$('.check').click(function(){
    if($('.check')[0].checked==true){
        temp4=1;
    }
    else{
        temp4=0;
    }
})
$('button').click(function(){
    if(temp1+temp2+temp3+temp4==4){
        class land{
            constructor(){
                this.addEvent()
            }
            addEvent(){
                // console.log(1)
                this.name=$('#text').val();
                this.pass=$('#pass').val();
                // console.log(this.name)
                // console.log(this.pass)
                this.setlocal()
            }
            setlocal(){
                // 浏览器保存的有数据？有的话就获取，没有的话就是一个空数组
                this.data=localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')) : [] ;
                // 如果是空数组的，就直接添加
                if(this.data.length<1){
                    this.data.push({
                        name:this.name,
                        pass:this.pass,
                        onoff:0
                    })
                    window.location.href='./logon.html'
                }else{
                    var on=this.data.some(val => {
                        return val.name === this.name;
                    })
                    if(on){
                        alert('用户名存在')
                    }else{
                        this.data.push({
                            name:this.name,
                            pass:this.pass,
                            onoff:0
                        })
                        window.location.href='./logon.html'
                    }
                }
                localStorage.setItem('user',JSON.stringify(this.data))
                
            }
        }
        new land()
    }else{
        alert("注册失败")
    }
})



})(jQuery);