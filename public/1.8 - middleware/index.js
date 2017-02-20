var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter, thunk));


function render() {
  var valueE1 = document.getElementById('value');
  var valueSum = document.getElementById('sum');
  var countStatus = document.getElementById('js-countStatus');
  var state = store.getState();
  valueE1.innerHTML = state.count.result;
  countStatus.innerHTML = state.count.loading ? "Is loading..." : "Is loaded";
  valueSum.value = state.sum;

  // IMGUR
  var imageStatus = document.getElementById("js-imagesStatus");
  var imageList = document.getElementById("js-imagesList");
  imageStatus.innerHTML = state.imgur.loading;
  var imageListHTML = "";
  for (var i = 0; i < state.imgur.data.length; i++) {
    imageListHTML += '<img src="' + state.imgur.data[i].link + '">';
  }
  imageList.innerHTML = imageListHTML;
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

document.getElementById('js-randomImagesButton').addEventListener('click', function () {
  store.dispatch(getRandomImages);
});
