const http = require('http');

//console.log(http);

//Create the server
//Req => Incoming request
//Res => Response we're sending back
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page.');
    }

    if(req.url === '/about'){
        res.end('Here is our short history');
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you're looking for.</p>
    <a href="/">Back home</a>
    `);
    // res.write('Welcome to our home page.');
    // res.end();
});

//console.log(server);
server.listen(5000);