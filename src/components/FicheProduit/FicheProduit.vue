<template>
    <div>
        <div class="header-container">
            <div class="flex-container">
                <div @click="() => this.$router.push({ name: 'MainPage' })">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="42"
                        height="42" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M15 6l-6 6l6 6"></path>
                    </svg>
                </div>
                <p>Fiche Produit</p>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24"
                viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 6l16 0"></path>
                <path d="M4 12l16 0"></path>
                <path d="M4 18l16 0"></path>
            </svg>
        </div>
        <div>
            <p>Nom du produit</p>
            <input type="text" placeholder="Nom du Produit" v-model="clientData.name" class="product-name-input" />
        </div>

        <div class="negative-margin-top-18">
            <p class="font-size-14">Type de raquette</p>
            <OptionsList :list="abonnementOptions" />
        </div>
        <div>
            <p class="font-size-14">Type de produit</p>
            <OptionsList :list="abonnementTypeOptions" />
        </div>
    </div>
</template>

<script>
import OptionsList from '../Global/OptionsList.vue';


export default {
    name: 'App',
    components: {
        OptionsList
    },

    data() {
        return {
            clientData: {
                name: '',
                raquetteType: '',
                productType: '',
                image: ''

            },
            abonnementOptions: [
                {
                    id: 1,
                    label: "Tennis",
                },
                {
                    id: 2,
                    label: "Badminton",
                },
                {
                    id: 3,
                    label: "Squash",
                },
            ],
            abonnementTypeOptions: [
                {
                    id: 1,
                    label: "Cordage",
                },
                {
                    id: 2,
                    label: "Grip",
                },
                {
                    id: 3,
                    label: "Sur-Grip",
                },

            ]
        }
    }
}
</script>

<style scoped>
.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 20px;
}

.flex-container {
    display: flex;
    align-items: center;
    gap: 8px;
}

.font-bold {
    font-weight: 600;
}

.negative-margin-top-18 {
    margin-top: -18px;
}

.font-size-14 {
    font-size: 14;
}

.product-name-input {
    width: 100%;
    border: 1px solid black;
    border-radius: 10px;
    height: 41px;
    padding-left: 12px;
}
</style>