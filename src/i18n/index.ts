import { createI18n } from 'vue-i18n';
import fr from './locales/fr.json';

const messages = {
  fr: fr
}

const i18n = createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages
})

export default i18n;