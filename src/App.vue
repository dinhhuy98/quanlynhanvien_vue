<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
    margin:0px;
    padding: 0px;
}
body{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
}
</style>
