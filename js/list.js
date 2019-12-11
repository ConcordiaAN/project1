;(function () {		
		class List{
			constructor(){
				this.url = "http://localhost/project/server/data/product-list.json";
				this.cont = document.querySelector(".list");
				
				this.load()
				this.addEvent();
			}
			load(){
				var that = this;
				ajaxGet(this.url,function(res){
					that.res = JSON.parse(res)
                    that.display();
                    console.log(that.res)
				})
			}
			display(){
				var html = '<ul>'
				for(var i=0;i<this.res.length;i++){
					html += "<li inadex='"+this.res[i].id+"'>"
                    html += "<div class='inner'>"
                    html += "<a href='particulars.html'>"
                    html += "<img src='" + this.res[i].img + "'>"
                    html += "</a>"
                    html += "</div>"
                    html += "<a href='#' class='.pro-name'>"
                    html +=  this.res[i].title 
                    html += "<div class='pro-price'>"
                    html += "<span class='price-now'>" + this.res[i].price + "</span>"
                    html += "<em class='price-old'>" + this.res[i].discount + "</em>"
                    html += "</div>"
                    html += "</a>"
                    html += "<em class='addCar'>加入购物车</em>"
                    html += "</div>"
                    html += "</li>"
				}
				this.cont.innerHTML = html;
			}
			addEvent(){
				var that = this;
				this.cont.addEventListener("click",function(eve){
					var e = eve || window.event;
					var target = e.target || e.srcElement;
					if(target.className == "addCar"){
						that.id = target.parentNode.getAttribute("index");
//						console.log(that.id)
						that.setCookie();
					}
				})
			}
			setCookie(){
//				存cookie
//				存什么?存json：在购物车中可以存保存数量，只使用一条cookie
//				[{id:,num:},{id:,num:},......]
				
				
				this.goods = getCookie("goodsDECookie") ? JSON.parse(getCookie("goodsDECookie")) : [];
				
//				第一次加入购物车
				if(this.goods.length < 1){
//					直接加入
					this.goods.push({
						id:this.id,
						num:1
					})
				}else{
//				不是第一次
//					var onoff = true;
//					先判断这次点击的是新商品还是老商品
//					for(var i=0;i<this.goods.length;i++){
////						老商品,增加数量
//						if(this.goods[i].id === this.id){
//							this.goods[i].num++;
//							onoff = false;
//						}
//					}

					var i = 0;
					var onoff = this.goods.some((val,idx)=>{
						i = idx;
						return val.id === this.id;
					})
//					新商品,增加
					if(!onoff){
						this.goods.push({
							id:this.id,
							num:1
						})
					}else{
						this.goods[i].num++;
					}
				}
				setCookie("goodsDECookie",JSON.stringify(this.goods))
			}
		}
		
		new List;


})();