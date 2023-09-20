<template>
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
            <p>{{ clientData.birthdate }}</p>
        </div>

    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            clientData: {
                surname: 'LAMY',
                name: 'Jérémy',
                birthdate: 'JJ/MM/AAAA',
                phonenumber: '0600000000',
                email: '0600000000',
                subscription: true,
                typeSubscription: null

            }
        }
    }
}
</script>

<style scoped>
.flex-container {
    display: flex;
    gap: 8px;
}

.font-bold {
    font-weight: 600;
}

.negative-margin-top-18 {
    margin-top: -18px;
}
</style>