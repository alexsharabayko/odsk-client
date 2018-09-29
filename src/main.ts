import {dateFormatFilter} from '@/filters/date-format.filter';
import store from '@/vuex/store';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.filter('dateFormat', dateFormatFilter);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
