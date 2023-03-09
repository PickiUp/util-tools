// 导入 路由相关模块 createRouter 和 createMemoryHistory
import { createRouter, createWebHistory } from "vue-router";
// 创建路由
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { name: "home", path: "/", component: () => import("../views/HomePage.vue") },
        { name: "test", path: "/test", component: () => import("../views/TestPage.vue") },

    ]
})

// 导出 路由 
export default router