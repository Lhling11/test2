/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: '系统首页'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
      },
      {
        path: '/table',
        name: 'Table',
        meta: {
          title: '表格'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/Table.vue')
      },
      {
        path: '/tabs',
        name: 'Tabs',
        meta: {
          title: 'tab选项卡'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/form',
        name: 'Form',
        meta: {
          title: '表单'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/upload',
        name: 'Upload',
        meta: {
          title: '文件上传'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/editor',
        name: 'Editor',
        meta: {
          title: '文本编辑器'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/chart',
        name: 'Chart',
        meta: {
          title: '图表'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/Chart.vue')
      },
      {
        path: '/environment',
        name: 'Environment',
        meta: {
          title: '环境实时数据'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/Environment.vue')
      },
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   meta: {
  //     titel: '系统首页'
  //   },
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  // },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登陆'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/test',
    name: 'Test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/test.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
