const readline = require('readline-sync');
const wikipedia = require('./wikipedia');
const i18n = require('./i18n');

const start = async () => {
  const content = {
    searchTerm: readline.question(`${i18n('askForSearchTerm')}: `),
  };

  try {
    await wikipedia(content);
  } catch (err) {
    console.log(`${i18n('errorWaitingWikipediaContent')}:\n\n`, err);
  }

  console.log(content);
};

start();
