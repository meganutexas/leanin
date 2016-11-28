$(document).ready(function() {
	$('dropdown-toggle').dropdown()
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})

$(function(){
	$("#social").load("/menus/social.html");
	$("#tutorials").load("/menus/tutorials.html");
});

document.registerElement('question');
document.registerElement('answer');
