let currentPlayer = 'x';

const player = (() => {
    function changePlayer() {
        this.firstChild.setAttribute('class', currentPlayer)
        if (currentPlayer === 'x'){
        currentPlayer = 'o';
        }else{currentPlayer = 'x'}
        console.log('Turn of: ' + currentPlayer);
        
    }

    let cell = document.querySelectorAll('.cell')
    cell.forEach(element => element.addEventListener('click', changePlayer,{once: true}))
    
    return {
        cell,

    }
})();

 