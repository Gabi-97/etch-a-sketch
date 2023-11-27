
document.addEventListener('DOMContentLoaded', addElement);

const btn = document.querySelector('button');
let container = document.querySelector('.container');
btn.addEventListener('click', getUserInput);

//creating grid based on users input
function getUserInput() {
    container.innerHTML = '';
    const userInput = prompt('How many squares would you like?');
    if(userInput>100) {
        console.log('too big number');
    }
    else {
        for(let i=0; i<userInput; i++) {
            for(let j=0; j<userInput; j++) {
                let cell = document.createElement('div');
                cell.setAttribute('class', 'cell');
                cell.style.width = 512/userInput + 'px';
                cell.style.height = 512/userInput + 'px';
                container.appendChild(cell);
            }
        } 
        colorGrids();
} 

}

//creating 16x16 grid
function addElement() { 
        for (let i=0; i<16; i++) {
            for (let j=0; j<16; j++) { 
            let cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            container.appendChild(cell);
            }
        }
        colorGrids();
}
//function to change the squares background on mose over
    function colorGrids() { 
    let cell = document.querySelectorAll('.cell');
    cell.forEach(cell => { 
    cell.addEventListener("mouseenter", changeColor);
        });
    function changeColor(event) {
        let currentCell = event.target;
        currentCell.style.backgroundColor = 'black';
    }   
}

//add warning if the input number is bigger than 100;
//add a reset button which resets the grid size to the original size
//randomize the color 

