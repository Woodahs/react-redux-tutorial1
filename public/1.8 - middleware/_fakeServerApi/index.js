var _fakeServerApi = {
  increaseCount: function (currentCount, cb) {
    "use strict";
    setTimeout(function () {
      cb(currentCount + 1);
    }, 5000)
  }
};
