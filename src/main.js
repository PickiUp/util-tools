import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 导入路由
import router from "./router/index";
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
// 挂载路由到 vue 实例
createApp(App).use(router).mount('#app')
