const language = require('./language.json');

const i18n = key => {
  const selectedLang = language[language.lang];

  const checkIfItHasStringTranslated = () =>
    typeof selectedLang !== 'undefined' &&
    selectedLang !== '' &&
    (typeof selectedLang[key] !== 'undefined' && selectedLang[key] !== '');

  return checkIfItHasStringTranslated() ? selectedLang[key] : language.en[key];
};

module.exports = i18n;
