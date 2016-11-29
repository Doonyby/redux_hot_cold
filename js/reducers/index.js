var actions = require('../actions/index');

var initialRepositoryState = {
    number: Math.floor((Math.random() * 100) + 1),
    guess: null,
    guesses: [],
    win: false,
    status: '',
    count: 0
};

var hotColdReducer = function(state, action) {
    var nextState = Object.assign({}, state || initialRepositoryState)

    if (action.type === actions.GUESS_NUMBER) {
        nextState.guess = action.guess;
    }

    else if (action.type === actions.COMPARE_GUESSES) {
        if (state.guesses.indexOf(state.guess) === -1) {
            nextState.guesses.concat(action.guess);
        }
    }

    else if (action.type === actions.CHECK_CORRECT) {
        if (state.number === state.guess) {
            nextState.win = true;
        }
    }

    else if (action.type === actions.EVAL_GUESS) {
        var diff = Math.abs(state.guess - state.number);
        if (diff > 20) {
            nextState.status = 'cold';
        }
        else if (diff > 19) {
            nextState.status = 'warm';
        }
        else if (diff > 9) {
            nextState.status = 'hot';
        }
        else if (diff > 4) {
            nextState.status = 'very hot';
        }
        else {
            nextState.status = 'fire';
        }
    }

    else if (action.type === actions.COUNT_GUESS) {
        nextState.count++;
    }
    
    else if (action.type === actions.RESET_GAME) {
       nextState.guess = null;
       nextState.guesses = [];
       nextState.win = false;
       nextState.status = '';
       nextState.number = Math.floor((Math.random() * 100) + 1);
    }

    return nextState;
};

exports.hotColdReducer = hotColdReducer;