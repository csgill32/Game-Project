$('div.gif').hide();
// $('button').hide();

const $section = $('<section class="container"></section>');
const $body = $('body');

const makeGameBoard = () => {
    $body.append($section);

}
makeGameBoard();

const createBarriers = (num) => {
    for (let i = 0; i < num; i++) {
        const $barrier = $(`<article class = "barrier" id='${i}'></article>`);
        $section.append($barrier);
    }
    let winner = Math.floor(Math.random() * num);
    const $randomElement = $(`#${winner}`);
    let $element = $(`<div id = "winner"></div>`);
    $randomElement.append($element);
};

let round = 1;
const updateRound = () => {
    $('#round').text(`Round: ${round}`);
}

let lives = 3;
const updateLives = () => {
    $('#lives').text(`Lives Remaining: ${lives}`);
}

const setUpRound = () => {
    updateRound();
    // updateLives();
    // lives = 3;
    $section.empty();
    if (round === 1) {
        createBarriers(5);
    } else if (round === 2) {
        createBarriers(6);
        updateLives();
    } else if (round === 3) {
        createBarriers(8);
        // lives = 3;
    } else {
        $('h1').text(`SOUP'S UP`).addClass('bounce-in-top');
        $('section').hide();
        $('div.gif').show();
        // $('button').show();
        // const $winPage = $('<img class = "yoda"></img>');
        // const $header = $('header');
        // $header.append($winPage);
        // $winPage.show();


    }
}
setUpRound();

const noSoup = new Audio();
noSoup.src = 'https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=No+Soup+For+You!&filename=od/ODQ1Mzg3NzU4NDU0Njk_xIiyMyRzqxo.mp3';
const playSoup = event => {
    noSoup.play();
}

const wantBread = new Audio();
wantBread.src = 'https://www.soundboard.com/handler/DownLoadTrack.ashx?cliptitle=You+Want+Bread%3f&filename=nt/NTE5Mzg3NzU1MTkzNTA_8VkeleBsMUQ.mp3';
const playBread = event => {
    wantBread.play();
}

const handleClick = event => {
    if ($(event.target).children().length) {
        $(event.target).addClass("appear");
        // window.alert('WIN!');
        playBread();
        let seeSoup = setTimeout(function () {
            round++;
            lives = 3;

            setUpRound();
            updateLives();
        }, 1500);


    } else {
        $(event.target).addClass("clicked");
        playSoup();
    }

    if ($(event.target.classList.contains("clicked"))) {
        lives--;
        updateLives();

    }
    if ($('.clicked').length > 2 || lives < 1) {
        round = 1;
        lives = 3;
        setUpRound();
        updateLives();
        // restart
    }
}

$section.on('click', 'article', handleClick);


// const $soundTime = $('article.barrier');
// $soundTime.click(function (event) {
//     noSoup.play();
// });

// const playSound = event => {
//     noSoup.play();
// }

$('button.replay').click(function () {
    location.reload(true);
});

$('button.mute').click(function () {
    noSoup.muted = true
    wantBread.muted = true
})

// const $muteButton = $('button.mute');
// $muteButton.on('click', function (mute) {
//     if (Audio.muted) {
//         Audio.muted = false;
//     } else {
//         Audio.muted = true;
//     }
// })