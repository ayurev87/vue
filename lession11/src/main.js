import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

createApp().config.productionTip = false;

createApp(App).use(store).mount("#app");
