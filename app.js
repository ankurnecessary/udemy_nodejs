const http = require('http');
const fs = require('fs');

// Server creation
const server = http.createServer((req, res) => {
  
  const url = req.url;
  const method = req.method;

  if(url === '/') {
    res.write('<html>');
    res.write('<head><title>Message</title></head>');
    res.write('<body><form action="/message" method="post"><input type="text" name="message"><button type="submit">Send</button></form></body>')
    res.write('</html>');
    return res.end();
  }
  
  if(url === '/message' && method === 'POST'){
    const body = [];
    
    // To collect the data sent via request
    req.on('data', (chunk) => {
      body.push(chunk);
    });

    // To parse the data collected from request when data will reach to it's end
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message);
    });

    res.statusCode = 302;
    res.setHeader('location', '/');
    return res.end();
  }
  
  res.setHeader('Content-type', 'text/html');
  res.write('<html>');
  res.write('<head><title>This is my first page</title></head>');
  res.write('<body><h1>This is a page from nodejs </h1></body>');
  res.write('</html>');
  res.end();
});

// Start the server for persistant listening of requests
server.listen(3000);