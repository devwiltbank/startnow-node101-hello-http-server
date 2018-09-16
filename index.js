// write your code here
var http = require("http");
var myMessage = "This is the console.log message";
http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end("Hello World.  This is our HTTP server running on localhost:8080");
  })
  .listen(8080, "127.0.0.1");

console.log("Server running at http://127.0.0.1:8080/");
console.log(myMessage);
