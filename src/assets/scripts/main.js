// The Vue build version to load with the `import` command
import Style      from 'scss/style.scss';
import Vue        from 'vue';
import App        from '@/App.vue';
import Router     from '@/router/router.js';
import Store      from '@/store/store.js';

// Dynamically Import Global Components.
const Radio     = () => import(/* webpackChunkName: "component-radio" */ '@/components/_radio_btn.vue');
const Checkbox  = () => import(/* webpackChunkName: "component-checkbox" */ '@/components/_checkbox.vue');
const Select    = () => import(/* webpackChunkName: "component-select" */ '@/components/_select.vue');
const Textfield = () => import(/* webpackChunkName: "component-textfield" */ '@/components/_textfield.vue');
const Textarea  = () => import(/* webpackChunkName: "component-textarea" */ '@/components/_textarea.vue');

Vue.config.productionTip = false;

// Register Global Components.
Vue.component('v-checkbox', Checkbox);
Vue.component('v-radio', Radio);
Vue.component('v-select', Select);
Vue.component('v-textfield', Textfield);
Vue.component('v-textarea', Textarea);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Router,
  store: Store,
  render: h => h(App)
});
