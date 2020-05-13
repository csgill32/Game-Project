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
// createBarriers(4);

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
    $('.barriers').empty();
    if (round === 1) {
        createBarriers(5);
    } else if (round === 2) {
        createBarrier(8);
    } else if (round === 3) {
        createBarriers(10);
    } else {
        $('h1').text(`SOUP'S UP`);
    }
}
setUpRound();


const handleClick = event => {
    if ($(event.target).children().length) {
        $(event.target).addClass("appear");
        window.alert('WIN!');
        // stop round
        //move to next round
    } else $(event.target).addClass("clicked");
    if ($('.clicked').length > 2) {
        window.alert("TOO MANY CLICKS");
        // restart
    }
}

$('article').on('click', handleClick);


// if there are three articles with the class "clicked", then you lose and go back to round 1


// const handleLoserClick = event => {
//     if (event.target.classList.contains("clicked") === false) {
//         $(event.target).addClass("clicked");
//     }
// }
// $('.barrier').on('click', handleLoserClick);





/* This gives all but one the class "winner"*/

// const createDivs = (num) => {
//     let i = 0;
//     for (i; i < num; i++) {
//         const $template = $(`<div class="empty" id='${i}'>Circle${i}</div>`);
//         console.log($template);
//         $('.container').append($template);
//         let $templateEl = $("div .empty");
//         let $random = Math.floor(Math.random() * $templateEl.length)
//         $templateEl.eq($random % $templateEl.length).addClass("winner");
//     }

// const createDivs = (num) => {
//     let i = 0;
//     for (i; i < num; i++) {
//         const $template = $(`<div class="empty" id='${i}'>Circle${i}</div>`);
//         console.log($template);
//         $('.container').append($template);
//         let $randomElement = $(".empty");
//         $randomElement.eq(Math.floor(Math.random() * $randomElement.length)).addClass("winner");
//     }
// };
// createDivs(4);

// const createDivs = (num) => {
//     let i = 0;
//     for (i; i < num; i++) {
//         const $template = $(`<div class="empty" id='${i}'>Circle${i}</div>`);
//         console.log($template);
//         $('.container').append($template);
//         let $randomIndex = Math.floor(Math.random() * num);
//         let $randomElement = $(".empty");
//         $randomElement.eq($randomIndex).addClass("winner");
//     }
// };
// createDivs(4);