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
        response.end(`<html maaa=a >
        <head> 
        <style>
        body div #myid{
            width:100px;
            background-color:#ff5000;
        }
        body div img{
            width:30px;
            background-color:#ff1111;
        }
        </style>
        </head>
        <body>
        <div>
        <img id="myid"/>
        <img />
        </div>
        </body>
        </html>`);
    });
}).listen(8088);