// create barriers

const createLosers = numberOfLosers => {
    const $losers = $('.empty');
    for (let i = 1; i <= numberOfLosers; i++) {
        const $oneLoser = $('<div class="one-loser"/>')
        $losers.append($oneLoser);
    }
}
createLosers(3);


const createWinner = numberOfWinners => {
    const $winner = $('.winner');
    for (let i = 1; i <= numberOfWinners; i++) {
        const $hiddenSoup = $('<div class="hiddenSoup"/>')
        $winner.append($hiddenSoup);
    }
}
createWinner(1);


// randomize where soup goes
// create soup
// add it to createBarriers function
// barrier disappears when clicked


// const handleClick = event => {
//     if (event.target.classList.contains("clicked") === false) {
//         $(event.target).addClass("clicked");
//     }
// }
// $('.barriers').on('click', '.one-barrier', handleClick);

const handleLoserClick = event => {
    if (event.target.classList.contains("clicked") === false) {
        $(event.target).addClass("clicked");
    }
}
$('.empty').on('click', handleLoserClick);

// if the correct id# is clicked, round +1
// check for correct item

const handleWinnerClick = event => {
    if (event.target.classList.contains("winner")) {
        console.log(event.target);
    }
}
$('.winner').on('click', handleWinnerClick);


// appending divs

const divs = () => {
    let divId = 0;
    const div = $(`<div class='${divId}></div>`);
    for (let i = 0; i < 4; i++) {
        divId = i;
    }
    let secret = Math.floor(Math.random() * divId)
} secret.