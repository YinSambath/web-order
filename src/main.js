import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(i18n)
app.use(router)
app.mount('#app')
