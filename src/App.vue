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
  /* overflow: hidden; */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;

}

#app>div {
  padding: 0px 30px;
}
</style>
