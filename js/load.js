$(document).ready(function() {
	$('dropdown-toggle').dropdown()
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})

$(function(){
	$("#social").load("/~meg1022/leanin/menus/social.html");
	$("#tutorials").load("/~meg1022/leanin/menus/tutorials.html");
});

document.registerElement('question');
document.registerElement('answer');
