import Vue from 'vue'
import App from './App.vue'
import "@fortawesome/fontawesome-free/css/all.min.css";
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: (h) => h(App), //렌더링을 하는것 app.vue에 있는 내용을 렌더링을 해야하는데
}).$mount('#app')
