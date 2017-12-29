/*(function($){
  
$.fn.tinyCarousel = function (options) {
	
	function getInnerWidth(el){
		if(el.children){
			var width=0;
			for ( var i=0;i<el.children.length;i++){
				width +=el.children[i].$
			}
		}
	}
	
      var _el = $(this);
     // console.log(_el.html());
		var innerCarouselLeft;
		live('click','.tc-prev', function(event) { 
			innerCarouselLeft = _el.find('.tiny-carousel-inner').offset().left;
			console.log(innerCarouselLeft);
			_el.find('.tiny-carousel-inner').css({"left":(innerCarouselLeft+300)+"px"}) ;
		});
      /*$(_el).on('click','.tc-prev',function(){
		
			})  
			$(_el).on('click','.tc-next',function(){
				innerCarouselLeft = _el.find('.tiny-carousel-inner').offset().left;
        console.log(innerCarouselLeft);
        _el.find('.tiny-carousel-inner').css({left:(innerCarouselLeft-300)+"px"}) ;
      })* /  
	});
};

}(jQuery));

function live (eventType, elementQuerySelector, cb) {
	document.addEventListener(eventType, function (event) {

			var qs = document.querySelectorAll(elementQuerySelector);

			if (qs) {
					var el = event.target, index = -1;
					while (el && ((index = Array.prototype.indexOf.call(qs, el)) === -1)) {
							el = el.parentElement;
					}

					if (index > -1) {
							cb.call(el, event);
					}
			}
	});
}
*/
 
var TinyCarousel = (function(){
	function TinyCarousel(el){
		var rootThis = this;
		if(typeof el==="object"){
				this.el = el;
		}
		else{
			this.el = document.querySelector(el);
		}
		
		if(this.el === null){
			return ;
		}
		this.slidesLength = null;
		this.slideWidth = null;
		this.slidesTotalWidth = null;
		this.currentIndex = 0;
		this.navPrev = this.el.querySelector('.tc-prev span');
		this.navNext = this.el.querySelector('.tc-next span');
		
		this.innerContainer = this.el.querySelector('.tiny-carousel-inner');
		this.slidesContainer = this.el.querySelector('.tiny-carousel-slides');
		this.slides = this.innerContainer.getElementsByClassName('carousel-item'); 
		this.getChildWidthTotal();
	
		this.innerContainer.style.width=this.slidesTotalWidth+"px";
	this.navPrev.addEventListener('click',function(){
		rootThis.prevItem();
	},true);	
		this.navNext.addEventListener('click',function(){rootThis.nextItem()},false);	
	
		
	}

	TinyCarousel.prototype.getChildWidthTotal = function(){

		if(this.slidesTotalWidth ===null){
			var width = 0;	this.slidesLength=this.slides.length;
			for(var i = 0; i<this.slidesLength;i++){
					 width = Math.max(this.slides[i].getBoundingClientRect().width,width);
				
			} 
			this.slideWidth = width;
			this.slidesTotalWidth = width * this.slidesLength;
		}
	}
	TinyCarousel.prototype.prevItem = function(){
		
		/* if(this.currentIndex==0){
			this.currentIndex=this.slidesLength-1;
			var currentSlideClone =null;
			for(var i = (this.slidesLength-1); i >= 0;i++){
				
	 	 currentSlideClone = this.slides[i].cloneNode(true);
		 this.slidesContainer.insertBefore(currentSlideClone,this.slidesContainer.firstChild);
			}
		} */
		console.log("prev Item "+this.currentIndex);
		console.log("slideLength "+this.slidesLength);
		console.log(this.slides );
		
		if(this.currentIndex>0){
			this.currentIndex--;
		
	
			this.slidesContainer.style.left = this.slidesContainer.offsetLeft +this.slideWidth+"px";	
		}
	
		
		 
	}
	TinyCarousel.prototype.nextItem =function(){
		var currentSlideClone = this.slides[this.currentIndex].cloneNode(true);
		this.slidesContainer.append(currentSlideClone);
		this.currentIndex++;
		this.slidesContainer.style.left = this.slidesContainer.offsetLeft -  this.slideWidth +"px";
			
		
	}
	return TinyCarousel;
}()); 