<template>
	<div>
	<nav-header></nav-header>
     <nav-bread>
     <span>orderSuccess</span>
</nav-bread>
  <div class="container">
    <div class="page-title-normal">
      <h2 class="page-title-h2"><span>check out</span></h2>
    </div>
    <!-- 进度条 -->
    <div class="check-step">
      <ul>
        <li class="cur"><span>Confirm</span> address</li>
        <li class="cur"><span>View your</span> order</li>
        <li class="cur"><span>Make</span> payment</li>
        <li class="cur"><span>Order</span> confirmation</li>
      </ul>
    </div>

    <div class="order-create">
      <div class="order-create-pic"><img src="/static/ok-2.png" alt=""></div>
      <div class="order-create-main">
        <h3>Congratulations! <br>设计师即将在2~3个工作日与您联系</h3>
        <p>
          <span>订单编号：{{orderId}}</span>
          <span>总价格：{{orderTotal|currency('$')}}</span>
        </p>
        <div class="order-create-btn-wrap">
          <div class="btn-l-wrap">
            <router-link class="btn btn--m" to="/cart">Cart List</router-link>
          </div>
          <div class="btn-r-wrap">
            <router-link class="btn btn--m" to="/">Goods List</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav-footer></nav-footer>
</div>
</template>

<script>
	import NavHeader from'./../components/Header.vue'
    import NavFooter from'./../components/Footer.vue'
    import NavBread from'./../components/Bread.vue'
    import {currency} from './../util/currency'
    import axios from 'axios'
    export default{
		data(){
			return{
               orderId:'',
               orderTotal:0
			}
		},components:{
                NavHeader,
                NavFooter,
                NavBread,
        },filters:{
          currency:currency
        },
        mounted(){
        	var orderId=this.$route.query.orderId;
        	if(!orderId){
        		return;
        	}
        	axios.get("/users/orderDetail",{
                  params:{
                  orderId:orderId
                }
        	}).then((response)=>{
        		let res=response.data;
        		if(res.status=='0'){
        			this.orderId=orderId;
        			this.orderTotal=res.result.orderTotal;
        		}
        	})
        }
	}
</script>
