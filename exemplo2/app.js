var main = function (){
	"use strict";
	$(".comment-input button").on("click", function(event){
		var $novo_comentario = $("<p>").text($(".comment-input input").val());
		$(".comments").append($novo_comentario);
	});
};
$(document).ready(main);