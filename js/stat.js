'use strict';
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var CLOUD_WIDTH = 270;
var CLOUD_HEIGHT = 420;
var TEXT_X = 140;
var TEXT_Y = 40;
var HISTOGRAM_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_GAP = 50;
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

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0,0,0,0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#fff');
  renderText(ctx, 'Ура вы победили!', TEXT_X, TEXT_Y);
  renderText(ctx, 'Список результатов:', TEXT_X, TEXT_Y + GAP * 2);
  var maxTime = getMaxElement(times);
  // message
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#121314';
  // Drawing histogram
  for (var i = 0; i < names.length; i++) {
    var COL_HEIGHT = HISTOGRAM_HEIGHT * times[i] / maxTime;
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + (Math.random()) + ')';
    }
    ctx.fillRect(CLOUD_X + COLUMN_GAP * (i + 1) + COLUMN_WIDTH * i, CLOUD_HEIGHT - COL_HEIGHT - COLUMN_GAP - FONT_GAP - 100, COLUMN_WIDTH, COL_HEIGHT);
    ctx.fillStyle = '#000';
    ctx.textBaseLine = 'hanging';
    ctx.fillText(Math.floor(Math.random() + times[i]), CLOUD_X + COLUMN_GAP * (i + 1) + COLUMN_WIDTH * i, CLOUD_HEIGHT - COLUMN_GAP * 2 - FONT_GAP - COL_HEIGHT - 70);
    ctx.fillText(names[i], CLOUD_X + COLUMN_GAP * (i + 1) + COLUMN_WIDTH * i, CLOUD_HEIGHT - HISTOGRAM_HEIGHT);
  }
};
