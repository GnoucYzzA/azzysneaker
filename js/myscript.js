$(document).ready(function() {
	$("#slideshow1 > div:gt(0)").hide();

	setInterval(function() { 
		$('#slideshow1 > div:first')
			.fadeOut(500)
			.next()
			.fadeIn(1000)
			.end()
			.appendTo('#slideshow1');
		},  3000);
	
});

/* Validate Email */

function validateEmailAddress(email) {
var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(email);
}
function validate() {
$("#result").text("");
var emailaddress = $("#email").val();
if (validateEmailAddress(emailaddress)) {
$("#result").text(emailaddress + " is valid :)");
$("#result").css("color", "green");
} else {
$("#result").text(emailaddress + " is not correct, please retry:(");
$("#result").css("color", "red");
}
return false;
}
$("#validate").bind("click", validate);