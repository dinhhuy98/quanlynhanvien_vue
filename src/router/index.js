import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DefaultLayout from '@/layout/DefaultLayout.vue'
import Employee from '@/pages/Employee.vue'
import Login from '@/pages/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'DefaultLayout',
      component: DefaultLayout
    },
    {
      path: '/employee',
      name: 'employee',
      component: Employee
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    

  ]
  
})
