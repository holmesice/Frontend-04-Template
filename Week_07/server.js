const http = require('http');

http.createServer((Request, response) => {
    let body = [];
    requestAnimationFrame.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk.toString());
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        console.log("body:", body);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(
            `<html ma=aaa>
            <head>
            <style>
            div #myid{width:100px;}
            </style>
            </head>
            </html>`);
    });
}).listen(8088);

console.log("server started");