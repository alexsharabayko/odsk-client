import Vue from 'vue';
import Router from 'vue-router';
import News from './views/news/news';

Vue.use(Router);

export default new Router({
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
      component: () => import('./views/article/article.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
