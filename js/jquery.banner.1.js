;(function ($) {
    'use strict';

    $.fn.banner = function(options){
        // 1.默认参数的处理
        this._obj_ = {
            points:options.points === false ? false : true, // 下框按钮
            autoplay:options.autoplay === false ? false : true, // 自动播放
            delay:options.delay || 3000,    // 延时
            duration:options.duration || 300,   // 时长
            current:options.current || 0,   // 默认图片
            iPrev:options.imgs.length - 1   // 假设上一张是最后一个索引
        };
        var that = this;
        // 2.初始化布局
        this._obj_.init = function(){
            // 溢出隐藏
            that.css({
                overflow:"hidden"
            });
            // 每张图片的定位位置
            options.imgs.css({
                position:"absolute",
                left:options.imgs.eq(0).width(),
                top:0
            }).eq(this.current).css({
                left:0
            })
        }
        this._obj_.init();
        // 左右按钮
        function btnLeft(){
            // 计算索引
            if(that._obj_.current == 0){
                that._obj_.current = options.imgs.length - 1;
                that._obj_.iPrev = 0;
            }else{
                that._obj_.current--;
                that._obj_.iPrev = that._obj_.current + 1;
            }
            that._obj_.btnMove(1);
        }
        function btnRight(){
            // 计算索引
            if(that._obj_.current == options.imgs.length - 1){
                that._obj_.current = 0;
                that._obj_.iPrev = options.imgs.length - 1
            }else{
                that._obj_.current++;
                that._obj_.iPrev = that._obj_.current - 1;
            }
            that._obj_.btnMove(-1);
        }
        // 移动动画功能的定义
        this._obj_.btnMove = function(type){
            options.imgs.eq(that._obj_.iPrev).css({
                left:0
            }).stop().animate({
				left:options.imgs.eq(0).width() * type
			},that._obj_.duration).fadeIn().end().eq(that._obj_.current).css({
				left:-options.imgs.eq(0).width() * type
			}).stop().animate({
				left:0
            },that._obj_.duration);
            // 当下框按钮没有时，在左右按钮中，不应该操作下框按钮
            if(!that._obj_.points) return;
			that.find(".points").children().css({
				background:"#fff"
			}).eq(that._obj_.current).css({
				background:"#e94a3e"
			})
        }
        // 判断是否传入左右按钮，有就做功能，没有则跳过
        if(options.left != undefined && options.left.length > 0 && options.right != undefined && options.right.length > 0 ){
            //	绑定事件
            options.left.click(btnLeft)
            //	绑定事件
            options.right.click(btnRight);
        }
        //	4.points为true，有底部按钮功能
		if(this._obj_.points){
            //	创建小按钮
            var str = "";
            for(var i=0;i<options.imgs.length;i++){
                str += `<li>${i+1}</li>`;
            }
            //	创建小按钮的框,并设置框和小按钮的样式
            $("<ul class='points'>").html(str).appendTo(this).css({
                width:1200,
                height:44,
                display:"flex",
                borderLeft:"solid 1px #d8d8d8",
                borderBottom:"solid 1px #d8d8d8",
                position:"absolute",
                left:0,
                right:0,
                bottom:0,
                margin:"0 auto",
                padding:0,
                listStyle:"none"
            }).children().css({
                flex:1,
                borderRight:"solid 1px #d8d8d8",
                background:"#fff",
                lineHeight:"44px",
                textAlign:"center",
                cursor:"pointer"
            }).eq(this._obj_.current).css({
                background:"#e94a3e"
            });
            //			4-3.给小按钮添加事件
			this.find(".points").children("li").click(function(){
                //	判断点击的索引和当前索引的大小,决定移动的方向
                if($(this).index() > that._obj_.current){
                    //	开始移动
                    that._obj_.pointsMove($(this).index(),1)
                }   
                if($(this).index() < that._obj_.current){
                    //	开始移动
                    that._obj_.pointsMove($(this).index(),-1)
                }
                //	设置小按钮的当前项
                $(this).css({
                    background:"#e94a3e"
                }).siblings().css({
                    background:"#fff"
                })
                //	点击功能完成之后,点击的索引要设置给当前索引
                that._obj_.current = $(this).index();
            })                
            //	移动的功能
            this._obj_.pointsMove = function(i,type){
                options.imgs.eq(that._obj_.current).css({
                    left:0
                }).stop().animate({
                    left:-options.imgs.eq(0).width() * type
                },that._obj_.duration).end().eq(i).css({
                    left:options.imgs.eq(0).width() * type
                }).stop().animate({
                    left:0
                },that._obj_.duration)
            }
        }   		
        //	5.autoPlay为true，有自动轮播
		if(this._obj_.autoplay){
			this._obj_.t = setInterval(()=>{
            //	手动执行右按钮的事件处理函数,但是前提得先把右按钮的事件处理函数和相关功能单独封装出来
				btnRight()	
			},this._obj_.delay);
			this.hover(function(){
				clearInterval(that._obj_.t);
			},function(){
				that._obj_.t = setInterval(()=>{		
					btnRight();	
				},that._obj_.delay)
			})
        }
        
		
    }

})(jQuery);