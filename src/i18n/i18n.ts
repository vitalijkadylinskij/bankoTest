import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ruTranslation from '@/locales/ru/translation.json'

i18n.use(initReactI18next).init({
  lng: 'ru',
  fallbackLng: 'ru',
  debug: true,
  resources: {
    ru: {
      translation: ruTranslation,
    },
  },
})

export default i18n
