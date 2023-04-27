import { createApp } from 'vue'
import App from './App.vue'
import  './index.css'
import router from './router.js';
import CodeEditor from 'simple-code-editor';

const app = createApp(App)
app.use(router)

app.component({'code-editor': CodeEditor});



app.mount('#app')