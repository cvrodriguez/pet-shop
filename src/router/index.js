import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import AnimalList from "@/components/AnimalList"
import AnimalDetail from "@/components/AnimalDetail"

const routes = [
    {
        path: "/",
        name: "AnimalList",
        component: AnimalList,
    },
    {
        path: '/AnimalDetail/:id',
        name: 'AnimalDetail',
        component: AnimalDetail
    },
    {
        path: "/Home",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;