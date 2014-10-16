//function findLocation() {

var move = {turn: "O", colors: "red"}

function makeMove() {
    'use strict';
    if (move.turn == "O") {
        move.turn = "X";
        move.colors = "blue";
    } else {
        move.turn = "O";
        move.colors = "red";
    }
    
    if (this.innerHTML == "") {
        this.innerHTML = move.turn;
        this.className = move.colors;
        checkWinner();
    }
}

function checkWinner() {
    'use strict';
    var row = [];
    var table = document.getElementById("board");
    
    // check if anyone won horizontally

    if (table != null) {
        for (var r = 0; r < table.rows.length; r++) {
            for (var c = 0; c < table.rows[r].cells.length; c++) {
                row[c] =table.rows[r].cells[c].innerHTML;
            }
            if (row[0] != "" && row[1] != "" && row[2] != "") {
                if (row[0] == row[1] && row[0] == row[2]) {
                    alert(row[0] + " is the winner!")
                    init();
                }
            }
        }
    }

    // check if anyone won vertically
   if (table != null) {
        for (var r = 0; r < table.rows.length; r++) {
            for (var c = 0; c < table.rows[r].cells.length; c++) {
                row[c] =table.rows[c].cells[r].innerHTML;
            }
            if (row[0] != "") {
                if (row[0] == row[1] && row[0] == row[2]) {
                    alert(row[0] + " is the winner!")
                    init();
                }
            }
        }
    }
    
    //reset row to check diagonal
    var row = [];
    
    //check if anyone won diagonally
    if (table != null) {
        for (var r = 0; r < table.rows.length; r++) {
            for (var c = 0; c < table.rows[r].cells.length; c++) {
                row.push(table.rows[r].cells[c].innerHTML);
            }
            if (row[0] != "") {
                if (row[0] == row[4] && row[0] == row[8]) {
                    alert(row[0] + " is the winner!")
                    init();
                }
            }    
            if (row[2] != "") {
                if (row[2] == row[4] && row[2] == row[6]) {
                    alert(row[2] + " is the winner!")
                    init();
                }
            }
        }
    }
}

function init() {
    'use strict';
    document.getElementById('reset').onclick = init;
    var table = document.getElementById("board");
    move.turn = "O";
    move.colors = "red";

    if (table != null) {
        for (var i = 0; i < table.rows.length; i++) {
            for (var j = 0; j < table.rows[i].cells.length; j++) {
                table.rows[i].cells[j].onclick = makeMove;
                table.rows[i].cells[j].className = "default";
                table.rows[i].cells[j].innerHTML = "";
            }
        };
    };
} // End of init() function.

window.onload = init;