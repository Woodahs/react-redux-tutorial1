// middleware
const logger = function (store) {
  return function (next) {
    return function (action) {
      console.log("start");
      next(action);
      console.log("end");
    }
  }
};

// second middleware
const crashReporter = function (store) {
  return function (next) {
    return function (action) {
      try {
        next(action);
      } catch(err) {
        console.group('crashReporter');
        console.log('error happen with action: ', action);
        console.error(err);
        console.group('crashReporter');
      }
    }
  }
};

var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter));

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
  store.dispatch(decrease());
});

document.getElementById('increment').addEventListener('click', function () {
  setTimeout(function () {
    store.dispatch(increase());
  }, 1000);
});

document.getElementById('add').addEventListener('click', function () {
  var a = document.getElementById('a').value;
  var b = document.getElementById('b').value;
  store.dispatch(getSum(a, b));
});
