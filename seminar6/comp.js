Vue.component('counter-component', {
  data () {
    return {
      counter: 0
    }
  },
  template: `
          <div>
            <h2> {{counter}}</h2>
            <button @click="increased()"> + </button>
            <button @click="decreased()"> -</button>
           </div>
            `,
  methods: {
    increased () {
      return this.counter++
    },

    decreased () {
      return this.counter--
    }
  }
})
Vue.component('list-item', {
  props: ['itemData'],
  methods: {
    removeItem (id) {
      this.$emit('removeItem', id)
    }
  },

  template: `
              <div>
                <p> {{itemData.title}}</p>
                <button @click="removeItem(itemData.id)">X</button>
              </div>`
})
Vue.component('todo-list', {
  props: {},

  data () {
    return {
      newElement: '',
      elements: []
    }
  },
  methods: {
    addElement () {
      this.elements.push({
        id: Date.now(),
        title: this.newElement
      })
      this.newElement = ''
    },
    removeElement (id) {
      this.elements = this.elements.filter(item => item.id !== id)
    }
  },

  template: `
  <div> 
  <h2> Todo List</h2>
    <input type="text" v-model="newElement">
    <button @click="addElement" >Добавить</button>
    <list-item 
      v-for="element in elements" 
      :item-data="element"
      @removeItem="removeElement">
      :key="element.id">
        </list-item>

  </div>`
})
Vue.component('filter-list', {
  props: {  },

  data() {
    return {

      
    }
  },

  template: `
  <div>
    <input type="text" v-model="filterItem">
    <div v-for="item in items">
      {{item}}
    </div>
    <p>filtered</p>
    <div v-for="item in filterItems">
      {{item}}
</div>
  `,
  data() {
    return {
      items: ['list 1m', 'list 2p', 'list 3h'],
      filterItem: '',
    };
  },
  computed: {
    filterItems() {
      return this.items.filter(item => item.includes(this.filterItem))
    }
  }
});

Vue.component('products', {
  props: {  },

  data() {
    return {
      search: '',
      products: [
        { name: 'товар 1', price: 15 },
        { name: 'товар 2', price: 630 },
        {name: 'товар 3', price: 250},
        { name: 'товар 4', price: 122 },
        { name: 'товар 5', price: 530},
      ]
      
    }
  },
  methods: {
    sortUp() {
      // this.products.sort((a, b) => (a.price > b.price ? 1 : -1));
      this.products.sort((a, b) => a.price - b.price);
      
    },
    sortDown() {
      // this.products.sort((a, b) => (a.price > b.price ? 1 : -1)).reverse();
      this.products.sort((a, b) => b.price - a.price);
    }
  },

  template: `
    <div>
      <span> отсортировать товар</span>
      <button @click="sortUp"> по возрастанию</button>
      <button @click="sortDown"> по убыванию</button>
      <ul>
        <li v-for="item in product" :key="item.id">
          {{item.name}} - {{item.price}} руб.
</li>
</ul>
</div>
    
  `,
});