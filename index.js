var http = require("http");
const port = 8000;

http.createServer(function(req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<!DOCTYPE html> <html> <head> <title>My App</title> </head> <body> <h1>My Website</h1> <h2>Who Am I?</h2> <p>I'm Marlon a 20 year old student at Goldsmith University</p> <h2>What Do I Study?</h2> <p>I studdy Computing at UNIVERSITY</p> <div> <h2>Things I Like</h2> <ul> <li>Food</li> <li>Money</li> <li>Sleep</li> </ul> </div> </body> </html>");
    }).listen(port, function() {
        console.log(`Node server is running on port ${port}...`);


});


