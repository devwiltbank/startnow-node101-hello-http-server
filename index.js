// write your code here
var http = require("http");
var myMessage = "This is the console.log message";
http
  .createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    // res.write(
    //   '<form action="fileupload" method="post"  enctype="multipart/form-data">'
    // );
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write(
      "<div>Pops up a form reconfirm submission message if reloaded.</div>"
    );
    //res.write("</form>");res.write(
    //   '<form action="fileupload" method="post"  enctype="multipart/form-data">'

    return res.end(
      "Hello World. This is our HTTP server running on localhost:8080 For uploading a file"
    );
  })
  .listen(8080, "127.0.0.1");

console.log("Server running at http://127.0.0.1:8080/");
console.log(myMessage);
