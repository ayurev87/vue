  <template>
    <div>
         <p>{{count}}</p>
         <button @click="INCREMENT">+</button>
         <button @click="DECREMENT">-</button>
    </div>
  </template>
  
  <script>
  import { mapState, mapMutations } from 'vuex';


  export default {
    name: 'CountarComp',
    
    data() {
        return {
            
        };
    }, 
  
    computed: {
        ...mapState(['count']),
        //   counter() {
        //     return this.$store.state.count
        // }
    },
  
    methods: {
        ...mapMutations(['INCREMENT', 'DECREMENT']), 

        
    },
  };
  </script>
  
  <style lang="scss" scoped>
  
  </style>