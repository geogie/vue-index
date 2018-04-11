// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import TodoLists from './TodoLists'
import store from './store'
import FastClick from 'fastclick';
import VueLazyload from 'vue-lazyload';
import 'lib-flexible/flexible';
import './common/scss/index.scss';

FastClick.attach(document.body);

Vue.use(VueLazyload, {
  loading: require('./common/image/1-3.gif')
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
