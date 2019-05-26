import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/views/GoodsList'
import Cart from '@/views/Cart'
import Address from './../views/Address'
import Order from './../views/OrderConfirm'
import PaySuccess from './../views/Paysuccess'
Vue.use(Router)
// paysuccess
export default new Router({
  mode: 'history',
  linkActiveClass: 'router-link-active',
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/goods',
      name: 'goods',
      component: GoodsList,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }, {
      path: '/address',
      name: 'address',
      component: Address
    }, {
      path: '/order',
      name: 'order',
      component: Order
    },{
    path:'/paysuccess',
      name:'paysuccess',
      component:PaySuccess
    }
  ]
})
