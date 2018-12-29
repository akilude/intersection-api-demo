var img_arr = document.querySelectorAll('img.lazy-load');

const observer = new IntersectionObserver(loadImg);

img_arr.forEach(function (element) {
	observer.observe(element);
})

function loadImg(array) {
	array.forEach(obj=>{
		if(obj.isIntersecting){
			var target = obj.target;
			var src = target.getAttribute("lazy-load-src");
			target.src = src;
			observer.unobserve(target);
		}
	})
}