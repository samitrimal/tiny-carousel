var TinyCarousel=function(){function t(t){var e=this;this.el="object"==typeof t?t:document.querySelector(t),null!==this.el&&(this.slidesLength=null,this.slideWidth=null,this.slidesTotalWidth=null,this.currentIndex=0,this.navPrev=this.el.querySelector(".tc-prev span"),this.navNext=this.el.querySelector(".tc-next span"),this.innerContainer=this.el.querySelector(".tiny-carousel-inner"),this.slidesContainer=this.el.querySelector(".tiny-carousel-slides"),this.slides=this.innerContainer.getElementsByClassName("carousel-item"),this.getChildWidthTotal(),this.innerContainer.style.width=this.slidesTotalWidth+"px",this.navPrev.addEventListener("click",function(){e.prevItem()},!0),this.navNext.addEventListener("click",function(){e.nextItem()},!1))}return t.prototype.getChildWidthTotal=function(){if(null===this.slidesTotalWidth){var t=0;this.slidesLength=this.slides.length;for(var e=0;e<this.slidesLength;e++)t=Math.max(this.slides[e].getBoundingClientRect().width,t);this.slideWidth=t,this.slidesTotalWidth=t*this.slidesLength}},t.prototype.prevItem=function(){console.log("prev Item "+this.currentIndex),console.log("slideLength "+this.slidesLength),console.log(this.slides),this.currentIndex>0&&(this.currentIndex--,this.slidesContainer.style.left=this.slidesContainer.offsetLeft+this.slideWidth+"px")},t.prototype.nextItem=function(){var t=this.slides[this.currentIndex].cloneNode(!0);this.slidesContainer.append(t),this.currentIndex++,this.slidesContainer.style.left=this.slidesContainer.offsetLeft-this.slideWidth+"px"},t}();