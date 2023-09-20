<template>
  <div class="form-group">
    <label for="text">{{ title }}</label>
    <textarea ref="textarea" type="text" :id="id" class="textarea" maxlength="500" :placeholder="title"
      @input="onFormChange" :value="value"></textarea>
    <div>
      <p>{{ value.length }}/500</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  props: ["id", "field", "extraField", "onFormChange", "value"],
  data() {
    return {
      numberRows: 2,
    };
  },
  methods: {

  },
};
</script>
<style scoped>
.form-group {
  margin-top: -10px;
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
  border: 1px solid black;
  border-radius: 10px;
  background-color: #fff;
  font-size: 16px;
  box-sizing: border-box;
}

.textarea:focus {
  outline: none;

}
</style>