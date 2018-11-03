import {dateFormatFilter} from '@/filters/date-format.filter';
import {configFont} from '@/font-config';
import store from '@/vuex/store';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.config.productionTip = false;

Vue.filter('dateFormat', dateFormatFilter);

configFont();
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
