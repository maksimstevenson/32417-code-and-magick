'use strict';

// Opening setup menu
var userSetting = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
// Finding template with data
var similarListElement = document.querySelector('.setup-similar-list');

similarListElement.appendChild(window.newWizard.getWizardFragment(window.newWizard.createWizard(4)));
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
  var newFireball = window.wizardsData.fireballColor[window.utilities.getRandomElement(window.wizardsData.fireballColor)];
  fireball.style.background = newFireball;
  inputFireball.value = newFireball;
};

fireball.addEventListener('click', function (evt) {
  evt.preventDefault();
  changeFireball();
});
// Changes wizard's appearance on click
var changeColor = function (arr, el, input) {
  var newColor = arr[window.utilities.getRandomElement(arr)];
  el.style.fill = newColor;
  input.value = newColor;
};

wizardEyes.addEventListener('click', function (evt) {
  evt.preventDefault();
  changeColor(window.wizardsData.eyesColor, wizardEyes, inputEyes);
});

wizardCoat.addEventListener('click', function (evt) {
  evt.preventDefault();
  changeColor(window.wizardsData.coatColor, wizardCoat, inputCoat);
});
// Open/close events
var closePopupEsc = function (evt) {
  if (evt.keyCode === window.constants.ESC_KEYCODE) {
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
  if (evt.keyCode === window.constants.ENTER_KEYCODE) {
    closePopup();
  }
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === window.constants.ENTER_KEYCODE) {
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

