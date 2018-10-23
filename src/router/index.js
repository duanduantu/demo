import Vue from 'vue'
import Router from 'vue-router'
import register from '@/pages/register'
import login from '@/pages/login'
import detail from '@/pages/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})
