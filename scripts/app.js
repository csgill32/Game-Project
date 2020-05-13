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
        createBarriers(8);
        // lives = 3;
    } else if (round === 3) {
        createBarriers(10);
        // lives = 3;
    } else {
        $('h1').text(`SOUP'S UP`);
    }
}
setUpRound();


const handleClick = event => {
    if ($(event.target).children().length) {
        $(event.target).addClass("appear");
        // window.alert('WIN!');
        round++;
        // lives = 3;
        setUpRound();
        updateLives();
        // stop round
        //move to next round
    } else $(event.target).addClass("clicked");
    if ($(event.target.classList.contains("clicked"))) {
        console.log("Bad click");
        lives--;
        updateLives();

    }
    if ($('.clicked').length > 2) {
        round = 1;
        lives = 3;
        setUpRound();
        updateLives();
        // restart
    }
}

$section.on('click', 'article', handleClick);

// for (i = 0; i <= $section.length; i++) {
    //     if ($section.classList.contains("clicked")) {
    //         lives--;
    //     }
    // }