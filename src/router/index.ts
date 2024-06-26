import type { RouteRecordRaw } from 'vue-router'

import type { App } from 'vue'

import { createRouter, createWebHashHistory } from 'vue-router'

import { basicRoutes } from './routers'

// 白名单应该包含基本静态路由
const WHITE_NAME_LIST: string[] = []
const getRouteNames = (arr:any[])=>{
    arr.forEach(item=>{
        WHITE_NAME_LIST.push(item.name)
        getRouteNames(item.children || [])
    })
}
getRouteNames(basicRoutes)

// app router
// 创建一个可以被 Vue 应用程序使用的路由实例
export const router = createRouter({
    // 创建一个 hash 历史记录
    history: createWebHashHistory(),

    // 应该添加路由的初始化路由列表
    routes: basicRoutes as unknown as RouteRecordRaw[],

    // 是否应该禁止尾部斜杠，默认为假
    strict:true,
    scrollBehavior:()=>({left:0,top:0})
})

// reset Router
export function resetRouter() {
    router.getRoutes().forEach(route=>{
        const { name } = route
        if(name && !WHITE_NAME_LIST.includes(name as string)){
            router.hasRoute(name) && router.removeRoute(name)
        }
    })
}

// config router
// 配置路由器
export function setupRouter(app: App<Element>) {
    app.use(router);
  }