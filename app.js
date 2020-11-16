const http = require('http');

const requestHandler = require('./routes');

// Server creation
const server = http.createServer(requestHandler);

// Start the server for persistant listening of requests
server.listen(3000);