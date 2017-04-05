$(".Scenario_con li").mousemove(function(){
	i=$(this).index();
	$(".Scenario_con_list>div").css("display","none");
	$(".Scenario_con_list>div").eq(i).css("display","block");
	$(".Scenario_con li").css("background","white");
	$(this).css("background","#004599");
	$(".Scenario_con li").children("p").css("color","#0d47a1");
	$(this).children("p").css("color","white");
	$(".Scenario_con li").css("border","1px solid #7db8ff");
	$(this).css("border","none");
	$(".img1").css({zIndex:-1});
	$(this).find(".img1").css({zIndex:100});
	console.log($(".Scenario_con li").find("img").eq(0));
})

$(".deploy_con_title li").click(function(){
	j=$(this).index();
	$(".deploy_con_title li").css({
		background:"none",
		color:"black",
		border:"none"
	});
	$(this).css({
		    borderTopRightRadius: "6px",
   			borderTopLeftRadius: "6px",
    		background: "#a0a0a0",
    		color: '#ffffff'
	});
	$(".deploy_con_list>div").css("display","none");
	$(".deploy_con_list>div").eq(j).css("display","block");
})