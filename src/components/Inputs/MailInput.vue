<template>
  <div class="form-group">
    <label for="email" class="label">E-mail</label>
    <div class="input-container">
      <input
        type="email"
        id="email"
        class="input"
        placeholder="E-mail"
        @change="handleChange"
      />
    </div>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>
<script>
export default {
  name: "MailInput",
  props: ["onFormChange", "field", "errorMessage"],
  methods: {
    handleChange(e) {
      this.onFormChange(this.field, e.target.value);
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

.input {
  flex: 1;
  width: 100%;
  height: 41px;
  padding-left: 16px;
  padding-top: 4px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  font-size: 16px;
  color: #333;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
}

.input:focus {
  outline: none;
  border-color: #3498db;
}

.error-message {
  font-style: italic;
  font-size: 10px;
}
</style>
