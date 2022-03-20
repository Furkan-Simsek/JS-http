const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log("Request received");
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if (url == '/'){
        res.end("indexe hos geldiniz");
    }else if (url == '/hakkimda') {
        res.end("hakkimdama hos geldiniz");
    }else if (url == '/iletisim') {
        res.end("iletisime hos geldiniz");
    }else{
        res.end("404 not found");
    }
});

const port = 5000;

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});