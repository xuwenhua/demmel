// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue';
import animated from 'animate.css';
import BaiduMap from 'vue-baidu-map';
import App from './App';
import router from './router';


Vue.config.productionTip = false;

Vue.use(animated)

Vue.use(BaiduMap, {
  ak: 'fd87c3pz4fNBbtLhAEAIExojXyIRxfCX',
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
  },
  template: '<App/>',
});
