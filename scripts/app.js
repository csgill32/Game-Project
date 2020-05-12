const createBarriers = (num) => {
    let i = 0;
    for (i; i < num; i++) {
        const $barrier = $(`<div class = "barrier" id='${i}'></div>`);
        $('.container').append($barrier);
    }
    let winner = Math.floor(Math.random() * num);
    const $randomElement = $(`#${winner}`);
    let $element = $(`<div id = "winner"></div>`);
    $randomElement.append($element);
};
createBarriers(4);

// const handleClick = event => {
//     if (event.target.classList.contains("clicked") === false) {
//         $(event.target).addClass("clicked");
//     }
// }
// $('.barrier').on('click', handleClick);


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