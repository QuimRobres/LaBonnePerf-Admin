<template>
    <div class="form-group">
        <label for="text" class="label">{{ title }}</label>
        <textarea
            ref="textarea"
            type="text"
            :id="id"
            class="textarea"
            :placeholder="title"
            @input="handleChange"
            :value="value"
        ></textarea>
    </div>
  </template>
  <script>
  export default {
    name: "App",
    props: ["title", "id", "field", "extraField", "onFormChange", "value"],
    data() {
        return {
            numberRows: 2,
        };
    },
    methods: {
      handleChange(e) {
      let element = this.$refs["textarea"];
      element.style.height = "auto"; // Restablecer la altura a "auto" para evitar la altura fija
  
      const scrollHeight = element.scrollHeight;
      element.style.height = scrollHeight + "px"; // Establecer la altura según el contenido

      // Calcular el número de filas en función del contenido
      const lineHeight = parseInt(getComputedStyle(element).lineHeight, 10);
      const contentRows = Math.ceil(scrollHeight / lineHeight);
      
      this.numberRows = Math.max(2, contentRows); // Asegurar un mínimo de 2 filas

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
  
  .textarea {
    min-height: 55px;
    height: auto;
    flex: 1;
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 6px;
    padding-bottom: 6px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
    font-size: 16px;
    color: #333;
    transition: border-color 0.3s ease;
    box-sizing: border-box;
  }
  
  .textarea:focus {
    outline: none;
    border-color: #3498db;
  }
  </style>