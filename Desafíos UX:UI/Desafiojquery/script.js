$(document).ready(function(){
  
  	$("a").attr("target", "_blank");

      	$("a:contains(Facebook)").prepend("<i class=fab fa-facebook-f'></i>");
      	$("a:contains(Instagram)").prepend("<i class='fab fa-instagram'></i>");
      	$("a:contains(Twitter)").prepend("<i class='fab fa-twitter'></i>");
      	$("a:contains(Snapchat)").prepend("<i class='fab fa-snapchat'></i>");

	$("h2").click(function(){

		$(this).css("color", "red");
	});
    	$("section:eq(1) ul li:eq(3)").append("<ul><li><a href='#'>link 4.a</a></li></ul>");
    	$("section:eq(1) ul li:eq(3)").after("<li><a href='#'>link 5</a></li>");
});
