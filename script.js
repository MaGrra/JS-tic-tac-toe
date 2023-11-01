console.log('hi')

//factory
const player = (sign) => {
    const getSign = () => sign;

    return { getSign };
};


//modul
const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];

    const setField = (index, sign) => {
        if (index > board.length) return;
        board[index] = sign;
    };

    const getField = (index) => {
        if (index > board.length) return;
        return board[index];
    };

    const reset = () => {
    for (let i = 0; i < board.length; i++) {
        board[i] = "";
    }
    };

    return { setField, getField, reset };
})();

const displayController = (() => {
    const fieldElements = document.querySelectorAll('.field');
    const messageElement = document.querySelector('message');
    const restartElement = document.querySelector('restart-btn')
})