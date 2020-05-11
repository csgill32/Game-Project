// create barriers

const createBarriers = numberOfBarriers => {
    const $barriers = $('.barriers');
    for (let i = 1; i <= numberOfBarriers; i++) {
        const $oneBarrier = $('<div class="one-barrier"/>')
        $barriers.append($oneBarrier);
    }

}
createBarriers(4);

const createSoup = numberOfSoup => {
    const $soup = $('.soup');
    for (let i = 1; i <= numberOfSoup; i++) {
        const $hiddenSoup = $('<div class="hiddenSoup"/>')
        $soup.append($hiddenSoup);
    }
}
createSoup(1);

// randomize where soup goes
// create soup
// add it to createBarriers function

// barrier disappears when clicked

// create one soup


const handleClick = event => {
    if (event.target.classList.contains("clicked") === false) {
        $(event.target).addClass("clicked");
    }
}
$('.barriers').on('click', '.one-barrier', handleClick);