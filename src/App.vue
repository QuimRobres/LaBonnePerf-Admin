<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* ::-webkit-scrollbar {
  display: none;
}
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: var(
    --background,
    linear-gradient(225deg, #a73d01 0%, #ea6c04 100%)
  );
  height: 100%;
  padding: 30px;
}
</style>
