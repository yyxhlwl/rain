export const constantRoute = [
    // {//登录
    //     path:'/login',
    //     component:()=>import('@/views/login/index.vue'),
    //     name:'login',//命名路由
    // },
    {//登录成功展示数据
        path:'/',
        component:()=>import('@/views/home/index.vue')
    },
    // {//登录成功展示数据
    //     path:'/404',
    //     component:()=>import('@/views/404/index.vue'),
    //     name:'404'
    // },
    {
        path:'/:pathMatch(.*)*',
        redirect:'/404',
        name:'Any'
    }
]