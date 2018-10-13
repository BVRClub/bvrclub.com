<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html {
  background-color: black;
}

@font-face {
  font-family: "Bauhaus";
  src: url('./assets/Bauhaus-93_6274.ttf');
  font-weight: 400;
  font-style: normal;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: red;
  margin-top: 60px;
  background-color: black;
}

p {
  color: white;
  margin: 0 10vw;
}
</style>
