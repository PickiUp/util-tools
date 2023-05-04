// 导入 路由相关模块 createRouter 和 createMemoryHistory
import { createRouter, createWebHistory } from "vue-router";
// 创建路由
const router = createRouter({
    history: createWebHistory('/util-tools/'),
    routes: [
        { name: "home", path: "/", component: () => import("../views/HomePage") },
        { name: "MultipleSearch", path: "/muti-search", component: () => import("../views/MultipleSearch") },
        { name: "ObsidianVariousComplement", path: "/ob-dict-generator", component: () => import("../views/ObsidianVariousComplement") },
    ]
})// 导出 路由 
export default router