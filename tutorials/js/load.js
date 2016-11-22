$(document).ready(function() {
	$('dropdown-toggle').dropdown()
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})

$(function(){
	$("#social_2").load("menus/social.html");
	$("#hardware_2").load("menus/hardware.html");
	$("#tutorials_2").load("menus/tutorials.html");
});

document.registerElement('question');
document.registerElement('answer');
