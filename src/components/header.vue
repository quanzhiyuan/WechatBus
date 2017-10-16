<template>
  <div class="header">
    <img class="menu" src="/static/img/header-left.png"/>
    <div>{{title}}</div>
    <img class="search" src="/static/img/search.png" />
  </div>
</template>
<script>
export default {
  name: 'header',
  data () {
    return {
      title: '首页'
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../scss/index';
.header{
  height: $header-height;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.15rem;
  color: $font-color;
  text-align: center;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  background-color: #FFFFFF;
  > .menu {
    width: 0.2rem;
  }
  > .search{
    width: 0.135rem;
  }
}
</style>
