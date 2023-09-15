<template>
    <section class="blog">
         <section class="top"></section>
        <div class="container">
            <div>
                <div id="blog-box" class="blog__wrapper"  >
                    <div class="blog__left-box" >
                        
                        <blog_left :blogs="blogs" :tagbtn="tagbtn" v-if="!currentArticle.length" > </blog_left>
                        <blog_select :items="currentArticle"></blog_select>
                  
                    </div>
                    
                    <div class="blog__right-box">
                        <blog_bth :tagbtn="tagbtn" :blogs="blogs" @getarticle="getarticle"></blog_bth>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import blog_left from '@/components/blog_left.vue'
import blog_select from '@/components/blog_select.vue'
import blog_bth from '@/components/blog_right.vue'



export default {
    
    name: 'blog_main',
    components: {
        blog_left,
        blog_select,
        blog_bth
    },

    data() {
        return {
             blogs: [
      {
        tag: 'kitchen',
        img: require( `@/assets/kitchen1.png`),
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
          img_design: require(`@/assets/kitchen2.png`),
          text_design_end: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. '

          },
           {
        tag: 'Bedroom',
        img: require(`@/assets/Bedroom1.jpg`),
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
           img_design: require(`@/assets/Bedroom2.jpg`),
          text_design_end: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. '

          },
                {
        tag: 'Building',
        img: require(`@/assets/Building1.jpg`),
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
           img_design: require(`@/assets/Building2.jpeg`),
          text_design_end: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. '

          },
                     {
        tag: 'Architecture',
        img: require(`@/assets/Architecture1.jpg`),
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
           img_design: require(`@/assets/Architecture2.jpg`),
          text_design_end: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. '

          },
                          {
        tag: 'Kitchen Planning',
        img: require(`@/assets/Kitchen_Planning1.jpeg`),
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
           img_design: require(`@/assets/Kitchen_Planning2.jpg`),
          text_design_end: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. '

          }

    ],
    tagbtn: [{ title: 'Kitchen' }, { title: 'Bedroom' }, { title: 'Building' }, { title: 'Architecture' }, { title: 'Kitchen Planning' }],
    currentIndex: 0,
    currentArticle: []
        };
    },

    mounted() {
        
    },

    methods: {
       getarticle (button) {
      this.currentArticle = this.blogs.filter(elem => elem.tag === button)
    }
    },
};
</script>

<style lang="scss" scoped>
.top {
    background-image: url(@/assets/block_banner.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 351px;
}
</style>