import Vue from 'vue';
import ElementUI from 'element-ui';
import Vconsole from 'vconsole';
import App from './App.vue';
import router from './router';
import 'element-ui/lib/theme-chalk/index.css';
// import '@assets/css/reset.scss'

Vue.use(ElementUI);

Vue.config.productionTip = false;

// const vconsole = new Vconsole();
// Vue.use(vconsole);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
