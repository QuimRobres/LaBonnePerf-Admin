import { createRouter, createWebHistory } from "vue-router";

/* const requireAuth = (to, from, next) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (isAuthenticated) {
        console.log(to)
        if (to.name === "LoginPage" || to.name === "InscriptionPage") {
            next({ name: "StartPage" });
        } else {
            next();
        }
    } else {
        next({ name: "LoginPage" });
    }
}; */

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: () => import('@/components/MainPage/MainPage.vue'),
        /* beforeEnter: requireAuth, */
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: () => import('@/components/Auth/LoginPage.vue')
    },
    {
        path: '/cordages-en-cours',
        name: 'CordagesEnCours',
        component: () => import('@/components/CordagesEnCours/CordagesEnCours.vue')
    },
    {
        path: '/cordages-passes',
        name: 'CordagesPasses',
        component: () => import('@/components/CordagesPasses/CordagesPasses.vue')
    },

    {
        path: '/relation-client',
        name: 'RelationClient',
        component: () => import('@/components/RelationClient/RelationClient.vue')
    },
    {
        path: '/stock',
        name: 'Stock',
        component: () => import('@/components/Stock/Stock.vue')
    },
    {
        path: '/fiche-cordage/:id',
        name: 'FicheCordage',
        component: () => import('@/components/FicheCordage/FicheCordage.vue')
    },
    {
        path: '/fiche-client/:id',
        name: 'FicheClient',
        component: () => import('@/components/FicheClient/FicheClient.vue')
    },
    {
        path: '/fiche-produit/:id',
        name: 'FicheProduit',
        component: () => import('@/components/FicheProduit/FicheProduit.vue')
    },


]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;