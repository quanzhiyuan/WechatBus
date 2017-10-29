<template>
<div class="card" :style="{backgroundColor: cardStyle}" @click="goDetail">
  <div>{{cardInfo.item}}</div>
  <img :src="cardInfo.imgUrl" />
</div>
</template>
<script>
export default {
  name: 'card',
  data () {
    return {
    }
  },
  methods: {
    goDetail: function () {
      this.$router.push({path: '/itemdetail/' + this.cardInfo._id})
    }
  },
  props: {
    cardInfo: {
      type: Object
    },
    cardStyle: String
  }
}
</script>
<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 1.635rem;
  height: 1.1rem;
  float: left;
  margin-top: 0.09rem;
  >img{
    width: 0.55rem;
    max-height: 100%;
  }
}
</style>
