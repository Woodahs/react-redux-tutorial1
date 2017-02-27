const decrease = () => ({type: 'DECREMENT'});

const increase = () => ({type: 'INCREMENT'});

const getSum = (a, b) => ({
  type: 'SUM', a: a, b: b
});

const asyncIncrease = (dispatch, state) => {
  dispatch({type: "INCREMENT_LOADING"});
  _fakeServerApi.increaseCount(state.count.result,
    () => {
      dispatch({type: 'INCREMENT'})
    });
};

const getRandomImages = (dispatch, state) => {
  const imgurAPI = "https://api.imgur.com/3/gallery/random/random/1";
  dispatch({type: "IMGUR_LOADING"});
  $.getJSON(imgurAPI).done(function (data) {
    dispatch({type: 'SHOW_IMGUR_IMAGES', data: data.data})
  })
};
