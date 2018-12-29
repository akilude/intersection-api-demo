var img_arr = document.querySelectorAll('img.lazy-load');

const observer = new IntersectionObserver(loadImg);

img_arr.forEach(function (element) {
	observer.observe(element);
})

function loadImg(array) {
	// for each object in the intersection array
	array.forEach(obj=>{
		// if the object is visible
		if(obj.isIntersecting){
			// the target element
			var target = obj.target;
			// the src url of the image
			var src = target.getAttribute("lazy-load-src");
			// update the src of the image (loads the image)
			target.src = src;
			// unobserve the image since it is now loaded
			observer.unobserve(target);
		}
	})
}