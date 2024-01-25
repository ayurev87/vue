import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articleItems: [
      { id: 1, tag: 'kitchen', url: '../assets/artcl1.png', src: 'artcl1.png', category: 'Kitchan Design', titleText: 'Lets Get Solution For Building Construction Work', backgroundColor: 'white', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica' },
      { id: 2, tag: 'living', url: '../assets/artcl2.png', src: 'artcl2.png', category: 'Living Design', titleText: 'Cost Latest Invented Interior Designing Ideas.', backgroundColor: '#F4F0EC', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica' },
      { id: 3, tag: 'new interior', url: '../assets/artcl3.png', src: 'artcl3.png', category: 'Interior Design', titleText: 'Best For Any Office & Business Interior Solution', backgroundColor: 'white', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is na Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica' },
    ],
    projectItems: [
      { name: 'Minimal Bedroom 1', subtitle: 'Decor / Artchitecture', class: 'project__item project__item1', src: 'proj_gal1.jpg', buttonTag: 'Bathroom' },
      { name: 'Bedroom Minimal 2', subtitle: 'Artchitecture / Decor', class: 'project__item project__item2', src: 'proj_gal2.jpg', buttonTag: 'Bed Room' },
      { name: 'Bedroom Bedroom 3', subtitle: 'Decor / Artchitecture', class: 'project__item project__item3', src: 'proj_gal3.jpg' },
      { name: 'Minimal Minimal 4', subtitle: 'Decor / Decor', class: 'project__item project__item4', src: 'proj_gal4.jpg' },
      { name: 'Minimal Bedroom 5', subtitle: 'Decor / Artchitecture', class: 'project__item project__item5', src: 'proj_gal5.jpg', buttonTag: 'Bed Room' },
      { name: 'Bedroom Minimal 6', subtitle: 'Artchitecture / Decor', class: 'project__item project__item6', src: 'proj_gal6.jpg', buttonTag: 'Bathroom' },
      { name: 'Bedroom Bedroom 7', subtitle: 'Decor / Artchitecture', class: 'project__item project__item7', src: 'proj_gal7.jpg' },
      { name: 'Minimal Minimal 8', subtitle: 'Decor / Decor', class: 'project__item project__item8', src: 'proj_gal1.jpg' },
      { name: 'Minimal Bedroom 1', subtitle: 'Decor / Artchitecture', class: 'project__item project__item1', src: 'proj_gal1.jpg' },
      { name: 'Bedroom Minimal 2', subtitle: 'Artchitecture / Decor', class: 'project__item project__item2', src: 'proj_gal2.jpg' },
    ],
    dataNow: ''

  },
  mutations: {

  },
  getters: {
    getArticleItems(state) {
      return state.articleItems
    },
    getProjectItems(state) {
      return state.projectItems
    },
    getLastElement(state) {
      return state.articleItems[state.articleItems.length - 1]
    },
    getCurrentData(state) {
      const today = new Date()
      const d = today.getDate()
      const m = today.getMonth() + 1
      const y = today.getFullYear()
      return state.dataNow = `${d}. ${m}. ${y}`
    }
  }
})