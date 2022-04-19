const en = require('./en.json')
const es = require('./es.json')

const i18n = {
  translations: {
    en,
    es,
  },
  defaultLang: 'en',
  useBrowserDefault: true,
}

const t = (key, language = 'en') => {
    let translation = i18n.translations[language];
    key.split('.').forEach(elem => {
        translation = translation[elem]
    });
    return translation
}

module.exports = {
  i18n,
  t
}
