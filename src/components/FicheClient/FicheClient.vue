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
                <p>Fiche client</p>
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
            <div class="flex-container">
                <p class="font-bold">Nom : </p>
                <p>{{ clientData.surname }}</p>
            </div>
            <div class="flex-container negative-margin-top-18">
                <p class="font-bold">Prénom : </p>
                <p>{{ clientData.name }}</p>
            </div>
            <div class="flex-container negative-margin-top-18">
                <p class="font-bold">Date de naissance : </p>
                <p>{{ clientData.birthdate }}</p>
            </div>
            <div class="flex-container negative-margin-top-18">
                <p class="font-bold">Téléphone : </p>
                <p>{{ clientData.phonenumber }}</p>
            </div>
            <div class="flex-container negative-margin-top-18">
                <p class="font-bold">E-mail : </p>
                <p>{{ clientData.email }}</p>
            </div>
        </div>

        <div class="negative-margin-top-18">
            <p class="font-size-14">Abonnement</p>
            <OptionsList :list="abonnementOptions" />
        </div>
        <div>
            <p class="font-size-14">Type abonnement</p>
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
                surname: 'LAMY',
                name: 'Jérémy',
                birthdate: 'JJ/MM/AAAA',
                phonenumber: '0600000000',
                email: 'nom.prénom@gmail.com',
                subscription: true,
                typeSubscription: null

            },
            abonnementOptions: [
                {
                    id: 1,
                    label: "Oui",
                },
                {
                    id: 2,
                    label: "Non",
                },
            ],
            abonnementTypeOptions: [
                {
                    id: 1,
                    label: "5 poses 45€",
                },
                {
                    id: 2,
                    label: "10 poses 85€",
                },
                {
                    id: 3,
                    label: "25 poses 200€",
                },
                {
                    id: 4,
                    label: "50 poses 350€",
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
</style>