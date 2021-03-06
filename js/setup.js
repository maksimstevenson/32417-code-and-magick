'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
// Opening setup menu
var userSetting = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
// Finding template with data
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var lastName = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц', 'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var fireballColor = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

// Function for acquiring random element from an array
var getRandomElement = function (arr) {
  var randomElement = Math.floor(Math.random() * arr.length);
  return randomElement;
};
// Creates an array of objects(wizards)
var createWizard = function (wizardsAmount) {
  var wizards = [];
  for (var i = 0; i < wizardsAmount; i++) {
    var wizardsName = names[getRandomElement(names)] + ' ' + lastName[getRandomElement(lastName)];
    var wizardsCoat = coatColor[getRandomElement(coatColor)];
    var wizardsEyes = eyesColor[getRandomElement(eyesColor)];

    var wizard = {
      name: wizardsName,
      coat: wizardsCoat,
      eyes: wizardsEyes
    };
    wizards.push(wizard);
  }
  return wizards;
};


var cloneWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coat;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyes;
  return wizardElement;
};

var getWizardFragment = function (fragmentWizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < fragmentWizards.length; i++) {
    fragment.appendChild(cloneWizard(fragmentWizards[i]));
  }
  return fragment;
};

similarListElement.appendChild(getWizardFragment(createWizard(4)));
document.querySelector('.setup-similar').classList.remove('hidden');

// Event listeners
var usernameInput = document.querySelector('.setup-user-name');
var playerAppearance = document.querySelector('.setup-player');
var inputCoat = playerAppearance.querySelector('input[name= "coat-color"]');
var inputEyes = playerAppearance.querySelector('input[name= "eyes-color"]');
var inputFireball = playerAppearance.querySelector('input[name= "fireball-color"]');
var fireball = playerAppearance.querySelector('.setup-fireball-wrap');
var wizardCoat = playerAppearance.querySelector('.wizard-coat');
var wizardEyes = playerAppearance.querySelector('.wizard-eyes');
// Changes fireball color on click
var changeFireball = function () {
  var newFireball = fireballColor[getRandomElement(fireballColor)];
  fireball.style.background = newFireball;
  inputFireball.value = newFireball;
};

fireball.addEventListener('click', function (evt) {
  evt.preventDefault();
  changeFireball();
});
// Changes wizard's appearance on click
var changeColor = function (arr, el, input) {
  var newColor = arr[getRandomElement(arr)];
  el.style.fill = newColor;
  input.value = newColor;
};

wizardEyes.addEventListener('click', function (evt) {
  evt.preventDefault();
  changeColor(eyesColor, wizardEyes, inputEyes);
});

wizardCoat.addEventListener('click', function (evt) {
  evt.preventDefault();
  changeColor(coatColor, wizardCoat, inputCoat);
});
// Open/close events
var closePopupEsc = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  userSetting.classList.remove('hidden');
  document.addEventListener('keydown', closePopupEsc);
};

var closePopup = function () {
  userSetting.classList.add('hidden');
  document.addEventListener('keydown', closePopupEsc);
};

setupOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  openPopup();
});

setupClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});
// Form's validation
usernameInput.addEventListener('invalid', function () {
  if (usernameInput.validity.tooShort) {
    usernameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (usernameInput.validity.valueMissing) {
    usernameInput.setCustomValidity('Обязательное поле');
  } else {
    usernameInput.setCustomValidity('');
  }
});

// Drag-n-drop
// var setupDialogElement = document.querySelector('.setup');
// var dialogHandler = setupDialogElement.querySelector('.upload');


// dialogHandler.addEventListener('mousedown', function (evt) {
//   evt.preventDefault();

//   var startCoords = {
//     x: evt.clientX,
//     y: evt.clientY
//   };

//   var dragged = false;

//   var onMouseMove = function (moveEvt) {
//     moveEvt.preventDefault();
//     dragged = true;

//     var shift = {
//       x: startCoords.x - moveEvt.clientX,
//       y: startCoords.y - moveEvt.clientY
//     };

//     startCoords = {
//       x: moveEvt.clientX,
//       y: moveEvt.clientY
//     };

//     setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
//     setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';

//   };

//   var onMouseUp = function (upEvt) {
//     upEvt.preventDefault();

//     document.removeEventListener('mousemove', onMouseMove);
//     document.removeEventListener('mouseup', onMouseUp);

//     if (dragged) {
//       var onClickPreventDefault = function (deleteEvt) {
//         deleteEvt.preventDefault();
//         dialogHandler.removeEventListener('click', onClickPreventDefault);
//       };
//       dialogHandler.addEventListener('click', onClickPreventDefault);
//     }
//     var setupOpenElement = document.querySelector('.setup-open');
//     setupOpenElement.addEventListener('click', function () {
//       setupDialogElement.style.top = 80 + 'px';
//       setupDialogElement.style.left = 50 + '%';
//     });
//   };

//   document.addEventListener('mousemove', onMouseMove);
//   document.addEventListener('mouseup', onMouseUp);
// });

// // Drag artifacts back and forth

// var shopElement = document.querySelector('.setup-artifacts-shop');
// var draggedItem = null;

// shopElement.addEventListener('dragstart', function (evt) {
//   if (evt.target.tagName.toLowerCase() === 'img') {
//     draggedItem = evt.target;
//     evt.dataTransfer.setData('text/plain', evt.target.alt);
//   }
// });
// shopElement.addEventListener('dragover', function (evt) {
//   evt.preventDefault();
//   return false;
// });

// shopElement.addEventListener('drop', function (evt) {
//   evt.target.style.backgroundColor = '';
//   evt.target.appendChild(draggedItem);
// });


// shopElement.addEventListener('dragenter', function (evt) {
//   evt.target.style.backgroundColor = 'yelow';
//   evt.preventDefault();
// });

// shopElement.addEventListener('dragleave', function (evt) {
//   evt.target.style.backgroundColor = '';
//   evt.preventDefault();
// });

// var artifactsElement = document.querySelector('.setup-artifacts');

// artifactsElement.addEventListener('dragover', function (evt) {
//   evt.preventDefault();
//   return false;
// });

// artifactsElement.addEventListener('drop', function (evt) {
//   evt.target.style.backgroundColor = '';
//   evt.target.appendChild(draggedItem);
// });


// artifactsElement.addEventListener('dragenter', function (evt) {
//   evt.target.style.backgroundColor = 'yellow';
//   evt.preventDefault();
// });

// artifactsElement.addEventListener('dragleave', function (evt) {
//   evt.target.style.backgroundColor = '';
//   evt.preventDefault();
// });

// artifactsElement.addEventListener('dragstart', function (evt) {
//   if (evt.target.tagName.toLowerCase() === 'img') {
//     draggedItem = evt.target;
//     evt.dataTransfer.setData('text/plain', evt.target.alt);
//   }
// });
