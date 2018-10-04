import {APP_ELEMENT_MODE, SET_APP_ELEMENT_MODE_MUTATION, SET_HEADER_MODE_MUTATION} from '@/typings/common.typings';
import store from '@/vuex/store';
import Vue from 'vue';
import Router from 'vue-router';

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
      component: () => import('./views/news/news.vue'),
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
      component: () => import(/* webpackChunkName: "about" */ './views/about/about.vue'),
    },
    {
      path: '/places',
      name: 'places',
      meta: {
        appElementMode: APP_ELEMENT_MODE.HEIGHT_100,
      },
      component: () => import(/* webpackChunkName: "about" */ './views/places/places.vue'),
    },
  ],
});

router.afterEach((to) => {
  store.commit(SET_HEADER_MODE_MUTATION, !!to.meta.isSimpleHeader);
  store.commit(SET_APP_ELEMENT_MODE_MUTATION, to.meta.appElementMode);
});

export default router;
