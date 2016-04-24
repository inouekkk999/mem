// JavaScript Document

$(function(){
	$(".globNav_toggle").on("click", function() {
		$(this).next().slideToggle('fast');
	});
});


$(function(){
	$(".footNav_toggle").on("click", function() {
		$(this).next().slideToggle();
		$(this).toggleClass("openToggle");
	});
});

var showLength = 70 ; 
	onload = function() {
	elements = document.getElementsByTagName("*") ;
		for (var i = 0; i < elements.length; ++i)
			with (elements[i])
		if (className == "RecText" && innerHTML.length > showLength)
	innerHTML = innerHTML.substr(0, showLength) + '...' ;
}