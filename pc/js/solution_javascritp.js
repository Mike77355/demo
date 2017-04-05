$(".Scenario_con li").mouseover(function(){
	i=$(this).index();
	$(".Scenario_con_list>div").css("display","none");
	$(".Scenario_con_list>div").eq(i).css("display","block");
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