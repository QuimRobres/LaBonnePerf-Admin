<template>
    <div>
        <div class="header-container">
            <div @click="() => this.$router.push({ name: 'MainPage' })">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="42"
                    height="42" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M15 6l-6 6l6 6"></path>
                </svg>
            </div>
            <p>Relation client</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24"
                viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 6l16 0"></path>
                <path d="M4 12l16 0"></path>
                <path d="M4 18l16 0"></path>
            </svg>
        </div>

        <InfoTable :itemsList="cordages" :filters="filters" tableTitle='Commande' tableSubtitle="Date"
            navigationLink="FicheClient" />
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

                }

            }
        }
    },
    data() {
        return {
            filters: [
                {
                    name: `Ordre d'ajout`,
                    field: 'orderAddition'
                },
                {
                    name: 'A-Z',
                    field: 'a-z'
                },
                {
                    name: 'A-Z',
                    field: 'a-z'
                },
                {
                    name: 'A-Z',
                    field: 'a-z'
                },
                {
                    name: 'Abonnement',
                    field: 'subscription'
                },
                {
                    name: `Pas d'abonnement`,
                    field: 'withoutSubscription'
                },

            ],
            cordages: [
                {
                    id: 1,
                    name: 'Nom',
                    surname: 'prénoms',
                    subscription: 'Oui'
                },
                {
                    id: 2,
                    name: 'Nom',
                    surname: 'prénoms',
                    subscription: 'Non'
                },
                {
                    id: 3,
                    name: 'Nom',
                    surname: 'prénoms',
                    subscription: 'Oui'
                },
                {
                    id: 4,
                    name: 'Nom',
                    surname: 'prénoms',
                    subscription: 'Oui'
                },
                {
                    id: 5,
                    name: 'Nom',
                    surname: 'prénoms',
                    subscription: 'Non'
                },
                {
                    id: 6,
                    name: 'Nom',
                    surname: 'prénoms',
                    subscription: 'Non'
                },
                {
                    id: 7,
                    name: 'Nom',
                    surname: 'prénoms',
                    subscription: 'Oui'
                },
                {
                    id: 8,
                    name: 'Nom',
                    surname: 'prénoms',
                    subscription: 'Non'
                },
                {
                    id: 9,
                    name: 'Nom',
                    surname: 'prénoms',
                    subscription: 'Oui'
                },
                {
                    id: 10,
                    name: 'Nom',
                    surname: 'prénoms',
                    subscription: 'Oui'
                },
                {
                    id: 11,
                    name: 'Nom',
                    surname: 'prénoms',
                    subscription: 'Oui'
                },
                {
                    id: 12,
                    name: 'Nom',
                    surname: 'prénoms',
                    subscription: 'Oui'
                }
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