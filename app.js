const express = require( 'express' );
const app = express(); // creates an instance of an express application


app.use("/", function(request,response,next) {
	response.send("another message!");
	next();
});

app.get("/", function(request,response) {
	response.send("welcome!");
});

app.get("/is-anybody-in-there", function(request,response) {
	response.send("somebody is in here");
});

app.post("/modernism", function(request,response) {
	response.send("hello modernism")
});

app.get("/news", function(request,response) {
	response.send("news!");
});




app.listen(3000)
	//console.log("server listening");




