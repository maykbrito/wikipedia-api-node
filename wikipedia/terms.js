const readline = require('readline-sync');
const unidecode = require('unidecode');
const { fetchTerms } = require('./api');
const i18n = require('../i18n');

const exitProgram = message => {
  console.log(message, `\n\n ${i18n('exitWithDefault')}...`);
  process.exit();
};

const doSearch = async content => {
  try {
    const [
      searchedTerm,
      optionsTerms,
      optionsSummary,
      optionsUrls,
    ] = await fetchTerms(content.searchTerm);

    if (optionsTerms.length === 0)
      exitProgram(`${i18n('exitWithEmptyResults')}`);

    return { optionsTerms, optionsUrls };
  } catch (err) {
    console.log(`${i18n('errorFetchingTerms')}: `, err);
  }
};

const getTermIndex = async optionsTerms =>
  readline.keyInSelect(optionsTerms, `${i18n('confirmOrSelectSearchTerm')}:`);

const getIndexFromOptionsTerms = async optionsTerms => {
  const decodedOptionsTerms = [...optionsTerms].map(term => unidecode(term));
  const selectedIndex = await getTermIndex(decodedOptionsTerms);

  return selectedIndex === -1
    ? exitProgram(`${i18n('exitWithKeyNotSelected')}`)
    : selectedIndex;
};

const get = async content => {
  const { optionsUrls, optionsTerms } = await doSearch(content);
  const selectedIndex = await getIndexFromOptionsTerms(optionsTerms);

  return {
    url: optionsUrls[selectedIndex],
    title: optionsTerms[selectedIndex],
  };
};

module.exports = {
  get,
};
