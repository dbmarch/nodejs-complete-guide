const http = require('http');
const server = http.createServer((req, res) => {
   console.log(`Received request: ${req.method} ${req.url}`);
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
   res.end('Hello, World!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
   console.log(`Server running at http://localhost:${PORT}/`);
});

setTimeout(() => {
   console.log("timer is done");
}, 2000);


