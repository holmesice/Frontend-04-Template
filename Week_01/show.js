let pattern = [
        [2, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
    ]
    //棋盘格子，一维数组表示

let color = 1;

function show() {
    let board = document.getElementById("board");

    board.innerHTML = "";

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.innerText =
                pattern[j][i] == 2 ? "X" :
                pattern[j][i] == 1 ? "O" : "";
            cell.addEventListener("click", () => move(j, i));
            board.appendChild(cell);
        }
        board.appendChild(document.createElement("br"))
    }
}

function move(x, y) {
    pattern[x][y] = color;
    if (check()) {
        alert(color == 2 ? "X is winner!" : "O is winner!");
    }
    color = 3 - color;
    show()
}

function check() {
    for (let i = 0; i < 3; i++) {
        let win = true;
        for (let j = 0; j < 3; j++) {
            if (pattern[i][j] !== color) {
                win = false;
            }
        }
        if (win) {
            return true;
        }
    }
    for (let i = 0; i < 3; i++) {
        let win = true;
        for (let j = 0; j < 3; j++) {
            if (pattern[j][i] !== color) {
                win = false;
            }
        }
        if (win) {
            return true;
        }
    } {
        let win = true;
        for (j = 0; j < 3; j++) {
            if (pattern[j][2 - j] !== color) {
                win = false;
            }
        }
        if (win)
            return true;
    } {
        let win = true;
        for (j = 0; j < 3; j++) {
            if (pattern[j][j] !== color) {
                win = false;
            }
        }
        if (win)
            return true;
    }
}

show(pattern)