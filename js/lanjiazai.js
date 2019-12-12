
var imgs = document.querySelectorAll("img");

//	获取可视区域的高度
var clientH = document.documentElement.clientHeight;
//	获取初始的滚动的距离顶部的距离
var scrollT = document.documentElement.scrollTop;
		
//		提前将获取的所有的需要懒加载的图片的数组转成真数组,方便将来使用数组的方法操作
//		var arr = Array.from(elements);
		var arr = [];
		for(var i=0;i<imgs.length;i++){
			arr.push(imgs[i]);
		}

//		懒加载的功能函数
		function lazyLoad(elements,cH,sT){
			console.log(222222222);
			for(var i=0;i<arr.length;i++){
//				根据可视区域的高度+滚动的top,如果,大于图片的top,说明在可视区域了,要加载
				if(arr[i].offsetTop < cH + sT){
//					将图片的真正的src设置成要加载的图片的地址
					arr[i].src = arr[i].getAttribute("data-src");
//					当前图片设置成功后,不需要参与懒加载的判断了,从数组中删除这个元素
					arr.splice(i,1);
//					在遍历时,删除了数组中的元素,删除元素后面的元素会向前补位,为了能够拿到补位的元素,需要将计数器减一,否则会跳过补位的这个元素
					i--;
				}
			}
		}
//		初始执行
		lazyLoad(imgs,clientH,scrollT);
		
		
		onscroll = function(){
         
			var scrollT = document.documentElement.scrollTop;
//			每次滚动执行
			lazyLoad(imgs,clientH,scrollT);
		}