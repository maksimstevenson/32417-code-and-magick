'use strict';
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 270;
var CLOUD_HEIGHT = 420;
var HISTOGRAM_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var GAP = 50;
var FONT_GAP = 16;
var renderCloud = function (ctx, x, y, height, width, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

var renderText = function (ctx, str, x, y) {
  ctx.fillStyle = '#17191b';
  ctx.font = '16px PT Mono';
  ctx.textBaseLine = 'hanging';
  ctx.fillText(str, x, y);
};

var getMaxElement = function (arr) {
  var maxTime = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxTime) {
      maxTime = arr[i];
    }
  }
  return maxTime;
};

// var nameColor = function () {
//   var color = '';
//   for (var i = 0; i < names.length; i++) {
//     if (names[i] === 'Вы') {
//       color = 'rgba(255, 0, 0, 1)';
//     } else {
//       color = 'rgba(255, 0, 0, Math.random())';
//     }
//   }
//   return color;
// };

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0,0,0,0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#ff0');
  renderText(ctx, 'Ура вы победили!', 140, 40);
  renderText(ctx, 'Список результатов:', 140, 60);
  var maxTime = getMaxElement(times);
  // message
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#121314';
  // Drawing histogram
  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + HISTOGRAM_HEIGHT) * i);
    ctx.fillRect(CLOUD_X + GAP, CLOUD_Y + GAP + (GAP + HISTOGRAM_HEIGHT) * i, COLUMN_WIDTH, (HISTOGRAM_HEIGHT * times[i]) / maxTime);
  }
};
