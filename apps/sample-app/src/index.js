const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello from Pi5 GitOps pipeline! v1\n');
});
server.listen(3000, () => console.log('Running on port 3000'));
