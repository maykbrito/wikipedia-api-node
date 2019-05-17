# A Node.js Bot that search for content with Wikipedia's Api

This bot will prompt you asking for a keyword, then it will search and fetch content from Wikipedia.

---

## How to start

1. Clone this repository, navigate do repo folder and Install it.

```sh
git clone https://github.com/maykbrito/wikipedia-api-node.git && cd wikipedia-api-node && npm install
```

2. Once it is installed, run with

```sh
npm run start
```

You will see an interactive prompt to help you search your content.

![Imgur](https://i.imgur.com/leSq4aT.gifv)

---

## Language & Translations

By default language for search in Wikipedia is Portuguese. You can change it by opening `./language.json` and change `"lang":"pt"` to your own language.

**Note: If it's not English you will need to provide your own translation.**

For example: If your language is French,
Just copy this snippet bellow, and start your translation.

```json
"fr": {
    "askForSearchTerm": "Type your search term",
    "confirmOrSelectSearchTerm": "Confirm Your Term Search or Select One",
    "fetchingImages": "Fetching Images",
    "fetchingContent": "Fetching Content",
    "errorWaitingWikipediaContent": "Error waiting for content",
    "errorFetchingImage": "Could Not Fetch Image Url From Wikipedia",
    "errorFetchingContent": "Could Not Fetch Content From Wikipedia",
    "errorFetchingTerms": "Could Not Fetch Terms From Wikipedia",
    "exitWithDefault": "Exiting Program",
    "exitWithEmptyResults": "Your search term don't return any result",
    "exitWithKeyNotSelected": "You don't selected any key"
}
```

And change bot to your language 

```json
"lang":"fr"
```

If you want to, just change the language like above and Wikipedia will search in that language

FYI:

- In case of you don't provide any translation, this bot will be prompted in English

- To select a language follow this pattern* <http://www.lingoes.net/en/translator/langcode.htm>

- Wikipedia Api don't work with all avaiable languages

---

## How to use it in your project (without my interactive prompt)

You will need to clone and install it in your project folder.

Initiate it

```js
const wikipedia = require('./wikipedia');
``` 

Your `wikipedia` will require this object

```js
content = {
    searchTerm = "Your Search Term here"
}
```

Then you can await for search

```js
await wikipedia(content);
```

Your `content` object will return like this:

```js
content = {
    searchTerm = "",
    wikipediaContent = {
        pageid: '',
        title: '',
        url: '',
        raw: '',
        summary: '',
        references: [],
        images: [],
    }
}
```

*I still don't know how to make a npm package to helping us. (if you want to, we all will be thankful)*

## License & copyright

It's free (MIT license) © Mayk Brito