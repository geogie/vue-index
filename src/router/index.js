import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import TodoList from "@/components/TodoList";
import Trying from "@/components/trying/trying";
import TryingDetail from "@/components/trying-detail/trying-detail";
import Tryend from "@/components/tryend/tryend";
import TryendDetail from "@/components/tryend-detail/tryend-detail";
import ApplysList from "@/components/applys-list/applys-list"
import WinnerList from '@/components/winner-list/winner-list';

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
    path: '/',
    redirect: '/trying'//进行中
  },
  {
    path: '/trying',
    component: Trying,
    children: [
      {
        path: ':id',
        component: TryingDetail//进行中的详情界面
      }
    ]
  },
  {
    path: '/tryend',
    component: Tryend,
    children: [
      {
        path: ':id',
        component: TryendDetail
      }
    ]
  },
  {
    path: '/applys-list/:id',
    name: 'applys-list',
    component: ApplysList
  },
  {
    path: '/winner-list/:id',
    name: 'winner-list',
    component: WinnerList
  }
]

export default new Router({
  linkActiveClass: 'active',
  routes: routes
})
