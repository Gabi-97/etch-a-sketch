
document.addEventListener('DOMContentLoaded', addElement);

// function addElement() {
//     let container = document.querySelector('.container');
//     for(let i =0; i<16; i++) {
//         let horizontal = document.createElement('div');
//         horizontal.setAttribute('class', 'horizontal');
//         container.appendChild(horizontal);
//         for (let j =0; j < 16; j++) {
//             let vertical = document.createElement('div');
//             vertical.setAttribute('class', 'vertical');
//             container.appendChild(vertical);
//         }
//     }
// }

function addElement() { 
let container = document.querySelector('.container');
    for (let i=0; i<16; i++) {
        for (let j=0; j<16; j++) { 
        let cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        container.appendChild(cell);
        }
    }
}