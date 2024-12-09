document.querySelector('#playGame_GOGO_Jump').addEventListener('click', (e) => {
    console.log('HELLO')
    document.querySelector('.main_container').innerHTML = '';
    document.querySelector('.main_container').innerHTML = `
    <iframe
    src='http://localhost:9001/src/game/GOGO/src/build/index.html'>
    </iframe>
    `;
})