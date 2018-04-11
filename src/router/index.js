import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoList from '@/components/TodoList'
import Trying from '@/components/trying/trying'
import TryingDetail from '@/components/trying-detail/trying-detail'

Vue.use(Router)

const routes = [
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/TodoList',
    name: 'TodoList',
    component: TodoList
  },
  {
    path:'/',
    redirect:'/trying'
  },
  {
    path: '/trying',
    component: Trying,
    children:[
      {
        path:':id',
        component: TryingDetail
      }
    ]
  }
]

export default new Router({
  linkActiveClass:'active',
  routes: routes
})
