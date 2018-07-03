import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/Index'
import Detail from '@/components/pages/Detail'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
