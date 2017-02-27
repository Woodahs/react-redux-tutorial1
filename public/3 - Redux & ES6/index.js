var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter, thunk));


var render = () => {
  var valueE1 = document.getElementById('value');
  var valueSum = document.getElementById('sum');
  var countStatus = document.getElementById('js-countStatus');
  const state = store.getState();
  valueE1.innerHTML = state.count.result;
  countStatus.innerHTML = state.count.loading ? "Is loading..." : "Is loaded";
  valueSum.value = state.sum;

  // IMGUR
  var imageStatus = document.getElementById("js-imagesStatus");
  var imageList = document.getElementById("js-imagesList");
  imageStatus.innerHTML = state.imgur.loading;
  var imageListHTML = "";
  for (let i = 0; i < state.imgur.data.length; i++) {
    imageListHTML += '<img src="' + state.imgur.data[i].link + '">';
  }
  imageList.innerHTML = imageListHTML;
};
render();

store.subscribe(render);

document.getElementById('decrement').addEventListener('click', () => {
  store.dispatch(decrease());
});

document.getElementById('increment').addEventListener('click', () => {
  store.dispatch(asyncIncrease);
});

document.getElementById('add').addEventListener('click', () => {
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  store.dispatch(getSum(a, b));
});

document.getElementById('js-randomImagesButton').addEventListener('click', () => {
  store.dispatch(getRandomImages);
});
