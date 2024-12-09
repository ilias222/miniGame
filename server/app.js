const http = require('http');
const fs = require('fs');
const router = require('./router.js');

const server = http.createServer((request, response) => {
    let myPathPage = router.router(request.url.substring(1));
    fs.createReadStream(myPathPage).pipe(response);
});

server.listen(9000, () => console.log('Сервер запущен, http://localhost:9000'))