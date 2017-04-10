$(function(){
	$('.section1').hover(function(){
		$('.section1').removeClass("section1-active");
		$('.massage').css({"display":"none","zIndex":"5"});
		$(".massage-text").css({'display':"none"});
		
		$(this).find(".massage").css({"zIndex":"10"}).stop().slideDown(300,function(){
			$(this).find(".massage-text").stop().fadeIn(200)
		})
	$(this).addClass("section1-active");
	},function(){
		
	})
})
