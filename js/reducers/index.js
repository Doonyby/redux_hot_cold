var actions = require('../actions/index');

var initialRepositoryState = {
    number: null,
    guess: null,
    guesses: [],
    win: false,
    status: ''
};

var hotColdReducer = function(state, action) {
    state = state || initialRepositoryState;
    if (action.type === actions.GEN_NUMBER) {
        return state.number = Math.floor((Math.random() * 100) + 1);
    }

    else if (action.type === actions.GUESS_NUMBER) {
        return state.guess = action.guess;
    }

    else if (action.type === actions.COMPARE_GUESSES) {
        if (state.guesses.indexOf(action.guess) === -1) {
            return state.guesses.concat(action.guess);
        }
    }

    else if (action.type === actions.CHECK_CORRECT) {
        if (state.number === state.guess) {
            return state.win = true;
        }
    }

    else if (action.type === actions.EVAL_GUESS) {
        var diff = Math.abs(guess - number);
        if (diff > 20) {
            state.status = 'cold';
        }
        else if (diff > 19) {
            state.status = 'warm';
        }
        else if (diff > 9) {
            state.status = 'hot';
        }
        else if (diff > 4) {
            state.status = 'very hot';
        }
        else {
            state.status = 'fire';
        }
    }
    
    else if (action.type === actions.RESET_GAME) {
       state.guess = null;
       state.guesses = [];
       state.win = false;
       state.status = '';
       state.number = null;
    }

    return state;
};

exports.hotColdReducer = hotColdReducer;