import Vue from 'vue'
import AppVue from './App.vue'
import router from './assets/index'

Vue.config.productionTip = false

Vue.prototype.$appname = 'My first application'
Vue.prototype.$axios = 'axios'


new Vue({
  el : '#app',
  data:{
    $appname: 'my first application changed in data main'
  },
  beforeCreate:function(){
      console.log('main beforecreate '+this.$appname)
  },
  created:function(){
    console.log('main created after data change'+this.$appname)
  },
  render: h=>h(AppVue),
  router,
  template:'<App/>',
  components : {AppVue}
})
