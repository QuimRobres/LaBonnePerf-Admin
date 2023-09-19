import { createRouter, createWebHistory } from "vue-router";

const requireAuth = (to, from, next) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (isAuthenticated) {
        // Si el usuario está autenticado, verifica si intenta acceder a LoginPage o InscriptionPage
        console.log(to)
        if (to.name === "LoginPage" || to.name === "InscriptionPage") {
            // Redirige a la página de inicio
            next({ name: "StartPage" });
        } else {
            // Permite el acceso a otras páginas autenticadas
            next();
        }
    } else {
        // Si no está autenticado, redirige a la página de inicio de sesión
        next({ name: "LoginPage" });
    }
};

const routes = [
    {
        path: '/',
        name: 'StartPage',
        component: () => import('@/components/MainPage/MainPage.vue'),
        beforeEnter: requireAuth,
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: () => import('@/components/Auth/LoginPage.vue')
    }
]
console.log('test kimo', process.env.BASE_URL)
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;