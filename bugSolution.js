const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  try {
    // Simulate potential error
    // Example: Accessing a non-existent file
    //const data = fs.readFileSync('nonexistent.txt');
    response.writeHead(200);
    response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
  } catch (err) {
    console.error('Error handling request:', err);
    response.writeHead(500);
    response.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
};

const server = http.createServer(requestListener);

server.on('error', err => {
  console.error('Server error:', err);
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});