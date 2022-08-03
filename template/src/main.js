import Vue from 'vue'
import App from './App.vue'
<%_ if (options.vuex) { _%>
import store from './store'
<%_ } _%>
<%_ if (options.elementUI) { _%>
import ElementUI from 'element-ui';
Vue.use(ElementUI);
<%_ } _%>

// simulation data
  import './mock/index'

Vue.config.productionTip = false

new Vue({
  router,
  <%_ if (options.vuex) { _%>
  store,
  <%_ } _%>
  render: h => h(App)
}).$mount('#app')
