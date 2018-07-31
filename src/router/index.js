import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/components/PostList'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/posts/',
      name: 'PostList',
      component: PostList
    }
  ]
})
