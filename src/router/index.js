import { createRouter, createWebHistory} from "vue-router";
import {App} from "vue";


const routes = [
    {
        path: '/',
        name: 'App',
        component: App
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})