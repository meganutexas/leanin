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

document.registerElement('top');
document.registerElement('header-file');
document.registerElement('var');
document.registerElement('function-create');
document.registerElement('function-use');
document.registerElement('string');
document.registerElement('num');
document.registerElement('comment');
document.registerElement('return');
document.registerElement('vocab');
document.registerElement('command-line-output');
document.registerElement('for');
document.registerElement('if');
document.registerElement('else');
document.registerElement('else-if');
document.registerElement('while');
document.registerElement('vocab');

document.registerElement('sp');
document.registerElement('tab');
document.registerElement('arrow-l');
document.registerElement('arrow-r');
document.registerElement('arrow-l-double');
document.registerElement('arrow-r-double');
