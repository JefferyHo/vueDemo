import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/Login'),
    meta: {
      title: '用户登录'
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/Index'),
    meta: {
      requireAuth: true,
      title: 'SMILE-VUE演示系统'
    },
    redirect: '/admin/hello',
    children: [
      {
        path: '/admin/hello',
        name: '欢迎使用',
        icon: 'el-icon-goods',
        component: () => import('@/views/Hello'),
        meta: {
          hide: true,   //不需要展示菜单的路由
          title: 'SMILE-VUE演示系统'
        }
      },
      {
        path: '/admin/menu1',
        name: '菜单一',
        icon: 'el-icon-upload',
        component: () => import('@/views/Pages.vue'),
        children: [
          {
            path: '/admin/menu1/sub1',
            name: '菜单一 >>> 子菜单一',
            component: () => import('@/views/Pages.vue')
          },
          {
            path: '/admin/menu1/sub2',
            name: '菜单一 >>> 子菜单二',
            component: () => import('@/views/Pages')
          },
          {
            path: '/admin/menu1/sub3',
            name: '菜单一 >>> 子菜单三',
            component: () => import('@/views/Pages')
          }
        ]
      },
      {
        path: '/admin/menu2',
        name: '菜单二',
        icon: 'el-icon-date',
        component: () => import('@/views/Pages.vue'),
        children: [
          {
            path: '/admin/menu2/sub1',
            name: '菜单二 >>> 子菜单一',
            component: () => import('@/views/Pages')
          },
          {
            path: '/admin/menu2/sub2',
            name: '菜单二 >>> 子菜单二',
            component: () => import('@/views/Pages')
          },
          {
            path: '/admin/menu2/sub3',
            name: '菜单二 >>> 子菜单三',
            component: () => import('@/views/Pages')
          }
        ]
      },
      {
        path: '/admin/menu3',
        name: '菜单三',
        icon: 'el-icon-menu',
        component: () => import('@/views/Pages.vue'),
        children: [
          {
            path: '/admin/menu3/sub1',
            name: '菜单三 >>> 子菜单一',
            component: () => import('@/views/Pages')
          },
          {
            path: '/admin/menu3/sub2',
            name: '菜单三 >>> 子菜单二',
            component: () => import('@/views/Pages')
          },
          {
            path: '/admin/menu3/sub3',
            name: '菜单三 >>> 子菜单三',
            component: () => import('@/views/Pages')
          }
        ]
      },
    ]
  }
]

export const menuRouter = routes[1].children

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes 
})
