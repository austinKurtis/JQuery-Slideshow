$(document).ready(function ($) {
 var imageBox 		= $('.slideWrapper ul'),
	 imageWidth 	= $('.slideWrapper ul li').first().children('img').width(),
	 imageQuantity 	= $('.slideWrapper ul').children('li').length,
	 currentImage 	= 1;
	 console.log("imageQuantity", imageQuantity);
	imageBox.css('width', imageWidth*imageQuantity);


	$('.nav button').on('click', function(){
		var whichButton = $(this).data('nav');

		if(whichButton === 'next'){
			if(currentImage === imageQuantity){
			currentImage = 1;
			transition(currentImage, imageWidth);
			}else{
				currentImage++;
				transition(currentImage, imageWidth);
			}						
		}else if(whichButton === 'prev'){
			if(currentImage === 1){
				currentImage = imageQuantity;
				transition(currentImage, imageWidth);
			}else{
				currentImage --;
				transition(currentImage, imageWidth);
			}
		}	
	});
	//The transition function to animate based on the size of the image
	function transition(currentImageInput, imageWidthInput){
		var plxSize = -(currentImageInput-1) * imageWidthInput
		imageBox.animate({
				'left' : plxSize
		});
	}
});