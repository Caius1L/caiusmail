<template>
<div>
<nav-header></nav-header>
<nav-bread>
     <span>Goods</span>
</nav-bread>
<div class="accessory-result-page accessory-page">
  <div class="container">
    <div class="filter-nav">
      <span class="sortby">Sort by:</span>
      <a href="javascript:void(0)" class="default cur">Default</a>
      <a @click="sortGoods"href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short" v-bind:class="{'sort-up':!sortFlag}"><use xlink:href="#icon-arrow-short"></use></svg></a>
      <a href="javascript:void(0)" class="filterby stopPop" @click.stop="showFilterPop">Filter by</a>
    </div>
    <div class="accessory-result">
      <!-- filter -->
      <div class="filter stopPop" id="filter" v-bind:class="{'filterby-show':filterBy}">
        <dl class="filter-price">
          <dt>Price:</dt>
          <dd><a href="javascript:void(0)" v-bind:class="{'cur':priceChecked=='all'}" @click="setPriceFilter('all')">All</a></dd>
          <dd v-for="(price,index) in priceFilter" >
            <a href="javascript:void(0)" @click="setPriceFilter(index)" v-bind:class="{'cur':priceChecked==index}">{{price.startprice}}- {{price.endprice}}</a>
          </dd>
        </dl>
      </div>

       <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
          <ul>
            <li class="item" v-for="item in goodsList">
              <div class="pic">
                <a v-bind:href="item.productUrl">
                <img v-bind:src="'static/'+item.productImage" alt="">
                </a>
               </div>
                <div class="main">
                  <div class="name">{{item.productName}}</div>
                  <div class="price">{{item.salePrice}}</div>
                 <div class="btn-area">
                   <a href="javascript:;" class="btn btn--s" @click="addCart(item.productId)">加入购物车</a>
                </div>
              </div>
            </li>
          </ul>
          <div class="view-more-normal" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20">
              <img src="./../assets/loading-spinning-bubbles.svg" v-show="loading">
          </div>
        </div>
        </div>
      </div>
  </div>
</div>
<div class="md-overlay" v-show="overLayFlag" @click="closePop"></div>

<modal v-bind:mdShow="mdShow" v-on:close="closeModal">
  <p slot="message">请先登录，否则无法加入到购物车中</p>
  <div slot="btnGroup">
    <a class="btn btn--m" href="javascript:" @click="closeModal">关闭</a>
  </div>
</modal>
<modal v-bind:mdShow="mdShowCart" v-on:close="closeModal">
        <p slot="message">
          <svg class="icon-status-ok">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-status-ok"></use>
          </svg>
          <span>加入购物车成功!</span>
        </p>
        <div slot="btnGroup">
          <a class="btn btn--m" href="javascript:;" @click="mdShowCart = false">继续购物</a>
          <router-link class="btn btn--m btn--red" href="javascript:;" to="/cart">查看购物车</router-link>
        </div>
 </modal>
<nav-footer></nav-footer>
</div>
</template>

<script>
    import NavHeader from'./../components/Header.vue'
    import NavFooter from'./../components/Footer.vue'
    import NavBread from'./../components/Bread.vue'
    import Modal from'./../components/Modal.vue'
    import axios from 'axios'
        export default{
           data(){
           return{
                goodsList:[],
                loading:false,
                sortFlag:true,
                page:1,
                pageSize:8,
                busy:true,
                mdShow:false,
                mdShowCart:false,
                priceFilter:[
                 {
                  startprice:'0',
                  endprice:'100'
                 },
                  {
                  startprice:'100',
                  endprice:'500'
                 },
                 {
                  startprice:'500',
                  endprice:'1000'
                 },
                 {
                  startprice:'1000',
                  endprice:'5000'
                 }
                ],
               priceChecked:'all',
               filterBy:false,
               overLayFlag:false
           }
           },
           components:{
                NavHeader,
                NavFooter,
                NavBread,
                Modal
           },
           mounted() {
            this.getGoodsList();
           },
           methods:{
              getGoodsList(flag) {
                var param={
                  page:this.page,
                  pageSize:this.pageSize,
                  sort:this.sortFlag?1:-1,
                  pricelevel:this.priceChecked}
                  this.loading=true;
                 axios.get("/goods/list",{
                  params:param
                 }).then((response)=>{
                  this.loading=false;
                  let res=response.data;
                  if(res.status=="0"){
                    if(flag){
                    this.goodsList=this.goodsList.concat(res.result.list);
                      if(res.result.count==0){
                        this.busy=true;
                      }else{
                        this.busy=false;
                      }
                  }
                    else{
                     this.goodsList= res.result.list
                     this.busy=false;
                    }
                  }else{
                    this.goodsList=[];
                  }
                 })
              },
              sortGoods(){
                this.sortFlag=!this.sortFlag;
                this.page=1;
                this.getGoodsList();
              },
              showFilterPop(){
                  this.filterBy=true;
                  this.overLayFlag=true;
              },
              closePop(){
                  this.filterBy=false;
                  this.overLayFlag=false;
              },
              setPriceFilter(index){
              this.priceChecked=index;
              this.page=1;
              this.getGoodsList();
              this.closePop();
              },
              loadMore(){
                this.busy=true;
                setTimeout(() => {
                this.page++;
                this.getGoodsList(true);
                   }, 500);
              },
               closeModal(){
              this.mdShow = false;
              this.mdShowCart=false;
            },
              addCart(productId){
                axios.post("/goods/addCart",{
                  productId:productId
                }).then((res)=>{
                  var res=res.data;
                  if(res.status==0){
                    this.mdShowCart=true;
                    this.$store.commit("updatecartCount",1);
                  }else{
                    this.mdShow=true;
                  }
                });
              }
           }
        }
        </script>
