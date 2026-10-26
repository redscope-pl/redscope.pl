import "./assets/main.css";

import { createPinia } from "pinia";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

const i18n = createI18n({
	// something vue-i18n options here ...
	// TODO: https://vue-i18n.intlify.dev/guide/essentials/started.html
});

const app = createApp(App);
const pinia = createPinia();

app.use(i18n);
app.use(pinia);
app.use(router);

app.mount("#app");

//var stdin = ;

//var data = "";
//((stdin=process.openStdin(), data="")=>{stdin.on('data',(chunk)=>data+=chunk);stdin.on('end',()=>console.log(JSON.stringify(JSON.parse(data),2,null),"\n"));})()
