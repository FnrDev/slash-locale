// Bot languages
const languages = {};
languages.ar = require('./ar-SA/bot.json');
languages.en = require('./en-US/bot.json');

// Exports langs
module.exports = languages;
module.exports.ex = require('./examples.json');