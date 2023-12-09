import Home from '@components/Home.vue';
import NotFound from '@components/NotFound.vue';
import * as VueRouter from 'vue-router'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory('/'),
  routes: [
    {
      path: '/:lang(ca|fr)?',
      name: 'Home',
      component: Home
    },
    {
      path: '/:lang(ca|fr)?/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
});

export default router;