const http = require('http');
const express = require('express');

// Intializing an express app
const app = express();

// Server creation
const server = http.createServer(app);

// Start the server for persistant listening of requests
server.listen(3000);