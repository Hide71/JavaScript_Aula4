var main = function (){
	"use strict";
	var $adicionar_comentarios = function(){
		var $novo_comentario;
		if($(".comment-input input").val() !== ""){
			$novo_comentario = $("<p>").text($(".comment-input input").val());
			$novo_comentario.hide();
			$(".comments").append($novo_comentario);
			$novo_comentario.fadeIn();
			$(".comment-input input").val("");
		}
	}
	$(".comment-input button").on("click", function(event){
		$adicionar_comentarios();
	});
	$(".comment-input input").on("keypress", function(event){
		var $novo_comentario;
		if(event.keyCode === 13){
			$adicionar_comentarios();
		}
	});
};
$(document).ready(main);