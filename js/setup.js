'use strict';
// Opening setup menu
var userSetting = document.querySelector('.setup');
userSetting.classList.remove('hidden');
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
