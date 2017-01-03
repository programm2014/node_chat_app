const path = require("path");
const express = require("express");
const ejs = require("ejs");
var app = express();

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
//app.set("view engine", "ejs");
app.get("/", (req, res)=>{
	res.render("index");
});










app.listen(port, ()=>{
	console.log(`server is running on port ${port}.............`);
});
