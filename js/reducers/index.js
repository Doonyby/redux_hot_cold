var actions = require('../actions/index');

var initialState = {
    number: Math.floor((Math.random() * 100) + 1),
    guess: null,
    guesses: [],
    win: false,
    result: '',
    count: 0,
    fewestGuesses: null
};

var hotColdReducer = function(state, action) {
    var nextState = Object.assign({}, state || initialState)

    if (action.type === actions.GUESS_NUMBER) {
        nextState.guess = action.guess;
    }

    else if (action.type === actions.COMPARE_GUESSES) {
        if (state.guesses.indexOf(parseInt(state.guess)) == -1) {
            nextState.guesses = nextState.guesses.concat(parseInt(state.guess));
        } else {
            console.log('num exists already');
        }
    }

    else if (action.type === actions.CHECK_CORRECT) {
        if (state.number == state.guess) {
            nextState.win = true;
        }
    }

    else if (action.type === actions.EVAL_GUESS) {
        // nextState.result = action.result;
        var diff = Math.abs(state.guess - state.number);
        if (state.guess > 100) {
            nextState.error = true; 
        }
        else if (state.guess == state.number) {
            nextState.result = 'You Win!!!'
        }
        else if (diff > 20) {
            nextState.result = 'Cold';
        }
        else if (diff > 10) {
            nextState.result = 'Warm';
        }
        else if (diff > 5) {
            nextState.result = 'Hot';
        }
        else {
            nextState.result = 'Fire';
        }
    }

    else if (action.type === actions.COUNT_GUESS) {
        nextState.count++;
    }
    
    else if (action.type === actions.RESET_GAME) {
       nextState.guess = null;
       nextState.guesses = [];
       nextState.win = false;
       nextState.result = '';
       nextState.number = Math.floor((Math.random() * 100) + 1);
       nextState.count = 0;
    }

    return nextState;
};

exports.hotColdReducer = hotColdReducer;
