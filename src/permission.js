import router from './router'
import { getCookie } from '@/utils/storages'

const TokenKey = 'demo-token'

router.beforeEach((to, from, next) => {
    if (to.matched.some(res => res.meta.requireAuth)) {
        if (getCookie(TokenKey)) {
            next()
        } else {
            next({
                path: '/',
                query: {
                    redirect: to.fullPath,
                    login: true
                }
            })
        }
    } else {
        next()
    }
})

router.afterEach((to, from, next) => {
    if(to.meta.title){
        document.title = to.meta.title
    }
})