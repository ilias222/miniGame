const faqGame = {
    "infoGame_GOGO_Jump": {
        "rule": "При прикосновении к злым пням, снимается очко здоровья. Всего три очка на один уровень. При необходимости можно начать уровень заного, если не смог его пройти. Если заканчиваются спец умения, то последующее использование - открывает блок на экране. Зависни на нем или над ним в течении 3-х секунд, и способности восстановятся. ",
        "options" : "space (Пробел) - прыжок. L - использовать спец. умение."
    }
}

const statGame ={
    "statGame_GOGO_Jump": [
        {
            "userName":"Иван",
            "levelOk":2,
            "jumpBox": 25
        },
        {
            "userName":"Светлана",
            "levelOk": 1,
            "jumpBox": 61
        },
        {
            "userName":"Михаил",
            "levelOk": 2,
            "jumpBox": 33
        },
        {
            "userName":"Михаил",
            "levelOk": 2,
            "jumpBox": 35
        },
        {
            "userName":"Вадим",
            "levelOk": 3,
            "jumpBox": 2
        }
    ]
}

document.querySelector('.actionLiner__bottom').addEventListener('mouseover', (e) => {
    console.log(e.target.id.slice(0,4))
    switch(e.target.id.slice(0,4)){
        case 'info':
            const info = document.createElement('div');
            info.className = 'info_box';
            info.innerHTML = `
                <p class="info_rule"><b>Правила игры:</b> ${faqGame[e.target.id].rule}</p>
                <p class="info_options"><b>Управление:</b> ${faqGame[e.target.id].options}</p>
            `
            e.target.closest('div').append(info);
            break;

            case 'stat':
                const stat = document.createElement('div');
                stat.className = 'stat_box';
                stat.innerHTML = '<div class="stat_game">'

                statGame[e.target.id].sort((a, b) => b.levelOk - a.levelOk && b.jumpBox - a.jumpBox).reverse();

                console.log(statGame[e.target.id])
                console.log(typeof statGame[e.target.id])
                statGame[e.target.id].forEach((e) => {
                    stat.innerHTML += `
                        <p class="nameUser"><b>Имя: </b> ${e.userName}</p>
                        <p class="colsLevel"><b>Количество уровней:</b> ${e.levelOk}</p>
                        <p class="colsBox"><b>Количество перепрыгнцтых блоков:</b> ${e.jumpBox}</p>
                    
                    ` 
                });
                stat.innerHTML += '</div>';

                e.target.closest('div').append(stat);
                break;
        default:
            break;
    }
})

document.querySelector('.actionLiner__bottom').addEventListener('mouseout', (e) => {
    document.querySelector('.info_box') != null ? document.querySelector('.info_box').remove() : null;
    document.querySelector('.stat_box') != null ? document.querySelector('.stat_box').remove() : null;
});