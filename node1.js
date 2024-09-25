const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        let message = '';
        if (fs.existsSync('message.txt')) {
            message = fs.readFileSync('message.txt', 'utf-8');
        }

        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body>');
        if (message) {
            res.write(`<h3>${message}</h3>`);
        }

        res.write('<form action="/message" method="POST">');
        res.write('<input type="text" name="message" required>');
        res.write('<button type="submit">Send</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message); 
            res.statusCode = 302; 
            res.setHeader('Location', '/'); 
            return res.end(); 
        });
    }
});

server.listen(4000, () => {
    console.log('Server is listening on port 4000');
});
