import Vue from 'vue'
import Router from 'vue-router'
import GoodList from './../views/GoodList.vue'
import Cart from './../views/Cart.vue'
import Address from './../views/Address.vue'
import orderConfirm from './../views/orderConfirm.vue'
import orderSuccess from './../views/orderSuccess.vue'
import Boliz from './../views/Boliz.vue'
import zongjiao from './../views/zongjiao.vue'
import xiandai from './../views/xiandai.vue'
import qiding from './../views/qiding.vue'
import yanwei from './../views/yanwei.vue'
import wood from './../views/mu.vue'
import qi1 from './../views/qi.vue'
import qi from './../views/qi1.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/',
      name:'GoodList',
      component:GoodList
    },
    {
      path:'/orderconfirm',
      name:'orderConfirm',
      component:orderConfirm
    },
     {
      path:'/qi',
      name:'qi',
      component:qi
    },
    {
      path:'/qi1',
      name:'qi1',
      component:qi1
    },
    {
      path:'/wood',
      name:'wood',
      component:wood
    },
    {
      path:'/yanwei',
      name:'yanwei',
      component:yanwei
    },
    {
      path:'/qiding',
      name:'qiding',
      component:qiding
    },
     {
      path:'/xiandai',
      name:'xiandai',
      component:xiandai
    },
    {
      path:'/zongjiao',
      name:'zongjiao',
      component:zongjiao
    },
    {
      path:'/boliz',
      name:'Boliz',
      component:Boliz
    },
    { name:'Cart',
      path:'/cart',
      component:Cart
    },
    { name:'orderSuccess',
      path:'/orderSuccess',
      component:orderSuccess
    },
    { name:'Address',
      path:'/address',
      component:Address
    }
  ]
})
