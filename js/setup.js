'use strict';
var characters = {
  name: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  lastname: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  coatcolor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyescolor: ['black', 'red', 'blue', 'yellow', 'green']
};

var userSetting = document.querySelector('.setup');
userSetting.classList.remove('hidden');


var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
// Function for acquiring random element from an object
var getRandomElement = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    var elementIndex = Math.floor(Math.random() * arr.length);
    var randomElement = arr[elementIndex];
  }
  return randomElement;
};

var cloneWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = getRandomElement(wizard.name) + ' ' + getRandomElement(wizard.lastname);
  wizardElement.querySelector('.wizard-coat').style.fill = getRandomElement(wizard.coatcolor);
  wizardElement.querySelector('.wizard-eyes').style.fill = getRandomElement(wizard.eyescolor);
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  fragment.appendChild(cloneWizard(characters));
}
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
