const createDivs = (num) => {
    let i = 0;
    for (i; i < num; i++) {
        const template = `<div id='${i}'>Circle${i}</div>`;
        console.log(template);
        $('.container').append(template);
    }
    let winner = Math.floor(Math.random() * num);
    const randomElement = $(`#${winner}`);
    let element = $(`<div>Top Secret</div>`);
    randomElement.append(element);
};
createDivs(4);

// const createDivs = (num) => {
//     let i = 0;
//     for (i; i < num; i++) {
//       const template = `
//       <div id='${i}'>Circle ${i}</div>
//       `;
//       $('.container').append(template);
//     }
//     let secret = Math.floor(Math.random() * num);
//     const randowElement = $(`#${secret}`);
//     let element = $('<div>Top Secret</div>');
//     randowElement.append(element);
//   };
//   createDivs(4);

