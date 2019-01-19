'use strict';


window.renderStatistics = function (ctx, names, times) {
  window.utilities.renderCloud(ctx, window.constants.CLOUD_X + window.constants.GAP, window.constants.CLOUD_Y + window.constants.GAP, window.constants.CLOUD_WIDTH, window.constants.CLOUD_HEIGHT, 'rgba(0,0,0,0.7)');
  window.utilities.renderCloud(ctx, window.constants.CLOUD_X, window.constants.CLOUD_Y, window.constants.CLOUD_WIDTH, window.constants.CLOUD_HEIGHT, '#fff');
  window.utilities.renderText(ctx, 'Ура вы победили!', window.constants.TEXT_X, window.constants.TEXT_Y);
  window.utilities.renderText(ctx, 'Список результатов:', window.constants.TEXT_X, window.constants.TEXT_Y + window.constants.GAP * 2);
  var maxTime = window.utilities.getMaxElement(times);
  // message
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#121314';
  // Drawing histogram
  for (var i = 0; i < names.length; i++) {
    var COL_HEIGHT = window.constants.HISTOGRAM_HEIGHT * times[i] / maxTime;
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + (Math.random()) + ')';
    }
    ctx.fillRect(window.constants.CLOUD_X + window.constants.COLUMN_GAP * (i + 1) + window.constants.COLUMN_WIDTH * i, window.constants.CLOUD_HEIGHT - COL_HEIGHT - window.constants.COLUMN_GAP - window.constants.FONT_GAP - 100, window.constants.COLUMN_WIDTH, COL_HEIGHT);
    ctx.fillStyle = '#000';
    ctx.textBaseLine = 'hanging';
    ctx.fillText(Math.floor(Math.random() + times[i]), window.constants.CLOUD_X + window.constants.COLUMN_GAP * (i + 1) + window.constants.COLUMN_WIDTH * i, window.constants.CLOUD_HEIGHT - window.constants.COLUMN_GAP * 2 - window.constants.FONT_GAP - COL_HEIGHT - 70);
    ctx.fillText(names[i], window.constants.CLOUD_X + window.constants.COLUMN_GAP * (i + 1) + window.constants.COLUMN_WIDTH * i, window.constants.CLOUD_HEIGHT - window.constants.HISTOGRAM_HEIGHT);
  }
};
