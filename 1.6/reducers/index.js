function combineReducer(currentState, action) { //REDUCER
    var nextState = Object.assign({}, currentState);

    nextState = {
        count: counter(nextState.count, action),
        sum: sum(nextState.sum, action)
    };

    return nextState;
}
