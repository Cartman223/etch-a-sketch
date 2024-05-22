// get a reference to the container div
const board = document.getElementById('board');
// set maximum size of the sketch pad(pixels)
const boardMaxHeight = 600;
const boardMaxWidth = 600;

// create rows
let rowSize = 16;
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
        cell[k].style.width = boardMaxWidth / rowSize + "px";
        cell[k].style.height = boardMaxHeight / rowSize + "px";
    }
    
}

// get reference to our squares using query selector
let squares = document.querySelectorAll('.white-square');

// add eventListener iteratively on all squares on the board
squares.forEach(square => {
    square.addEventListener('mouseover', () => square.classList.add('black-square'));
    square.addEventListener('click', () => square.classList.remove('black-square'));
});

// listen for click event on our button
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {

    let input = prompt('How many squares per side?(max 99.)').toString();
    
    // remove previus grid
    let squares = document.querySelectorAll('.white-square');
    squares.forEach(square => {
        square.remove();
    })
    let rows = document.querySelectorAll('.row')
    rows.forEach(row => {
        row.remove();
    })

    // create rows
    let rowSize = input;
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
            cell[k].style.width = boardMaxWidth / rowSize + "px";
            cell[k].style.height = boardMaxHeight / rowSize + "px";
        }   
    }
    squares = document.querySelectorAll('.white-square');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => square.classList.add('black-square'));
        square.addEventListener('click', () => square.classList.remove('black-square'));
    })
})
