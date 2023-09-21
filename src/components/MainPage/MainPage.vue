<template>
    <div>
        <div class="header-container">
            <p class="title-text">Mon tableu de bord</p>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-power" width="24" height="24"
                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 6a7.75 7.75 0 1 0 10 0"></path>
                    <path d="M12 4l0 8"></path>
                </svg>
            </div>
        </div>
        <div class="buttons-container">
            <div class="navigation-button-container">
                <div class="navigation-button" @click="() => this.$router.push({ name: 'CordagesEnCours' })">
                    <p>Cordages en cours</p>
                </div>
                <div class="navigation-button" @click="() => this.$router.push({ name: 'CordagesPasses' })">
                    <p>Cordages passés</p>
                </div>
            </div>
            <div class="navigation-button-container">
                <div class="navigation-button" @click="() => this.$router.push({ name: 'RelationClient' })">
                    <p>Relation client</p>
                </div>
                <div class="navigation-button" @click="() => this.$router.push({ name: 'Stock' })">
                    <p>Stock</p>
                </div>
            </div>
        </div>
        <div class="bottom-container">
            <p class="title-text">Ajout rapide</p>
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
            <div class="text-icon-container">
                <p>Ajouter un produit</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="24" height="24"
                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 5l0 14"></path>
                    <path d="M5 12l14 0"></path>
                </svg>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            options: [
                {
                    label: 'Cordages en cours',
                    navigation: 'CordagesEnCours'
                },
                {
                    label: 'Cordages passés',
                    navigation: 'CordagesPasses'
                },
                {
                    label: 'Relation client',
                    navigation: 'RelationClient'
                },
                {
                    label: 'Stock',
                    navigation: 'Stock'
                }

            ]
        }
    },
    methods: {
        handleNavigation() {
            this.$router.push({ name: 'CordagesEnCours' })
            console.log('guey')
        }
    }
}
</script>

<style scoped>
.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center
}

.header-container p {
    width: 122px;
}

.title-text {
    font-weight: 600;
    font-size: 20px;
    text-align: left
}

.buttons-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.navigation-button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navigation-button {
    text-align: center;
    border-radius: 13px;
    background: #EAE604;
    height: 74px;
    width: 124px;
    padding: 2px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* .navigation-button:first-child {
    margin-left: 0px;
}

.navigation-button:last-child {
    margin-right: 0px;
} */
.navigation-button p {
    padding: 10px;
}

.bottom-container {
    margin-top: 32px;
}

.text-icon-container {
    margin-top: -18px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
}

.text-icon-container svg {
    margin-top: -4px;
}
</style>