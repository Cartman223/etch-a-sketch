// get a reference to the container div
const board = document.getElementById('board');
// set maximum size of the sketch pad(pixels)
const boardMaxSize = 920;

// create rows
const rowSize = 16;
for(r = 0; r < rowSize; r++) {
    let row = document.createElement('div');
    row.classList.toggle('row');
    board.appendChild(row);
    // create columns
    const columnSize = rowSize;
    for(c = 0; c < columnSize; c++) {
        let column = document.createElement('div');
        row.appendChild(column);
        column.classList.toggle('white-square');
    }
    // dynamically alter the size of squares to fit the dimensions of the board
    const cell = document.getElementsByClassName('white-square');
    for(k = 0; k < cell.length; k++) {
        cell[k].style.width = boardMaxSize / rowSize + "px";
        cell[k].style.height = boardMaxSize / rowSize + "px";
    }
    
}


// get reference to our squares using query selector
let squares = document.querySelectorAll('.white-square');

// add eventListener iteratively on all squares on the board
squares.forEach(square => {
    square.addEventListener('mouseover', () => square.classList.add('black-square'));
    square.addEventListener('click', () => square.classList.remove('black-square'));
});
