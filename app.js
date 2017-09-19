const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.get("/", function(request,response) {
	response.send("welcome!");
})

app.listen(3000)
	//console.log("server listening");




