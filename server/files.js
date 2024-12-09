const http = require('http');
const fs = require('fs');
const path = require('path');


const serverFile = http.createServer((request, respons) => {
    let fileRespons = request.url.substring(1);
    console.log(request.url.substring(1))

    switch (path.extname(fileRespons)) {
        case '.jpg':
            fs.readFile('../' + request.url.substring(1), (err, file) => {
                respons.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
                respons.end(file);
            })
            break;

        case '.png':
            fs.readFile('../' + request.url.substring(1), (err, file) => {
                respons.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
                respons.end(file)
            })
            break;

        case '.css':
            fs.readFile('../' + request.url.substring(1), (err, file) => {
                respons.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
                respons.end(file)   
            })
            break;

        case '.js':
            fs.readFile('../' + request.url.substring(1), (err, file) => {
                respons.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
                respons.end(file)   
            })
            break;

        case '.html':
            fs.readFile('../' + request.url.substring(1), (err, file) => {
                respons.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
                respons.end(file)   
            })
            break;

        case '.ttf':
            fs.readFile('../' + request.url.substring(1), (err, file) => {
                respons.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
                respons.end(file)   
            })
            break;

        case '.mp3':
            fs.readFile('../' + request.url.substring(1), (err, file) => {
                respons.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
                respons.end(file)   
            })
            break;
    
        default:
            break;
    }
    
});

serverFile.listen(9001, () => console.log('Файловый сервер, http://localhost:9001'));