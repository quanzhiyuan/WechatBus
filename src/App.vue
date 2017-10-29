<template>
  <div id="app">
    <w-header></w-header>
    <router-view/>
  </div>
</template>

<script>
import wHeader from './components/header'
export default {
  name: 'app',
  components: {wHeader}
}
</script>

<style lang="scss">
@import './scss/index';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: $backgroundColor;
  width: 3.75rem;
  min-height: 6.67rem;
}
</style>
