//HOST--Machine or server that runs node js application
//HOST Environment -- Environment in which Node.js application runs,,this include 
//OS,CPU architecture,
//http -- Provides functionality for creating HTTP servers and handling requests,including access to'Host'header
//dns -- Provides functionality for performing DNS lookups and hostnames to IP addresses


const http = require('http'); // imports built in http module in node js
// the http module creates functionality for creating http server

http.createServer((req, res) => { // this creates a new HTTP server using createServer metghod from http module
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(4000, () => {
  console.log('Server running at http://localhost:4000/');
});