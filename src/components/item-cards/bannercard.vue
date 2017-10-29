<template>
  <div class="banner-card" :style="{backgroundColor: cardStyle.backgroundColor}">
    <div>
      {{cardInfo.item}}
    </div>
    <div :style="{color: cardStyle.color}">
      {{cardInfo.content}}
    </div>
    <img :src="cardInfo.imgUrl" />
  </div>
</template>
<script>
export default {
  name: 'banner-card',
  data () {
    return {
    }
  },
  props: {
    cardInfo: {
      type: Object
    },
    cardStyle: {
      backgroundColor: String,
      color: String
    }
  }
}
</script>
<style lang="scss" scoped>
.banner-card {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 3.34rem;
  height: 0.93rem;
  margin: 0.07rem auto;
  >img{
    width: 0.91rem;
  }
  >:first-child {
    font-size:0.14rem;
    color:#000000;
    text-align:left;
  }
  >:nth-child(2){
    font-size:0.12rem;
    color:#c1a485;
    text-align:center;
  }
}
</style>
