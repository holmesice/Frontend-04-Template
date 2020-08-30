let pattern = [
        [0, 0, 0],
        [0, 0, 0],
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
            cell.addEventListener("click", () => userMove(j, i));
            board.appendChild(cell);
        }
        board.appendChild(document.createElement("br"))
    }

}

function userMove(x, y) {
    pattern[x][y] = color;
    if (check(pattern, color)) {
        alert(color == 2 ? "X is winner!" : "O is winner!");
    }
    color = 3 - color;
    console.log(bestChice(pattern, color));
    show();
    computerMove();
    if (willWin(pattern, color)) {
        console.log(color == 2 ? "X will winner!" : "O will winner!")
    }
}

function computerMove() {
    let choice = bestChice(pattern, color);
    if (choice.point) {
        pattern[choice.point[0]][choice.point[1]] = color;
    }
    if (check(pattern, color)) {
        alert(color == 2 ? "X is winner!" : "O is winner!");
    }
    color = 3 - color;
    show();
}

function check(pattern, color) {
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

function clone(pattern) {
    //深拷贝
    return JSON.parse(JSON.stringify(pattern))
}

function willWin(pattern, color) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (pattern[i][j]) {
                continue;
            }
            let tmp = clone(pattern);
            tmp[i][j] = color;
            if (check(tmp, color)) {
                return [i, j];
            }
        }
    }
    return null;
}

function bestChice(pattern, color) {
    let p;
    if (p = willWin(pattern, color)) {
        return {
            point: p,
            result: 1
        }
    }
    let result = -2
    let point = null;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (pattern[i][j])
                continue;
            let tmp = clone(pattern);
            tmp[i][j] = color;
            let r = bestChice(tmp, 3 - color).result;

            if (-r > result) {
                result = -r;
                point = [i, j]
            }
        }
    }
    return {
        point: point,
        result: point ? result : 0
    }
}

show(pattern)
console.log(bestChice(pattern, color));