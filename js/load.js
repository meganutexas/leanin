$(document).ready(function() {
	$('dropdown-toggle').dropdown()
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})

$(function(){
	$("#social").load("menus/social.html");
	$("#hardware").load("menus/hardware.html");
	$("#tutorials").load("menus/tutorials.html");
	$("#libraries").load("menus/libraries.html");
});

document.registerElement('question');
document.registerElement('answer');
