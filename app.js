const http = require('http');

// Server creation
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
});

// Start the server for persistant listening of requests
server.listen(3000);