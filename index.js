var http = require("http");
const port = 8000;

http.createServer(function(req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<!DOCTYPE html> <html> <head> <title>My App</title> </head> <body> <h1>Who Am I?</h1> <p>I'm Marlon a 20 year old student at Goldsmith University.</p> <h2>What Do I study?</h2> <p>I study Computing at University.</p> </body> </html>");
    }).listen(port, function() {
        console.log(`Node server is running on port ${port}...`);


});


