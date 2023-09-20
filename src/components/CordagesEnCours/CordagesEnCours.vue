<template>
    <div>
        <div class="header-container">
            <div @click="() => this.$router.push({ name: 'MainPage' })">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="24"
                    height="24" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M15 6l-6 6l6 6"></path>
                </svg>
            </div>

            <p>Cordages en cours</p>
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
            <div class="text-icon-container">
                <p>Ajouter un cordage</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24"
                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 5l0 14"></path>
                    <path d="M5 12l14 0"></path>
                </svg>
            </div>
        </div>
        <InfoTable :itemsList="cordages" :filters="filters" tableTitle='Commande' tableSubtitle="État"
            navigationLink="FicheCordage" />
    </div>
</template>

<script>
import InfoTable from '../Global/InfoTable.vue';
export default {
    name: 'App',
    components: { InfoTable },
    methods: {
        methods: {
            handleFilterData(filter) {
                switch (filter) {
                    case 'commandNumber':
                        break;
                    case 'date':
                        break;
                    case 'status':
                        break;
                }

            }
        }
    },
    data() {
        return {
            filters: [
                {
                    name: 'Nª de commande',
                    field: 'commandNumber'
                },
                {
                    name: 'Date',
                    field: 'date'
                },
                {
                    name: 'État',
                    field: 'status'
                }
            ],
            cordages: [
                {
                    commandNumber: 1234567,
                    status: 'Cordage validé',
                },
                {
                    commandNumber: 1234567,
                    status: 'Dépôt raquette',
                },
                {
                    commandNumber: 1234567,
                    status: 'Changement cordage',
                },
                {
                    commandNumber: 1234567,
                    status: 'Retour raquette',
                },
                {
                    commandNumber: 1234567,
                    status: 'Cordage validé',
                },
                {
                    commandNumber: 1234567,
                    status: 'Cordage validé',
                },
                {
                    commandNumber: 1234567,
                    status: 'Dépôt raquette',
                },
                {
                    commandNumber: 1234567,
                    status: 'Changement cordage',
                },
                {
                    commandNumber: 1234567,
                    status: 'Retour raquette',
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
</style>