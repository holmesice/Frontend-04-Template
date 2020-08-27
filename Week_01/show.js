let pattern = [
        [2, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
    ]
    //棋盘格子，一维数组表示

function show() {
    let board = document.getElementById("board");
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.innerText = pattern[j][i] == 2 ? "X" :
                pattern[j][i] == 1 ? "O" : "";
            board.appendChild(cell);
        }
        board.appendChild(document.createElement("br"))
    }
}

show(pattern)