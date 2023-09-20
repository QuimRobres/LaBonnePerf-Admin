<template>
    <div>
        <div class="flex-container">
            <p>Nom : </p>
            <p>{{ clientData.name }}</p>
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
                
            }
        }
    }
}
</script>

<style scoped></style>