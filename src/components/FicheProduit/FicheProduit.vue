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
            <div class="add-image-container">
                <div class="add-image-inner-container">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-filled" width="24"
                        height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M8.813 11.612c.457 -.38 .918 -.38 1.386 .011l.108 .098l4.986 4.986l.094 .083a1 1 0 0 0 1.403 -1.403l-.083 -.094l-1.292 -1.293l.292 -.293l.106 -.095c.457 -.38 .918 -.38 1.386 .011l.108 .098l4.674 4.675a4 4 0 0 1 -3.775 3.599l-.206 .005h-12a4 4 0 0 1 -3.98 -3.603l6.687 -6.69l.106 -.095zm9.187 -9.612a4 4 0 0 1 3.995 3.8l.005 .2v9.585l-3.293 -3.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-.307 .306l-2.293 -2.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-5.307 5.306v-9.585a4 4 0 0 1 3.8 -3.995l.2 -.005h12zm-2.99 5l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"
                            stroke-width="0" fill="currentColor"></path>
                    </svg>
                    <div class="flex-container">
                        <p class="font-bold">Ajouter</p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24"
                            height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 5l0 14"></path>
                            <path d="M5 12l14 0"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <p>Nom du produit</p>
                <input type="text" placeholder="Nom du Produit" v-model="clientData.name" class="product-name-input" />
            </div>

            <div>
                <p class="font-size-14">Type de raquette</p>
                <OptionsList :list="abonnementOptions" />
            </div>
            <div>
                <p class="font-size-14">Type de produit</p>
                <OptionsList :list="abonnementTypeOptions" />
            </div>
        </div>
        <div>
            <div class="add-button">
                <p class="font-bold">Ajouter</p>
            </div>
            <div class="delete-button">
                <p class="font-bold">Supprimer</p>
            </div>
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

.add-image-container {
    height: 132px;
    width: 132px;
    border: 1px solid black;
    border-radius: 10px;

}

.add-image-inner-container {
    margin-top: 30%;
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
}

.add-image-inner-container>svg {
    margin-bottom: -10px;
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
    width: 92%;
    border: 1px solid black;
    border-radius: 10px;
    height: 41px;
    padding-left: 12px;
    margin-top: -10px;
    margin-left: 4px;
}

.add-button {
    border-radius: 8px;
    height: 32px;
    background: #EAE604;
    margin: auto;
    margin-top: 24px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 0px;
}

.delete-button {
    border: 1px solid black;
    border-radius: 12px;
    height: 32px;
    margin: auto;
    margin-top: 8px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 0px;
}

.font-bold {
    font-weight: 600;
}
</style>