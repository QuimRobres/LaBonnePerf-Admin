<template>
    <p class="title">Connexion</p>

    <MailInput field="email" :onFormChange="onFormChange" />
    <PasswordInput field="password" :onFormChange="onFormChange" />
    <div class="forgot-password">
        <span @click="openModal">Mot de passe oublié</span>
    </div>
    <p v-if="formError !== ''" class="error-message">{{ formError }}</p>
    <div class="login-button-container">
        <div class="login-button" @click="login">Me connecter</div>
    </div>

    <!--  <div class="inscription-link">
        <span @click="inscription">Inscription</span>
    </div> -->
    <div v-if="isForgotPasswordModal" class="modal-overlay">
        <div class="modal">
            <div class="modal-header">
                <h2>Nouveau mot de passe</h2>
                <div class="modal-close" @click="closeModal">&times;</div>
            </div>
            <div v-if="!changePasswordOk">
                <MailInput field="email" :onFormChange="onFormChange" />
                <div class="login-button-container" @click="recoverPassword">
                    <div class="login-button">Valider</div>
                </div>
                <div class="login-button-container" @click="closeModal">
                    <div class="annuler-button">Annuler</div>
                </div>
            </div>
            <p v-else>Check your email!</p>
        </div>
    </div>
    <div v-if="isResetPasswordModal" class="modal-overlay">
        <div class="modal">
            <div class="modal-header">
                <h2>Nouveau mot de passe</h2>
                <div class="modal-close" @click="closeModal">&times;</div>
            </div>
            <div>
                <PasswordInput field="password" :onFormChange="onFormChange" />
                <div class="login-button-container" @click="resetPassword">
                    <div class="login-button">Valider</div>
                </div>
                <div class="login-button-container" @click="closeModal">
                    <div class="annuler-button">Annuler</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MailInput from "../Inputs/MailInput.vue";
import PasswordInput from "../Inputs/PasswordInput.vue";

export default {
    name: 'App',
    components: {
        MailInput,
        PasswordInput,
    },
    data() {
        return {
            isForgotPasswordModal: false,
            isResetPasswordModal: false,
            changePasswordOk: false,
            formError: "",
            form: {
                email: "",
                password: "",
            },
            token: ""
        };
    },
    mounted() {
        console.log("MOUNTED: ", this.$route.params);
        let params = this.$route.params;
        if (params.email && params.token && params.email !== '' && params.token !== '') {
            this.onFormChange('email', params.email);
            this.token = params.token;
            this.isResetPasswordModal = true;
        }
    },
    methods: {
        openModal() {
            this.changePasswordOk = false;
            this.isForgotPasswordModal = true;
        },
        closeModal() {
            this.isForgotPasswordModal = false;
            this.isResetPasswordModal = false;
        },
    }
}
</script>

<style scoped>
.title {
    font-size: 28px;
    color: #fff;
    font-weight: 600;
    text-align: left;
    width: 100px;
}

.description {
    font-size: 12px;
    color: #fff;
    text-align: left;
    font-weight: 400;
    line-height: 130%;
}

.forgot-password {
    width: 100%;
    text-align: right;
    color: #fff;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
}

.login-button-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 24px;
    cursor: pointer;
}

.login-button {
    width: 244px;
    padding: 8px 26px;
    border-radius: 8px;
    background: var(--green, #eae604);
    color: var(--black, #0d0d0d);
    font-size: 14px;
    font-weight: 600;
}

.annuler-button {
    width: 244px;
    padding: 8px 26px;
    border-radius: 8px;
    border: 2px #eae604 solid;
    color: var(--black, #0d0d0d);
    font-size: 14px;
    font-weight: 600;
}

.inscription-link {
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 14px;
    margin-top: 16px;
    cursor: pointer;
    text-decoration: underline;
}

.error-message {
    font-style: italic;
    font-size: 14px;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.modal-close {
    height: 26px;
    width: 26px;
    cursor: pointer;
}

.modal-header {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>