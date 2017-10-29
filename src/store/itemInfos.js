
const state = {
  itemInfos: [
    {
      _id: '1',
      item: 'SHORT',
      imgUrl: '/static/img/test2.png',
      detailImgs: [
        '/static/img/test2.png',
        '/static/img/test2.png',
        '/static/img/test2.png',
        '/static/img/test2.png',
        '/static/img/test2.png'
      ]
    },
    {
      _id: '2',
      item: 'SHORT',
      imgUrl: '/static/img/test2.png',
      detailImgs: [
        '/static/img/test2.png',
        '/static/img/test2.png',
        '/static/img/test2.png',
        '/static/img/test2.png',
        '/static/img/test2.png'
      ],
      description: '我的家的产品就是好就是好就是好就是好就是好就是好，我的家的产品就是好就是好就是好就是好就是好就是好',
      type: [
        {name: '颜色', value: ['红色', '蓝色', '黑色']},
        {name: '尺寸', value: ['大', '中', '小']}
      ]
    },
    {
      _id: '3',
      item: 'SHORT',
      imgUrl: '/static/img/test2.png',
      detailImgs: [
        '/static/img/test2.png',
        '/static/img/test2.png',
        '/static/img/test2.png',
        '/static/img/test2.png',
        '/static/img/test2.png'
      ]
    },
    {
      _id: '4',
      item: 'SHORT',
      imgUrl: '/static/img/test2.png',
      detailImgs: [
        '/static/img/test2.png',
        '/static/img/test2.png',
        '/static/img/test2.png',
        '/static/img/test2.png',
        '/static/img/test2.png'
      ]
    },
    {
      _id: '5',
      item: 'SHORT',
      imgUrl: '/static/img/test2.png',
      detailImgs: [
        '/static/img/test2.png',
        '/static/img/test2.png',
        '/static/img/test2.png',
        '/static/img/test2.png',
        '/static/img/test2.png'
      ]
    },
    {
      _id: '6',
      item: 'SHORT',
      imgUrl: '/static/img/test2.png',
      detailImgs: [
        '/static/img/test2.png',
        '/static/img/test2.png',
        '/static/img/test2.png',
        '/static/img/test2.png',
        '/static/img/test2.png'
      ]
    },
    {
      _id: '7',
      item: 'SHORT',
      imgUrl: '/static/img/test2.png',
      detailImgs: [
        '/static/img/test2.png',
        '/static/img/test2.png',
        '/static/img/test2.png',
        '/static/img/test2.png',
        '/static/img/test2.png'
      ]
    },
    {
      _id: '8',
      item: 'SHORT',
      imgUrl: '/static/img/test2.png',
      detailImgs: [
        '/static/img/test2.png',
        '/static/img/test2.png',
        '/static/img/test2.png',
        '/static/img/test2.png',
        '/static/img/test2.png'
      ]
    }
  ]
}
const actions = {

}
const mutations = {

}
const getters = {
  itemInfos: state => {
    return state.itemInfos
  },
  getItemInfo: (state) => (id) => {
    return state.itemInfos.find(function (element) {
      return element._id === id
    })
  }
}
export default {
  state,
  actions,
  mutations,
  getters
}
