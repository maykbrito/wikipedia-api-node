const extractor = require('./extractor');
const terms = require('./terms');

module.exports = async content => {
  let wikipediaContent = {
    pageid: '',
    title: '',
    url: '',
    raw: '',
    summary: '',
    references: [],
    images: [],
  };

  try {
    wikipediaContent = { ...wikipediaContent, ...(await terms.get(content)) };
    content.wikipediaContent = {
      ...wikipediaContent,
      ...(await extractor.get(wikipediaContent)),
    };
  } catch (err) {
    console.log(err);
  }
};
