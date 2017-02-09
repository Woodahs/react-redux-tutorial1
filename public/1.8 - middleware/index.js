var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter, thunk));

var valueE1 = document.getElementById('value');
var valueSum = document.getElementById('sum');
var countStatus = document.getElementById('js-countStatus');

function render() {
  var state = store.getState();
  valueE1.innerHTML = state.count.result;
  countStatus.innerHTML = state.count.loading ? "Is loading..." : "Is loaded";
  valueSum.value = state.sum;
}
render();

store.subscribe(render);

document.getElementById('decrement').addEventListener('click', function () {
  store.dispatch(decrease());
});

document.getElementById('increment').addEventListener('click', function () {
  store.dispatch(asyncIncrease);
});

document.getElementById('add').addEventListener('click', function () {
  var a = document.getElementById('a').value;
  var b = document.getElementById('b').value;
  store.dispatch(getSum(a, b));
});
