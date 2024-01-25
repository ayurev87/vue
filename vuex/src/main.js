import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import routes from '@/router'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({ routes })

new Vue({
    store,
    render: h => h(App),
    router,
}).$mount('#app')