// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/reset.css'
import VueTouch from 'vue-touch'
import store from './store'
// import VueBus from 'vue-bus';

// Vue.use(VueBus);
import { Uploader, PullRefresh } from 'vant';
Vue.use(Uploader).use(PullRefresh);
Vue.use(VueTouch, { name: 'v-touch' });
// require('./mock.js');
Vue.config.productionTip = false;
Vue.prototype.bus = new Vue;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})