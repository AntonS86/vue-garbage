import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
export const eventEmitter = new Vue()
import ColorDirective from './color';
import List from "./List";
import Form from "./Form";
import Validation from "./Validation";
import VueRouter from "vue-router";
import router from './routes';
import VueResource from 'vue-resource';
import store from './store';


Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000/';
Vue.http.interceptors.push(request => {
  request.headers.set('Auth', 'RAND TOKEN ' + Math.random())
});

Vue.use(VueRouter);

Vue.use(Vuelidate);

Vue.component('app-list', List)
Vue.component('app-form', Form)
Vue.component('app-validation', Validation)

Vue.mixin({
  beforeCreate() {
    //console.log('global mixin: beforeCreate')
  }
})

Vue.directive('colored', ColorDirective);
Vue.filter('reverse', (value) => {
  return value.split('').reverse().join('');
})
new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
})


