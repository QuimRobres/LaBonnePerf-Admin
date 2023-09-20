<template>
    <div class="header-container">

        <p>Nº {{ clientData.commandNumber }}</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24"
            viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 6l16 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M4 18l16 0"></path>
        </svg>
    </div>
    <div class="client-info-container">
        <div class="flex-container negative-margin-bottom-20">
            <p class="font-bold">Client : </p>
            <p>{{ clientData.clientName }}</p>
        </div>
        <div class="flex-container negative-margin-top-5">
            <p class="font-bold">Abonnement : </p>
            <p>{{ clientData.subscription }}</p>
        </div>
        <p class="font-bold negative-margin-top-5">Adresse(s) de livraison :</p>

        <div class="diection-container">

            <div>
                <div class="send-container negative-margin-top-14">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-bar-to-left"
                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M10 12l10 0"></path>
                        <path d="M10 12l4 4"></path>
                        <path d="M10 12l4 -4"></path>
                        <path d="M4 4l0 16"></path>
                    </svg>
                    <p>Récupérer</p>
                </div>
                <div class="direction-name-container">
                    <p class="font-bold">{{ clientData.addressRecover.name }}</p> <svg xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-map-pin-filled" width="24" height="24" viewBox="0 0 24 24"
                        stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                            stroke-width="0" fill="currentColor"></path>
                    </svg>
                </div>
                <p class="font-bold direction-text">{{ clientData.addressRecover.address }}</p>
                <div class="flex-container">
                    <p class="font-bold direction-text">{{ clientData.addressRecover.city }}</p>
                    <p class="font-bold direction-text">{{ clientData.addressRecover.postalCode }}</p>
                </div>
                <div class="flex-container negative-margin-top-14">
                    <p>Dépôt : </p>
                    <p>{{ clientData.addressRecover.deposit }}</p>
                </div>
                <div class="flex-container negative-margin-top-14">
                    <p>Photo: </p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-down-line-filled"
                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M9 5l-.117 .007a1 1 0 0 0 -.883 .993v4.999l-2.586 .001a2 2 0 0 0 -1.414 3.414l6.586 6.586a2 2 0 0 0 2.828 0l6.586 -6.586a2 2 0 0 0 .434 -2.18l-.068 -.145a2 2 0 0 0 -1.78 -1.089l-2.586 -.001v-4.999a1 1 0 0 0 -1 -1h-6z"
                            stroke-width="0" fill="currentColor"></path>
                        <path d="M15 2a1 1 0 0 1 .117 1.993l-.117 .007h-6a1 1 0 0 1 -.117 -1.993l.117 -.007h6z"
                            stroke-width="0" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <div class="separator"></div>
            <div>
                <div class="send-container">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-bar-to-right"
                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M14 12l-10 0"></path>
                        <path d="M14 12l-4 4"></path>
                        <path d="M14 12l-4 -4"></path>
                        <path d="M20 4l0 16"></path>
                    </svg>
                    <p>Récupérer</p>
                </div>
                <div class="direction-name-container">
                    <p class="font-bold">{{ clientData.addressDeliver.name }}</p> <svg xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-map-pin-filled" width="24" height="24" viewBox="0 0 24 24"
                        stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                            stroke-width="0" fill="currentColor"></path>
                    </svg>
                </div>
                <p class="font-bold direction-text">{{ clientData.addressDeliver.address }}</p>
                <div class="flex-container">
                    <p class="font-bold direction-text">{{ clientData.addressDeliver.city }}</p>
                    <p class="font-bold direction-text">{{ clientData.addressDeliver.postalCode }}</p>
                </div>
                <div class="negative-margin-top-14">
                    <div class="flex-container ">
                        <p>Dépôt : </p>
                        <p>{{ clientData.addressDeliver.deposit }}</p>
                    </div>
                    <p class="negative-margin-top-14">{{ clientData.addressDeliver.depositName }}</p>

                </div>
                <div class="flex-container negative-margin-top-14">
                    <p>Photo: </p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-down-line-filled"
                        width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M9 5l-.117 .007a1 1 0 0 0 -.883 .993v4.999l-2.586 .001a2 2 0 0 0 -1.414 3.414l6.586 6.586a2 2 0 0 0 2.828 0l6.586 -6.586a2 2 0 0 0 .434 -2.18l-.068 -.145a2 2 0 0 0 -1.78 -1.089l-2.586 -.001v-4.999a1 1 0 0 0 -1 -1h-6z"
                            stroke-width="0" fill="currentColor"></path>
                        <path d="M15 2a1 1 0 0 1 .117 1.993l-.117 .007h-6a1 1 0 0 1 -.117 -1.993l.117 -.007h6z"
                            stroke-width="0" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div class="negative-margin-top-5">
            <p>Commentaire pour le cordeur</p>
            <TextArea :value="clientData.commentary" :onFormChange="handleCommentChange"></TextArea>
        </div>
    </div>
    <div class="raquette-container">
        <div class="navigation-div">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="24"
                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M15 6l-6 6l6 6"></path>
                </svg>
            </div>
            <p class="font-bold">Raquette 2</p>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="24"
                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 6l6 6l-6 6"></path>
                </svg>
            </div>
        </div>
    </div>
</template>direction-text

<script>
import TextArea from "../Inputs/TextArea.vue";
export default {
    name: 'App',
    components: {
        TextArea
    },
    methods: {
        handleCommentChange(e) {
            console.log('test kimo e', e)
            /* clientData.commentary = e */
        }
    },
    data() {
        return {
            clientData: {
                commandNumber: '7851354',
                clientName: 'M. LAMY Jérémy',
                subscription: 'non',
                addressRecover: {
                    name: 'Tennis Club du Grand Versailles',
                    address: '57 Rue Rémont',
                    city: 'Versailles',
                    postalCode: '78000',
                    deposit: 'per le client',
                },
                addressDeliver: {
                    name: 'Picard',
                    address: '67 Avenue du Général Leclerc',
                    city: 'Boulogne',
                    postalCode: '92000',
                    deposit: 'per autre',
                    depositName: 'Mme LEGRAND Martine'
                },
                commentary: 'Laisser des précisions pour le cordeur '
               /*  raquettes : [

                ] */

            }
        }
    }

}
</script>

<style scoped>
.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.client-info-container {
    text-align: left;
}

.header-container {
    font-size: 20px;
    font-weight: 600;
}

.text-icon-container {
    margin-top: -18px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
}

.send-container {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: -12px;
}

.direction-name-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.flex-container {
    display: flex;
    align-items: center;
    gap: 6px;
}

.negative-margin-top-5 {
    margin-top: -5px;
}

.negative-margin-top-14 {
    margin-top: -14px;
}

.negative-margin-bottom-20 {
    margin-bottom: -20px;
}

.font-bold {
    font-weight: 600
}

.direction-text {
    margin-top: -12px;
}

.separator {
    border: 1px solid black;

    margin: auto;
    border-radius: 12px;
}

.raquette-container {
    border: 1px solid black;
    border-radius: 12px;
}

.navigation-div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
}
</style>