import { createApp } from 'vue'
import App from './App.vue'
// import './assets/main.css'
// 全局导入 element ui图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 全局导入 ui库
import ElementPlus from 'element-plus'

// 导入路由
import router from "./router/index";
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// 挂载路由到 vue 实例
app.use(router)
app.use(ElementPlus)
app.mount('#app')
