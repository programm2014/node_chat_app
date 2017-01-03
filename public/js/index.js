$(document).ready(function(){

	var socket = io();
	socket.on("connect", function (){
		console.log("connected to the server");

		socket.emit("createMessage", {
			from: 'john',
			text: 'salut'
	});
		
	

	});

	

	socket.on("newMessage", function (message) {
			console.log(message);

	});

	socket.on("disconnect",function(){
		console.log("disconnected from server");
	});
});