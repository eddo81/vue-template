// The Vue build version to load with the `import` command
import Style      from 'scss/style.scss';
import Vue        from 'vue';
import App        from '@/App.vue';
import Router     from '@/router/router.js';
import Store      from '@/store/store.js';

// Dynamically Import Global Components.
const Radio     = () => import('@/components/_radio_btn.vue');
const Checkbox  = () => import('@/components/_checkbox.vue');
const Select    = () => import('@/components/_select.vue');
const Textfield = () => import('@/components/_textfield.vue');
const Textarea  = () => import('@/components/_textarea.vue');

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