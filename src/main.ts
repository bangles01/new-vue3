import './style.css'
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import i18n from './i18n'

router.beforeEach((to, _from, next) => {
  const lang = to.params.lang || 'fr';
  i18n.global.locale.value = lang;
  next();
});

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app')
