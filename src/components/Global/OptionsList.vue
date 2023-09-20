<template>
  <div>
    holaaaaa
    <div v-if="bigCard" class="item-container">
      <div
        v-for="(item, index) of list"
        :key="index"
        :class="['big-item', { isSelected: item.id === form }]"
        @click="handleSelection(item)"
      >
        <strong>{{ item.label }} </strong>
        <p>{{ item.text }}</p>
        <p class="advice">{{ item.advice }}</p>
      </div>
    </div>
    <div v-else class="item-container">
      <div
        v-for="(item, index) of list"
        :key="index"
        :class="['item', { isSelected: item.id === form }]"
        @click="handleSelection(item)"
      >
        <strong>{{ item.label }} </strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  props: ["list", "onFormChange", "form", "field", "bigCard"],
  methods: {
    handleSelection(item) {
      this.onFormChange(this.field, item.id);
    },
  },
};
</script>

<style scoped>
.item-container {
  display: flex;
  gap: 16px;
  margin-top: 16px;
  flex-wrap: wrap;
}
.item {
  border-radius: 13px;
  background: var(--green, #eae604);
  padding: 8px;
}
.big-item {
  text-align: left;
  padding-top: 12px;
  padding: 8px;
  width: 100%;
  border-radius: 13px;
  background: var(--green, #eae604);
}
.isSelected {
  background: var(--darkGreen, #d1ce04);
}
.advice {
  font-size: 8px;
}
</style>
