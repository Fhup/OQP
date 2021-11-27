//配置路由相关的信息
import Vue from 'vue'
import Router from 'vue-router'

const home = () =>
    import ('views/home/home')
const login = () =>
    import ('views/login/login')



// Vue.use() 安装插件
Vue.use(Router);
// 对多次push进行处理
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

var routes = [{
        path: "",
        redirect: "/login"
    },
    {
        path: "/login",
        component: login
    },
    {
        path: "/home",
        component: home
    }
]

const router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes
})


//前置守卫(guard)
// router.beforeEach((to, from, next) => {
//     //从from到to 实现路由导航
//     document.title = to.matched[0].meta.title
//     next()
// })

//后置钩子(hook)
// router.afterEach((to, from) => {
//     // console.log('----------')
// })

export default router