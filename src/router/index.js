import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Itemdetail from '@/components/itemdetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/itemdetail/:_id',
      name: 'itemdetail',
      component: Itemdetail
    }
  ]
})
