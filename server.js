//Pushed from Local

var http = require("http");

function onRequest(request, response) {
  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World - greetings from The Playpen");
  response.end();
}

http.createServer(onRequest).listen(8080); //Local server
//http.createServer(onRequest).listen(process.env.PORT); //Cloud 9 server

console.log("Server has started.");