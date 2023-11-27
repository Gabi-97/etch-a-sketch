
document.addEventListener('DOMContentLoaded', addElement);

const btn = document.querySelector('.size');
let container = document.querySelector('.container');
btn.addEventListener('click', getUserInput);

//creating grid based on users input
function getUserInput() {
    container.innerHTML = '';
    const userInput = prompt('How many squares would you like?');
    if(userInput>100) {
      window.alert("The number is too big");
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
}
    const blackBtn = document.querySelector('.black');
    const rainbowBtn = document.querySelector('.rainbow');
    
    let color = '';
    blackBtn.addEventListener('click', (e) => {
        color = 'black';
    });

    rainbowBtn.addEventListener('click', (e) => {
        color = 'rainbow'
    });   

//color the squares depending on the mode selected
    function changeColor(event) {
        let currentCell = event.target;
        switch(color){
            case '':
                currentCell.style.backgroundColor = 'rgba(0, 0, 0, 0.21)';
                break;
            case 'black': 
                currentCell.style.backgroundColor = 'rgba(0, 0, 0, 1)';
                break;
            case 'rainbow':
               currentCell.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16); 
               break;
        } 
    }

// reset button - wipes the colors and resets the grid size
const resetBtn = document.querySelector('.reset');

resetBtn.addEventListener('click', (e) => {
    container.innerHTML = '';
    addElement();
});
        
        
  




