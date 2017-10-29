<template>
  <div class="hello">
    <banner-card :cardInfo="bannercardInfo" :cardStyle="cardStyle1"></banner-card>
    <banner-card :cardInfo="bannercardInfo" :cardStyle="cardStyle2"></banner-card>
    <div class="cards clearfix">
      <card v-for="(item, key) in itemInfos" :key="key" :cardInfo="item" :cardStyle="getCardColor(key + 1)" :style="{marginLeft: key % 2 === 0 ? '0.205rem' : '0.07rem'}"></card>
    </div>
  </div>
</template>

<script>
import bannerCard from './item-cards/bannercard'
import {mapGetters} from 'vuex'
import card from './item-cards/card1'
export default {
  name: 'hello',
  components: {bannerCard, card},
  computed: {
    ...mapGetters(['itemInfos'])
  },
  data () {
    return {
      bannercardInfo: {
        item: 'Hat',
        content: '测试',
        imgUrl: '/static/img/test1.png'
      },
      cardStyle1: {
        backgroundColor: '#efdecc',
        color: '#c1a485'
      },
      cardStyle2: {
        backgroundColor: '#fbe0e0',
        color: '#c18590'
      },
      cardStyles: ['#FFFFFF', '#efdecc', '#ceefcc', '#fbe0e0']
    }
  },
  methods: {
    getCardColor: function (key) {
      return Math.floor(key / 2) % 2 === 0 ? this.cardStyles[0] : this.cardStyles[key % (this.cardStyles.length + 1)]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  padding-top: 0.13rem;
  padding-bottom:  0.13rem;
  >.cards {
    float: left;
  }
}
</style>
