var store = Redux.createStore(combineReducer);

var valueE1 = document.getElementById('value');
var valueSum = document.getElementById('sum');

function render() {
    var state = store.getState();
    valueE1.innerHTML = state.count;
    valueSum.value = state.sum;
}
render();

store.subscribe(render);

document.getElementById('decrement').addEventListener('click', function () {
    var action = {type: 'DECREMENT'}; // Note 2.1
    store.dispatch(action);
});

document.getElementById('increment').addEventListener('click', function () {
    setTimeout(function increment() {
        var action = {type: 'INCREMENT'};
        store.dispatch(action);
    }, 1000);
});

document.getElementById('add').addEventListener('click', function () {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    store.dispatch(getSum(a, b));
});