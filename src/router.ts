import {SET_HEADER_MODE_MUTATION} from '@/typings/common.typings';
import store from '@/vuex/store';
import Vue from 'vue';
import Router from 'vue-router';
import News from './views/news/news';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      redirect: '/news',
    },
    {
      path: '/news',
      name: 'news',
      component: News,
    },
    {
      path: '/news/:id',
      name: 'article',
      props: true,
      meta: {
        isSimpleHeader: true,
      },
      component: () => import('./views/article/article.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/about/about.vue'),
    },
  ],
});

router.afterEach((to) => {
  store.commit(SET_HEADER_MODE_MUTATION, to.meta.isSimpleHeader);
});

export default router;
