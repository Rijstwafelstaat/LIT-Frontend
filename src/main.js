import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from "vue-router";
import App from './App.vue'
import './index.css'
import Home from "./components/Home.vue";
import HelloWorld from "./components/HelloWorld.vue";
import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'

const home = Home
const helloWorld = HelloWorld

const routes = [
    {path: '/', component: home},
    {path: '/about', component: helloWorld },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


createApp(App).use(router).use(VueGoodTablePlugin).mount('#app')
