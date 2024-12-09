/**
 * constanceText.js
*/
const textGamePage = [
    'GOGO Jump',
    `GOGO Jump - это веселая игра в жанре Аркада. Игроку предстоит пройти три уровня за выбранного персонажа.
    Основная механика игры - прыжки, успеть перепрыгнуть как можно больше препятствий.
    Игра имеет историю развития сюжета, забавных сказочных персонажей и одного босса в конце игры.`
];
//////////////////////////////

const collsGame = 1;

console.log(caches)

const renderPageMiniGame = () => {
    textGamePage.forEach((e, i) => {

        if(textGamePage.length > i+1){
        pageHTML = `
        <div class='games_${textGamePage[i]} gameMiniPage'>
            <p class='title_game ${textGamePage[i].replace(' ', '_')}'>${textGamePage[i]}</p>
            <hr>
            <div class="inlineInfoCard">
                <img class='coverGame' src='http://localhost:9001/src/static/img/gogoJump.jpg'>
                <p class='discript_game_${textGamePage[i].replace(' ', '_')}'>${textGamePage[i+1]}</p>
            </div>
            <div class="actionLiner__bottom">
                <button class="game_stat" id="statGame_${textGamePage[i].replace(' ', '_')}">Статистика</button>
                <button class="game_stat" id="infoGame_${textGamePage[i].replace(' ', '_')}">Правила/Управление</button>
                <button class="game_stat" id="playGame_${textGamePage[i].replace(' ', '_')}">Играть</button>
            </div>
        </div>`;
        i++;
        document.querySelector('.main_container').innerHTML += pageHTML;
        }else{
            return;
        }
    });
}

renderPageMiniGame();