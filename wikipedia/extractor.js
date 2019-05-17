const { fetchContent, fetchImageUrl } = require('./api');
const i18n = require('../i18n');

const getImageUrl = async imageTitle => {
  try {
    const { query } = await fetchImageUrl(imageTitle);
    const [IamNotUsingThis, { imageinfo }] = Object.entries(query.pages)[0];
    return imageinfo[0].url;
  } catch (err) {
    console.log(`${i18n('errorFetchingImage')}:\n\n`, err);
  }
};

const get = async sourceContent => {
  try {
    const { query } = await fetchContent(sourceContent.title);
    const [pageId, { title, extract, images, extlinks }] = Object.entries(
      query.pages
    )[0];

    console.log(`${i18n('fetchingImages')}...`);

    const imagesUrls = [];
    for (const image of images) {
      imagesUrls.push(await getImageUrl(image.title));
    }

    return {
      pageid: pageId,
      title,
      raw: extract,
      summary: extract.split('\n\n\n')[0],
      references: extlinks ? extlinks.map(link => link['*']) : [],
      images: imagesUrls,
    };
  } catch (err) {
    console.log(`${i18n('errorFetchingContent')}:\n\n`, err);
  }
};

module.exports = {
  get,
};
