<template>
  <div class="form-group">
    <label for="password" class="label">Mot de passe</label>
    <div class="input-container">
      <input
        id="password"
        class="input"
        :type="showPassword ? 'text' : 'password'"
        placeholder="Mot de passe"
        @change="handleChange"
      />
      <button @click="togglePasswordVisibility" class="eye-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M12 5C7 5 2.73 8.11 1 12.5C2.73 16.89 7 20 12 20C17 20 21.27 16.89 23 12.5C21.27 8.11 17 5 12 5ZM12 17.5C9.24 17.5 7 15.26 7 12.5C7 9.74 9.24 7.5 12 7.5C14.76 7.5 17 9.74 17 12.5C17 15.26 14.76 17.5 12 17.5ZM12 9.5C10.34 9.5 9 10.84 9 12.5C9 14.16 10.34 15.5 12 15.5C13.66 15.5 15 14.16 15 12.5C15 10.84 13.66 9.5 12 9.5Z"
            fill="black"
          />
        </svg>
        <!-- <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i> -->
      </button>
    </div>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  props: ["errorMessage", "onFormChange", "field"],
  data() {
    return {
      showPassword: false,
    };
  },
  methods: {
    handleChange(e) {
      this.onFormChange(this.field, e.target.value);
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>
<style scoped>
.form-group {
  position: relative;
  margin-bottom: 20px;
  padding-top: 22px;
}

.label {
  font-size: 14px;
  color: rgb(255, 255, 255);
  margin-bottom: 5px;
  position: absolute;
  left: 0;
  top: 0;
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  transition: border-color 0.3s ease;

  border: 1px solid #ccc;
}

.input {
  flex: 1;
  width: 100%;
  height: 41px;
  padding-left: 16px;
  padding-top: 4px;
  border: 1px solid rgba(204, 204, 204, 0);
  border-radius: 8px;
  background-color: #fff;
  font-size: 16px;
  color: #333;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
}

.eye-button {
  position: absolute;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  top: 6px;
  right: 12px;
}

.eye-button:focus {
  outline: none;
}

.eye-button i {
  color: #ccc;
}

.input:focus {
  border-color: #3498db;
}

.error-message {
  font-style: italic;
  font-size: 10px;
}
</style>
