'use strict';

(function () {
  window.utilities = {

    renderCloud: function (ctx, x, y, height, width, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
    },
    renderText: function (ctx, str, x, y) {
      ctx.fillStyle = '#17191b';
      ctx.font = '16px PT Mono';
      ctx.textBaseLine = 'hanging';
      ctx.fillText(str, x, y);
    },
    getMaxElement: function (arr) {
      var maxTime = arr[0];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxTime) {
          maxTime = arr[i];
        }
      }
      return maxTime;
    },
    getRandomElement: function (arr) {
      var randomElement = Math.floor(Math.random() * arr.length);
      return randomElement;
    },
  };
})();
