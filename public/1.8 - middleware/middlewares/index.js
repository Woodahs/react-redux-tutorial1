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
      } catch (err) {
        console.group('crashReporter');
        console.log('error happen with action: ', action);
        console.error(err);
        console.group('crashReporter');
      }
    }
  }
};

const thunk = function (store) {
  return function (next) {
    return function (action) {
      if (typeof action === 'function') {
        action(store.dispatch, store.getState());
      } else {
        next(action);
      }
    }
  }
};
