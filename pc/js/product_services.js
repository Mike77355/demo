$(function(){
	$(".menu .level1 .separator").click(function(e){
		if($(this).hasClass("current")){
			//找到ul,收起ul
			$(this).removeClass("current").next().slideUp(300);
			$(".menu .level1 i").eq($(this).index(".separator")).css("transform","rotate(0deg)");
		}else{
			//找到ul，并撑开显示
			$(this).addClass("current").next().slideDown(300);
			$(this).parent().siblings().find(".separator").removeClass("current").next().slideUp(300);
			//恢复他自己的箭头角度
			$(".menu .level1 i").eq($(this).index(".separator")).css("transform","rotate(450deg)");
			//恢复旁边的箭头角度
			$(this).parent().siblings().find("i").css("transform","rotate(0deg)");
		}
	});
});
