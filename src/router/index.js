// 导入 路由相关模块 createRouter 和 createMemoryHistory
import { createRouter, createWebHashHistory } from "vue-router";
// 创建路由
const router = createRouter({
    history: createWebHashHistory('util-tools'),
    routes: [
        { name: "home", path: "/", component: () => import("../views/HomePage") },
        { name: "MultipleSearch", path: "/mutiSearch", component: () => import("../views/MultipleSearch") },
        { name: "ObsidianVariousComplement", path: "/obDictGenerator", component: () => import("../views/ObsidianVariousComplement") },
    ]
})// 导出 路由 
export default router