import { createRouter, createWebHistory } from "vue-router";

const requireAuth = (to, from, next) => {
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
};

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: () => import('@/components/MainPage/MainPage.vue'),
        beforeEnter: requireAuth,
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: () => import('@/components/Auth/LoginPage.vue')
    },
    {
        path: '/cordages-en-cours',
        name: 'CordagesEnCours',
        component: () => import('@/components/CordagesEnCours/CordagesEnCours.vue'),
        beforeEnter: requireAuth,
    },
    {
        path: '/cordages-passes',
        name: 'CordagesPasses',
        component: () => import('@/components/CordagesPasses/CordagesPasses.vue'),
        beforeEnter: requireAuth,
    },

    {
        path: '/relation-client',
        name: 'RelationClient',
        component: () => import('@/components/RelationClient/RelationClient.vue'),
        beforeEnter: requireAuth,
    },
    {
        path: '/stock',
        name: 'Stock',
        component: () => import('@/components/Stock/Stock.vue'),
        beforeEnter: requireAuth,
    },
    {
        path: '/fiche-cordage/:id',
        name: 'FicheCordage',
        component: () => import('@/components/FicheCordage/FicheCordage.vue'),
        beforeEnter: requireAuth,
    },
    {
        path: '/fiche-client/:id',
        name: 'FicheClient',
        component: () => import('@/components/FicheClient/FicheClient.vue'),
        beforeEnter: requireAuth,
    },
    {
        path: '/fiche-produit/:id',
        name: 'FicheProduit',
        component: () => import('@/components/FicheProduit/FicheProduit.vue'),
        beforeEnter: requireAuth,
    },
    {
        path: '/ajouter-produit',
        name: 'AjouterProduit',
        component: () => import('@/components/AjouterPoduit/AjouterProduit.vue'),
        beforeEnter: requireAuth,
    },


]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;