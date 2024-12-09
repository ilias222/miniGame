const router = (requestUrl) => {
    
    let myResponseFile;

    switch (requestUrl) {
        case 'publick':
            myResponseFile = '../src/static/template/publick.html'        
            break;
        case 'autch':
            myResponseFile = '../src/static/template/autch.html'        
            break;
    
        default:
            myResponseFile = '../src/static/template/error.html'
            break;
    }

    return myResponseFile;
}

module.exports.router = router;