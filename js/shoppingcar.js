;(function (){
    class Car{
        constructor(){
            this.url = "http://localhost/project/server/data/product-list.json";
            this.tbody = document.querySelector("tbody");
            
            this.addEvent();
            this.load()
        }
        load(){
            ajaxGet(this.url,(res)=>{
                this.res = JSON.parse(res);
                
                this.getCookie()
            })
        }
        getCookie(){
            this.goods = getCookie("goodsDECookie") ? JSON.parse(getCookie("goodsDECookie")) : [];
            
            this.display();
        }
        display(){
            var str = "";
            for(var i=0;i<this.res.length;i++){
                
                for(var j=0;j<this.goods.length;j++){
                    // console.log(j)
                    if(this.res[i].id === this.goods[j].id){
                        str += `<tr index="${this.res[i].id}">
                                    <td><input type="checkbox" class="checkbox" /></td>、
                                    <td><img src="${this.res[i].img}"/></td>
                                    <td>${this.res[i].title}</td>
                                    <td class="jg">${this.res[i].price}</td>
                                    <td><input type="number" min=1 value="${this.goods[j].num}" /></td>
                                    <td class="xiaoji">${parseInt(this.res[i].price.slice(1,10000)) * this.goods[j].num}</td>
                                    <td class="delete">删除</td>
                                </tr>`; 
                    }
                    
                }
                
            }
            this.tbody.innerHTML = str;
            
        }
        addEvent(){
            var that = this;
            // 删除
            this.tbody.addEventListener("click",function(eve){
                var e = eve || window.event;
                var target = e.target || e.srcElement;
                if(target.className == "delete"){
                    that.id = target.parentNode.getAttribute("index");
                    target.parentNode.remove();
                    that.changeCookie(function(i){
                        that.goods.splice(i,1);
                    });
                }
            })
            // 数量
            this.tbody.addEventListener("input",function(eve){
                var e = eve || window.event;
                var target = e.target || e.srcElement;
                if(target.tagName == "INPUT"){
                    that.id = target.parentNode.parentNode.getAttribute("index");
                    that.changeCookie(function(i){
                        that.goods[i].num = target.value;
                    })
                    console.log(eve.target.parentNode.parentNode.querySelector(".xiaoji").innerHTML)
                    
                    eve.target.parentNode.parentNode.querySelector(".xiaoji").innerHTML = parseInt (eve.target.parentNode.parentNode.querySelector(".jg").innerHTML.slice(1,10000))* parseInt(eve.target.value);
                }
            })
            
        }
        changeCookie(cb){
            for(var i=0;i<this.goods.length;i++){
                if(this.id == this.goods[i].id){
                    cb(i);
                    break;
                }
            }
            setCookie("goodsDECookie",JSON.stringify(this.goods))
        }
    }
    
    new Car;
    window.car = Car;
    

})(window);