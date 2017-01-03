const path = require("path");
const express = require("express");
const ejs = require("ejs");
const http = require("http");
const socketIO = require("socket.io");

var app = express();
var server = http.createServer(app);
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
//app.set("view engine", "ejs");
// app.get("/", (req, res)=>{
// 	res.render("index");
// });

 var io = socketIO(server); 
 	io.on("connection", (socket)=>{
 		console.log("new user connected");

 		socket.emit("newMessage",{
 			from:"admin",
 			text: "welcome",
 			createdAt: new Date().getTime()
 		});

 		socket.broadcast.emit("newMessage",{
 			from: "Admin",
 			text: "new user join",
 			createdAt: new Date().getTime()
 		});

 		socket.on("createMessage", (message)=>{
 			console.log("new message",message);
 			io.emit("newMessage",{
 				from: message.from,
 				text: message.text,
 				createdAt: new Date().getTime()
 			});

 			// socket.broadcast.emit("newMessage", {
 			// 	from: message.from,
 			// 	text: message.text,
 			// 	createdAt: new Date().getTime()
 			// });
 		});

 		// socket.emit("newMessage",{
 		// 	from:"cooper",
 		// 	text: "hello world"
 		// });

 		

 		socket.on("disconnect", ()=>{
 			console.log("user disconnected");
 		});
 	});








server.listen(port, ()=>{
	console.log(`server is running on port ${port}.............`);
});
