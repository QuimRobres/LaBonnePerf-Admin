<template>
  <div class="form-group">
    <label for="date" class="label">{{ title }}</label>
    <div class="input-container">
      <input
        v-if="title != 'Expiration'"
        type="date"
        id="date"
        class="input"
        :placeholder="title"
        @change="handleChange"
        :max="getCurrentDate()"
      />
      <input
        v-else
        class="input"
        type="text"
        maxlength="5"
        v-model="formattedDate"
        @input="formatDate"
        placeholder="MM/YY"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DateInput",
  props: ["title", "onFormChange", "field"],
  data() {
    return {
      formattedDate: '', // Almacena la fecha en formato MM/YY
    };
  },
  methods: {
    handleChange(e) {
      this.onFormChange(this.field, e.target.value);
    },
    formatDate() {
    let inputDate = this.formattedDate;

    if (this.formattedDate === '/') {
      this.formattedDate = '';
    }

    if (this.formattedDate.length === 2 && !this.formattedDate.includes('/')) {
      this.formattedDate += '/';
      return;
    }

    let dateRegex = /^(\d{2})\/(\d{2})$/;
    let match = inputDate.match(dateRegex);

    if (match) {
      let month = match[1];
      let year = match[2];

      console.log('Mes:', month);
      console.log('Año:', year);
    } else {
      // Si la fecha no tiene el formato esperado, puedes manejarlo aquí (por ejemplo, mostrar un mensaje de error)
      console.log('Formato de fecha no válido');
    }
},
    getCurrentDate() {
      const now = new Date();
      const year = now.getFullYear();
      let month = now.getMonth() + 1;
      let day = now.getDate();

      // Asegurarse de que el mes y el día tengan dos dígitos
      if (month < 10) {
        month = `0${month}`;
      }
      if (day < 10) {
        day = `0${day}`;
      }

      return `${year}-${month}-${day}`;
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
</style>
