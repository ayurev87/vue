Vue.component('blog-left', {
  props: ['blogs'],
  data () {
    return {}
  },

  template: `
                    <div class="blog__articles-box">
                        <div v-for="item in blogs" :key="item.id" class="blog__item"  >
                            <h3 class="blog__title"> {{ item.title }} </h3>
                            <img class="blog__img" src="{{item.img}}">
                            <div class="blog__subtitle">
                            <h5 class="blog__data">{{item.date}}</h5>
                            <h5 class="blog__path">Interior / Home / Decore </5>
                            </div>
                            <h6> {{item.text}}</h6>
                            <div class="blog__quotes">
                        </div> 
                    </div>    
            `
})
Vue.component('blog-btn', {
  props: ['tagbtn'],
  data () {
    return {}
  },
  template: `
                <div class="blog__btn-box">
                    <div v-for="(button, index) in tagbtn"  @click="getButton(button)" class="blog__btn"> {{ button.title }} </div>   
                </div>    
            `,
  methods: {
    getButton (button) {
      const newButton = button.title
      this.$emit('getarticle', newButton)
    }
  }
})
new Vue({
  el: '#blog-box',
  data: {
    blogs: [
      {
        tag: 'kitchen',
        img: './img/kitchen1.png',
        title: 'Lets Get Solution for Building Construction Work',
          text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem ssing hidden in the middle of text. All tend to repeat predefined chunks as necessary.',
          date: '26 December,2022 ',
          quotes: 'The details are not the details. They make the design.',
          title_design: 'Design sprints are great',
          text_design_start: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          list: [
              { id: 1, text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
              { id: 2, text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
              {id:3, text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'}
          ],
          img_design: './img/kitchen2.png',
          text_design_end: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. '

          },
           {
        tag: 'Bedroom',
        img: './img/Bedroom1.jpg',
        title: 'Low Cost Latest Invented Interior Designing Ideas.',
          text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem ssing hidden in the middle of text. All tend to repeat predefined chunks as necessary.',
          date: '26 December,2022 ',
          quotes: 'The details are not the details. They make the design.',
          title_design: 'Design sprints are great',
          text_design_start: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          list: [
              { id: 1, text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
              { id: 2, text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
              {id:3, text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'}
          ],
           img_design: './img/Bedroom2.jpg',
          text_design_end: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. '

          },
                {
        tag: 'Building',
        img: './img/Building1.jpg',
        title: 'Best For Any Office & Business Interior Solution',
          text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem ssing hidden in the middle of text. All tend to repeat predefined chunks as necessary.',
          date: '26 December,2022 ',
          quotes: 'The details are not the details. They make the design.',
          title_design: 'Design sprints are great',
          text_design_start: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          list: [
              { id: 1, text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
              { id: 2, text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
              {id:3, text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'}
          ],
           img_design: './img/Building2.jpeg',
          text_design_end: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. '

          },
                     {
        tag: 'Architecture',
        img: './img/Architecture1.jpg',
        title: 'Lets Get Solution for Building Construction Work',
          text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem ssing hidden in the middle of text. All tend to repeat predefined chunks as necessary.',
          date: '26 December,2022 ',
          quotes: 'The details are not the details. They make the design.',
          title_design: 'Design sprints are great',
          text_design_start: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          list: [
              { id: 1, text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
              { id: 2, text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
              {id:3, text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'}
          ],
           img_design: './img/Architecture2.jpg',
          text_design_end: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. '

          },
                          {
        tag: 'Kitchen Planning',
        img: './img/Kitchen_Planning1.jpeg',
        title: 'Low Cost Latest Invented Interior Designing Ideas.',
          text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem ssing hidden in the middle of text. All tend to repeat predefined chunks as necessary.',
          date: '26 December,2022 ',
          quotes: 'The details are not the details. They make the design.',
          title_design: 'Design sprints are great',
          text_design_start: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
          list: [
              { id: 1, text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
              { id: 2, text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.' },
              {id:3, text: 'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'}
          ],
           img_design: './img/Kitchen_Planning2.jpg',
          text_design_end: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. '

          }

    ],
    tagbtn: [{ title: 'Kitchen' }, { title: 'Bedroom' }, { title: 'Building' }, { title: 'Architecture' }, { title: 'Kitchen Planning' }],
    curentIndex: 0,
    currentArticle: []
  },
  methods: {
    getarticle (button) {
      this.currentArticle = this.blogs.filter(elem => elem.tag === button)
    }
  }
})
