<template>
    <div class="table-container" @click="isFiltersOpen ? isFiltersOpen = false : null">
        <div class="table-header">

            <p class="table-large-text">{{ tableTitle }}</p>
            <p class="table-small-text">{{ tableSubtitle }}</p>

            <div class="flex-container">
                <p class="table-medium-text">
                    Trier
                </p>
                <div @click="isFiltersOpen = true" @click.stop>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-filter-filled" width="24"
                        height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M20 3h-16a1 1 0 0 0 -1 1v2.227l.008 .223a3 3 0 0 0 .772 1.795l4.22 4.641v8.114a1 1 0 0 0 1.316 .949l6 -2l.108 -.043a1 1 0 0 0 .576 -.906v-6.586l4.121 -4.12a3 3 0 0 0 .879 -2.123v-2.171a1 1 0 0 0 -1 -1z"
                            stroke-width="0" fill="currentColor"></path>
                    </svg>
                </div>

            </div>
        </div>
        <div class="thick-separator"></div>
        <div class="list-container">
            <div v-for="(item, index) in itemsList" :key="{ index }">
                <div class="item-container" @click="() => handleNavigation(item)">
                    <div class="table-content">
                        <div>
                            <p v-show="item.commandNumber" class="table-large-text">Nº {{ item.commandNumber }}</p>
                            <div class="flex-container">
                                <p v-show="item.name" class="table-large-text">{{ item.name }}</p>
                                <p v-show="item.surname" class="table-large-text">{{ item.surname }}</p>
                            </div>
                        </div>
                        <div>
                            <p v-show="item.status" class="table-small-text">{{ item.status }}</p>
                            <p v-show="item.date" class="table-small-text">{{ item.date }}</p>
                            <p v-show="item.subscription" class="table-small-text">{{ item.subscription }}</p>
                            <p v-show="item.nb" class="table-small-text">{{ item.nb }}</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right"
                            width="34" height="34" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M9 6l6 6l-6 6"></path>
                        </svg>

                    </div>

                </div>
                <div v-show="index < itemsList.length - 1" class="separator"></div>
            </div>
        </div>

    </div>
    <div v-show="isFiltersOpen" class="filter-container">
        <p class="modal-medium-text"> Trier par</p>
        <div class="separator"></div>
        <p v-for="(filter, index) in filters" :key="index" class="modal-small-text">{{ filter.name }}</p>
    </div>
</template>

<script>
export default {
    name: 'App',
    props: [
        'itemsList',
        'tableTitle',
        'tableSubtitle',
        'filters',
        'navigationLink'

    ],
    methods: {
        handleNavigation(item) {
            this.$router.push({ name: this.navigationLink, params: { commandNumber: item.commandNumber || item.id } })

        }
    },
    data() {
        return {
            isFiltersOpen: false
        }
    },

}
</script>

<style scoped>
.table-container {
    position: relative;
    border: 1px solid black;
    border-radius: 12px;

}

.table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;

}

.table-large-text {
    font-size: 20px;
    font-weight: 600;
}

.table-medium-text {
    font-size: 14px;

}

.modal-text-medium {
    font-size: 14px;
    font-weight: 600;
}

.table-small-text {
    font-size: 10px;
    font-weight: 600;
}

.table-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-small-text {
    font-size: 10px;
    margin-top: 12px;
}

.flex-container {
    display: flex;
    align-items: center;
    gap: 10px;
}

.thick-separator {
    border: 2px solid black;
    width: 95%;
    margin: auto;
    margin-top: -12px;
    border-radius: 12px;
}

.separator {
    border: 1px solid black;
    width: 95%;
    margin: auto;
    margin-top: -7px;
    margin-bottom: -5px;
    border-radius: 12px;
}

.list-container {
    overflow: scroll;
    max-height: 80vh;
}

.item-container {
    padding: 0px 10px;
}

.filter-container {
    position: absolute;
    width: 100px;
    border: 1px solid black;
    background-color: white;
    padding: 0px 16px;
    text-align: left;
    border-radius: 12px;
    top: 0;
    right: 0;
    margin-top: 125px;
    margin-right: 30px;
}
</style>