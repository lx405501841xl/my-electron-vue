import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'main-page',
      component: require('@/components/MainPage')
    },
    {
      path: '/login',
      name: 'login-page',
      component: require('@/components/LoginPage')
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
