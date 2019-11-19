import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: ()=>import('@/views/Layout.vue'),
    children:[
      {
        path:'/',
        redirect:'/rank'
      },
      {
        path:'/home',
        name:'home',
        component:()=>import('@/views/Home.vue')
      },
      {
        path:'/rank',
        name:'rank',
        component:()=>import('@/views/Rank.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
