import { Game, Player } from './../src/sudoku.js'

describe ('Game', () => { 

    let game;
    beforeEach(() => {
        game = new Game();
    });

    test ('It should create new board with zeros', () => {
        expect(game.board).toEqual([[0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                    [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                    [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                    [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                    [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                    [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                    [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                    [0, 0, 0, 0, 0, 0, 0, 0, 0], 
                                    [0, 0, 0, 0, 0, 0, 0, 0, 0]])
    });

    

    test ('It should place a number on the board', () => {
        game.placeNumber(0, 0, 1);
        expect(game.board[0][0]).toEqual(1);
    });
})