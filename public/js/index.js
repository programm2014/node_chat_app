$(document).ready(function(){

	var socket = io();
	socket.on("connect", function (){
		console.log("connected to the server");

	});

	socket.on("newMessage", function (message) {
			var li = $("<li></li>");
			li.text(`${message.from}: ${message.text}`);
			$("#messages").append(li);

	});

	
	socket.on("disconnect",function(){
		console.log("disconnected from server");
	});

	$("#message_form").on("submit", function(e){
		e.preventDefault();

		socket.emit("createMessage",{
			from: "User",
			text: $("[name=message]").val()
		}, function(){
			console.log("got it");
		});

		$(this)[0].reset();
	});
});