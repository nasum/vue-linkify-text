import { createApp } from "vue";
import App from "./App.vue";
import VueLinkifyText from "@/index";

const app = createApp(App);
app.use(VueLinkifyText);
app.mount("#app");
