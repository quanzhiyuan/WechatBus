<template lang="html">
<div class="itemdetail">
   <div class="itembanner">
     <mt-swipe :auto="0">
        <mt-swipe-item v-for="(item,key) in itemInfo.detailImgs" :key="key">
          <div class="bannerwrapper"><img :src="item" /></div>
          </mt-swipe-item>
     </mt-swipe>
   </div>
  <div class="line"></div>
  <div class="description">{{itemInfo.description}}
  </div>
  <div class="line"></div>
  <div class="type">
    <div  v-for="(item, key) in itemInfo.type">
      <div class="typetitle">{{item.name}}</div>
      <div class="typevalue">
        <span class="typevalueitem" v-for="(item, key) in item.value">{{item}}</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'itemdetail',
  data () {
    return {
    }
  },
  computed: {
    itemInfo: function () {
      return this.$store.getters.getItemInfo(this.$route.params._id)
    }
  },
  created: function () {
  }
}
</script>

<style lang="scss">
@import '../scss/index.scss';
.itemdetail {
  >.itembanner {
    width: 100%;
    height: 3.60rem;
    .bannerwrapper{
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .line{
    width: 100%;
    height: 0.1rem;
    background: #FFFFFF;
  }
  .description{
    font-size: 0.16rem;
    color: $font-color;
    line-height: 30px;
    text-align: left;
    padding: 0.12rem;
  }
  .type{
    padding: 0.12rem;
    text-align: left;
    > div {
      margin-bottom: 0.1rem;
      >.typetitle {
        font-size:  $font-size-bg;
        font-weight: 400;
        color: $font-color;
        margin-bottom: 0.1rem;
      }
      >.typevalue {
        >.typevalueitem {
          display: inline-block;
          font-size: $font-size-md;
          background-color: #FFFFFF;
          margin-right: 0.1rem;
          line-height: 0.2rem;
          height: 0.2rem;
          padding: 0 0.06rem;
          border-radius: 0.1rem;
        }
      }
    }
  }
}
</style>
