$(document).ready(function() {
	$('dropdown-toggle').dropdown()
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})

$(function(){
	$("#setup").load("menus/setup.html");
	$("#programming").load("menus/programming.html");
	$("#examples").load("menus/examples.html");
	$("#resources").load("menus/resources.html");
});

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


var space = "&nbsp;";
var tab = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
var left_arrow = "&lt;";
var right_arrow = "&gt;";
var double_left_arrow = "&lt;&lt;";
var double_right_arrow = "&gt;&gt;";

document.querySelectorAll('[is="sp"]').text = space;
document.querySelectorAll('[is="tab"]').text = tab;
document.querySelectorAll('[is="arrow-l"]').text = left_arrow;
document.querySelectorAll('[is="arrow-r"]').text = right_arrow;
