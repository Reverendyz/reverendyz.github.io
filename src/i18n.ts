import { createI18n } from 'vue-i18n'
import enUS from '@/locales/en-US.json'
import ptBR from '@/locales/pt-BR.json'

// Get saved locale from localStorage or default to 'pt'
const savedLocale = localStorage.getItem('locale') || 'pt'

export const i18n = createI18n({
  locale: savedLocale,
  legacy: false,
  fallbackLocale: 'en',
  messages: {
    en: enUS,
    pt: ptBR,
  },
})
