// Bot languages
const languages = {};
languages.ar = require('./ar/bot.json');
languages.en = require('./en/bot.json');

// Exports langs
module.exports = languages;
module.exports.ex = require('./examples.json');