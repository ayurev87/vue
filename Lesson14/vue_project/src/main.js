import { createApp } from 'vue'
import App from './App.vue'
import myStore from './store'
import Vuex from 'vuex'



createApp().config.productionTip = false
createApp().use(Vuex)

const store = new Vuex.Store(myStore);

const app = createApp(App)

app.use(store)
app.mount('#app');