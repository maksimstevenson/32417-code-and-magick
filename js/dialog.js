'use strict';

var setupDialogElement = document.querySelector('.setup');
var dialogHandler = setupDialogElement.querySelector('.upload');


dialogHandler.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  var dragged = false;

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();
    dragged = true;

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
    setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';

  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    if (dragged) {
      var onClickPreventDefault = function (deleteEvt) {
        deleteEvt.preventDefault();
        dialogHandler.removeEventListener('click', onClickPreventDefault);
      };
      dialogHandler.addEventListener('click', onClickPreventDefault);
    }
    var setupOpenElement = document.querySelector('.setup-open');
    setupOpenElement.addEventListener('click', function () {
      setupDialogElement.style.top = 80 + 'px';
      setupDialogElement.style.left = 50 + '%';
    });
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

// Drag artifacts back and forth

var shopElement = document.querySelector('.setup-artifacts-shop');
var draggedItem = null;

shopElement.addEventListener('dragstart', function (evt) {
  if (evt.target.tagName.toLowerCase() === 'img') {
    draggedItem = evt.target;
    evt.dataTransfer.setData('text/plain', evt.target.alt);
  }
});
shopElement.addEventListener('dragover', function (evt) {
  evt.preventDefault();
  return false;
});

shopElement.addEventListener('drop', function (evt) {
  evt.target.style.backgroundColor = '';
  evt.target.appendChild(draggedItem);
});


shopElement.addEventListener('dragenter', function (evt) {
  evt.target.style.backgroundColor = 'yelow';
  evt.preventDefault();
});

shopElement.addEventListener('dragleave', function (evt) {
  evt.target.style.backgroundColor = '';
  evt.preventDefault();
});

var artifactsElement = document.querySelector('.setup-artifacts');

artifactsElement.addEventListener('dragover', function (evt) {
  evt.preventDefault();
  return false;
});

artifactsElement.addEventListener('drop', function (evt) {
  evt.target.style.backgroundColor = '';
  evt.target.appendChild(draggedItem);
});


artifactsElement.addEventListener('dragenter', function (evt) {
  evt.target.style.backgroundColor = 'yellow';
  evt.preventDefault();
});

artifactsElement.addEventListener('dragleave', function (evt) {
  evt.target.style.backgroundColor = '';
  evt.preventDefault();
});

artifactsElement.addEventListener('dragstart', function (evt) {
  if (evt.target.tagName.toLowerCase() === 'img') {
    draggedItem = evt.target;
    evt.dataTransfer.setData('text/plain', evt.target.alt);
  }
});
