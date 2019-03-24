// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import infiniteScroll from  'vue-infinite-scroll'
import './assets/css/base.css'
import './assets/css/checkout.css'
import './assets/css/product.css'
import './assets/css/login.css'
import {currency} from './util/currency'
import Vuex from 'vuex'
Vue.config.productionTip = false
Vue.filter("currency",currency)
Vue.use(infiniteScroll)
Vue.use(Vuex)
/* eslint-disable no-new */
const store =new Vuex.Store({
	 state:{
	 	returnName:'',
	 	cartCount:0
	 },
	 mutations:{
	 	updateUserInfo(state,returnName){
	 		state.returnName=returnName;
	 	},
	 	updatecartCount(state,cartCount){
	 		state.cartCount+=cartCount;
	 	},
	 	initcartCount(state,cartCount){
	 		state.cartCount=cartCount;
	 	}
	 }
});
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
 