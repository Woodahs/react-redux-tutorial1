import $ from 'jquery';

export const decrease = () => ({type: 'DECREMENT'});

export const getSum = (a, b) => ({
  type: 'SUM', a, b
});

export const getRandomImages = (dispatch, state) => {
  const imgurAPI = "https://api.imgur.com/3/gallery/random/random/1";
  dispatch({type: "IMGUR_LOADING"});
  $.getJSON(imgurAPI).done(function (data) {
    dispatch({type: 'SHOW_IMGUR_IMAGES', data: data.data})
  })
};
