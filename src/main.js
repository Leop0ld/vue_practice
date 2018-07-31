// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { store } from './store'

Vue.config.productionTip = false
Vue.prototype.$http = axios

// Make Axios play nice with Django CSRF
Vue.prototype.$http.defaults.xsrfCookieName = 'csrftoken'
Vue.prototype.$http.defaults.xsrfHeaderName = 'X-CSRFToken'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
