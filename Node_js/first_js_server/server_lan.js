const http = require('http');

const hostname = '10.245.35.68';
const port = 3000;

const server = http.createServer((req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Hello world')
});

server.listen(port, "0.0.0.0", () => {
        console.log(`Server running at http://${hostname}:${port}`)
});