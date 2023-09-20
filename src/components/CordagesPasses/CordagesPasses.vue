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
            <p>Cordages passés</p>
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
            navigationLink="CordagesPasses" />
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
                    name: 'Nª de commande',
                    field: 'commandNumber'
                },
                {
                    name: 'Date',
                    field: 'date'
                },

            ],
            cordages: [
                {
                    commandNumber: 1234567,
                    date: 'JJ/MM/AAAA'
                },
                {
                    commandNumber: 1234567,
                    date: 'JJ/MM/AAAA'
                },
                {
                    commandNumber: 1234567,
                    date: 'JJ/MM/AAAA'
                },
                {
                    commandNumber: 1234567,
                    date: 'JJ/MM/AAAA'
                },
                {
                    commandNumber: 1234567,
                    date: 'JJ/MM/AAAA'
                },
                {
                    commandNumber: 1234567,
                    date: 'JJ/MM/AAAA'
                },
                {
                    commandNumber: 1234567,
                    date: 'JJ/MM/AAAA'
                },
                {
                    commandNumber: 1234567,
                    date: 'JJ/MM/AAAA'
                },
                {
                    commandNumber: 1234567,
                    date: 'JJ/MM/AAAA'
                },
                {
                    commandNumber: 1234567,
                    date: 'JJ/MM/AAAA'
                },
                {
                    commandNumber: 1234567,
                    date: 'JJ/MM/AAAA'
                },
                {
                    commandNumber: 1234567,
                    date: 'JJ/MM/AAAA'
                },
                {
                    commandNumber: 1234567,
                    date: 'JJ/MM/AAAA'
                },
                {
                    commandNumber: 1234567,
                    date: 'JJ/MM/AAAA'
                },
                {
                    commandNumber: 1234567,
                    date: 'JJ/MM/AAAA'
                },
                {
                    commandNumber: 1234567,
                    date: 'JJ/MM/AAAA'
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