let currentPlayer = 'x';
let turn = 0;

const player = (() => {
    
    function run() {
        let symbol = this.firstChild
        turn ++;
        symbol.classList.add(currentPlayer)
        if (currentPlayer === 'x'){
        currentPlayer = 'o';
        }else{currentPlayer = 'x'}
        console.log('Turn of: ' + currentPlayer);
        that=this
        boardSelect()
        checkWin()
        return {symbol}
    }

    let cell = document.querySelectorAll('.cell')
    cell.forEach(element => element.addEventListener('click', run,{once: true}))
    
    return {
        cell,
        run
    }
})();

const board = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2],
]

let boardX = [];
let boardO = [];

function boardSelect () {
    symbol = event.target.firstChild
    if (symbol.classList.contains('x')){
    boardX.push(dom.symbol.indexOf(symbol))
    } else {
        boardO.push(dom.symbol.indexOf(symbol))
    }
}

const dom = {
    symbol : Array.from(document.querySelectorAll('.symbol')),
}

function checkWin() {

    //Order each player cells by value
    boardX.sort();
    boardO.sort();
    let boardTie = boardX.length + boardO.length

    //Compares both players cells with winning combinations
    board.forEach(element => {        
        if(element.every(i => boardX.includes(i))){
            alert('player X won')
        }else if(element.every(i => boardO.includes(i))){
            alert( 'player O won')
        // Checks for a Tie, if none won and board is full
        }else if((boardTie) === 9){
            alert('its a tie')
        }
    })
}