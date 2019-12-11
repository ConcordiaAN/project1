;(function () {

    class List{
        constructor(){
            this.url = "http://localhost/project/server/data/product-list.json";
            this.cont = document.getElementById("cont");
            
            this.load()
            this.addEvent();
        }
        load(){
            var that = this;
            ajaxGet(this.url,function(res){
                that.res = JSON.parse(res)
                that.display();
            })
        }
        display(){
            var str = ""
            for(var i=0;i<this.res.length;i++){
                str += `<div class="box" index="${this.res[i].id}">
                            <img src="${this.res[i].img}" alt="">
                            <p>${this.res[i].title}</p>
                            <span>${this.res[i].price}</span>
                            <em class="addCar">加入购物车</em>
                        </div>`;
            }
            this.cont.innerHTML = str;
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
                }else if(target.nodeName =="IMG" || target.nodeName =="P" || target.nodeName =="SPAN"){
                        location.href="particulars.html"
    
                }
            })
        }
        setCookie(){
            
            this.goods = getCookie("goodsDECookie") ? JSON.parse(getCookie("goodsDECookie")) : [];
            
    //				第一次加入购物车
            if(this.goods.length < 1){
    //					直接加入
                this.goods.push({
                    id:this.id,
                    num:1
                })
            }else{
    
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

    window.List = List;

})(window);