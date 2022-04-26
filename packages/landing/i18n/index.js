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

module.exports = i18n
