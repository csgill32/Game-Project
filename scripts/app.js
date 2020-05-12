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
createBarriers(4);

const $winner = $('article div#winner');
console.log($winner);
$winner.on("click", function (event) {
    console.log("winner click");
})


const handleClick = event => {
    // if (event.target.contains("div #winner")) {
    //     $(event.target).addClass("appear")
    // }
    if ($(event.target).children().length) {
        $(event.target).addClass("appear")
        round++
    } else if (event.target.classList.contains("clicked") === false) {
        $(event.target).addClass("clicked");
    }
}
$('.barrier').on('click', handleClick);

// let round = 1;

// const updateRound = () => {
//     $('#round').text(`Round: ${round}`);
// }

// const setUpRound = () => {
//     updateRound();
//     $('.barriers').empty();
//     if (round === 1) {
//         createBarriers(5);
//     } else if (round === 2) {
//         createSquares(8);
//     } else if (round === 3) {
//         createSquares(10);
//     } else {
//         $('h1').text(`SOUP'S UP`);
//     }
// }
// setUpRound();


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