// get a reference to the container div
const board = document.getElementById('board');
// set maximum size of the sketch pad(pixels)
const boardMaxHeight = 600;
const boardMaxWidth = 600;

function mkBoard (rows) {
    // create rows
    let rowSize = rows;
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
}

mkBoard(16);

// listen for click event on our button
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let input = prompt("How many squares should we draw?(max. 99)");
    if (input > 99) {
        alert("Too many squares!");
    } else if (input > 0 && input < 99) {
        // remove previus grid
        let squares = document.querySelectorAll('.white-square');
        squares.forEach(square => {
            square.remove();
        })
        let rows = document.querySelectorAll('.row')
        rows.forEach(row => {
            row.remove();
        })

        mkBoard(input);
    } else {
        alert("Try again.");
    }
})