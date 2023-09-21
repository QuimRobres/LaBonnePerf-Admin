<template>
  <div class="flex flex-column align-center padding-bottom-20">
    <p class="color-orange font-size-18">
      <strong>Cordage en cours</strong>
    </p>
    <div
      class="flex justify-space-between width-80 position-relative"
      v-if="status !== null"
    >
      <div class="grey-bar"></div>
      <div
        class="z-index-10 border-radius-100 border-1px-solid-eae604 width-16 height-16 font-size-10 position-relative"
        :class="{
          'background-eae604': status.fulfillment_status === 'not_fulfilled',
          'background-white': status.fulfillment_status !== 'not_fulfilled',
        }"
      >
        <span class="position-relative top-2"><strong>1</strong></span>
        <span class="position-absolute top-22 left-neg-11"
          ><strong>Cordage validé</strong></span
        >
      </div>
      <div
        class="z-index-10 border-radius-100 border-1px-solid-eae604 width-16 height-16 font-size-10 position-relative opacity-0-7"
        :class="{
          'background-eae604':
            status.fulfillment_status === 'partially_fulfilled',
          'background-white':
            status.fulfillment_status !== 'partially_fulfilled',
        }"
      >
        <span class="position-relative top-2"><strong>2</strong></span>
        <span class="position-absolute top-22 left-neg-12"
          ><strong>Dépôt raquette</strong></span
        >
      </div>
      <div
        class="z-index-10 border-radius-100 border-1px-solid-eae604 width-16 height-16 font-size-10 position-relative opacity-0-7"
        :class="{
          'background-eae604': status.fulfillment_status === 'fulfilled',
          'background-white': status.fulfillment_status !== 'fulfilled',
        }"
      >
        <span class="position-relative top-2"><strong>3</strong></span>
        <span class="position-absolute top-22 left-neg-22"
          ><strong>Changement cordage</strong></span
        >
      </div>
      <div
        class="z-index-10 border-radius-100 border-1px-solid-eae604 width-16 height-16 font-size-10 position-relative opacity-0-7"
        :class="{
          'background-eae604':
            status.fulfillment_status === 'partially_shipped' ||
            status.fulfillment_status === 'shipped',
          'background-white':
            status.fulfillment_status !== 'partially_shipped' ||
            status.fulfillment_status !== 'shipped',
        }"
      >
        <span class="position-relative top-2"><strong>4</strong></span>
        <span class="position-absolute top-22 left-neg-11"
          ><strong>Retour raquette</strong></span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CordageEnCours",
  props: ["status"],
};
</script>

<style scoped>
.grey-bar {
  height: 7px;
  background: #d9d9d9;
  position: absolute;
  width: 100%;
  z-index: 1;
  top: 5px;
}
.flex {
  display: flex;
}
.flex-column {
  flex-direction: column;
}
.align-center {
  align-items: center;
}
.padding-bottom-20 {
  padding-bottom: 20px;
}
.color-orange {
  color: var(--orange, #ff7300);
}
.font-size-18 {
  font-size: 18px;
}
.justify-space-between {
  justify-content: space-between;
}
.width-80 {
  width: 80%;
}
.position-relative {
  position: relative;
}
.position-absolute {
  position: absolute;
}
.z-index-1 {
  z-index: 1;
}
.z-index-10 {
  z-index: 10;
}
.top-5 {
  top: 5px;
}
.background-d9d9d9 {
  background: #d9d9d9;
}
.background-eae604 {
  background: #eae604;
}
.border-radius-100 {
  border-radius: 100%;
}
.width-16 {
  width: 16px;
}
.height-16 {
  height: 16px;
}
.font-size-10 {
  font-size: 10px;
}
.opacity-0-7 {
  opacity: 0.7;
}
.left-neg-11 {
  left: -11px;
}
.left-neg-12 {
  left: -12px;
}
.left-neg-22 {
  left: -22px;
}
.top-2 {
  top: 2px;
}
.top-22 {
  top: 22px;
}
.background-white {
  background: white;
}
.border-1px-solid-eae604 {
  border: 1px solid #eae604;
}
</style>
