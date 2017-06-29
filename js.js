$(document).ready(function(){

	$("form").submit(function(){
		$.ajax({
			type: = "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function(){
			$(this).find("input").val("");
			$('#succes-block').fadeIn(500);
			$("form").trigger("reset");
		});
		return false;
	});
});