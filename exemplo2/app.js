var main = function (){
	"use strict";
	$(".comment-input button").on("click", function(event){
		$(".comments").append("<p> Este é um novo comentário!</p>");
	});
};
$(document).ready(main);