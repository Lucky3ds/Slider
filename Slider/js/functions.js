$(function(){
	var indicieAtual = 0;
	var indiceMaximo = $('.slider img').length;
	var delay = 3000;
	initSlider();
	cliqueSlider();
	function initSlider(){
		for(var i = 0; i < indiceMaximo; i++){
			if(i == 0){
				$('.bullets-nav').append('<span style="background-color:#069"></span>');
			}else{
				$('.bullets-nav').append('<span></span>');
			}
		}
		$('.slider img').eq(0).fadeIn();
		setInterval(function(){
			alternarSlider();
		},delay)
	}
	function cliqueSlider(){
		$('bullets-nav span').click(function(){
			$('slider img').eq(indiceAtual).stop().fadeOut(2000);
			indicieAtual = $(this).index();
			$('.slider img').eq(indicieAtual).stop().fadeIn(2000);
			$('.bullets-nav span').css('background-color','#ccc');
			$(this).css('background-color','#069');
		})
	}
	function alternarSlider(){
		$('.slider img').eq(indicieAtual).fadeOut(2000);
		indicieAtual+=1;
		if(indicieAtual == indiceMaximo)
			indicieAtual = 0;
		$('.bullets-nav span').css('background-color','#ccc');
		$('.bullets-nav span').eq(indicieAtual).css('background-color','#069');
		$('.slider img').eq(indicieAtual).fadeIn(2000);
	}
})