var Http = require("http");
var Url = require("url");
var FileSystem = require("fs");

exports.Server = function () {
	
	var listener;
	var request;
	var response;
	
	this.start = function () {
		listener = Http.createServer(onRequest);
		listener.listen(8080);
		// console.log("Server.start");
	};
	
	function onRequest(req, res) {
		request = req;
		response = res;
		
		var url = Url.parse(request.url);
		console.log("Server.onRequest");
		
		FileSystem.readFile(url.pathname, getDocument);
	};
	
	function getDocument(error, html) {
		if (error) {
			response.writeHead(500, {"Content-Type": "text/plain"});
			response.write(error + "\n");
		} else {
			response.writeHead(200, {"Content-Type": "text/html"});
			response.write(html);
		}
		response.end();
	}
	
	this.exit = function () {
		console.log("Server.exit");
		process.exit();
		Http.connection.destroy();
	};
	
};
