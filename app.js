const http = require('http');

// Server creation
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-type', 'text/html');
  res.write('<html>');
  res.write('<head><title>This is my first page</title></head>');
  res.write('<body><h1>This is a page from nodejs </h1></body>');
  res.write('</html>');
  res.end();
});

// Start the server for persistant listening of requests
server.listen(3000);