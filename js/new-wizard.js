'use strict';

(function () {
  window.newWizard = {
    createWizard: function (wizardsAmount) {
      var wizards = [];
      for (var i = 0; i < wizardsAmount; i++) {
        var wizardsName = window.wizardsData.names[window.utilities.getRandomElement(window.wizardsData.names)] + ' ' + window.wizardsData.lastName[window.utilities.getRandomElement(window.wizardsData.lastName)];
        var wizardsCoat = window.wizardsData.coatColor[window.utilities.getRandomElement(window.wizardsData.coatColor)];
        var wizardsEyes = window.wizardsData.eyesColor[window.utilities.getRandomElement(window.wizardsData.eyesColor)];
        var wizard = {
          name: wizardsName,
          coat: wizardsCoat,
          eyes: wizardsEyes
        };
        wizards.push(wizard);
      }
      return wizards;
    },
    cloneWizard: function (wizard) {
      var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

      var wizardElement = similarWizardTemplate.cloneNode(true);
      wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizard.coat;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyes;
      return wizardElement;
    },
    getWizardFragment: function (fragmentWizards) {
      var fragment = document.createDocumentFragment();
      for (var i = 0; i < fragmentWizards.length; i++) {
        fragment.appendChild(window.newWizard.cloneWizard(fragmentWizards[i]));
      }
      return fragment;
    },
  };
})();
