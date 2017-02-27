// middleware
const logger = store => next => action => {
  console.log("start");
  next(action);
  console.log("end");
};

// second middleware
const crashReporter = store => next => action => {
  try {
    next(action);
  } catch (err) {
    console.group('crashReporter');
    console.log('error happen with action: ', action);
    console.error(err);
    console.group('crashReporter');
  }
};

const thunk = store => next => action => {
  if (typeof action === 'function') {
    action(store.dispatch, store.getState());
  } else {
    next(action);
  }
};
