const http = require("http");
const app = require('./app');
//const host = 'localhost';
const port = process.env.PORT || 3000;

/*const requestListener = function(req, res) {
	    res.writeHead(200);
	    res.end("Hello World from Node.js HTTP Server");
}*/
const server = http.createServer(app);
server.listen(port);
