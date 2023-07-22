// // export

export class Game {
    constructor(){
        this.board = this.createEmptyBoard();
    }
        createEmptyBoard() {
            return Array.from({ length: 9}, () => Array(9).fill(0));
        }
    }
