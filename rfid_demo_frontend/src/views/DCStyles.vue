<template>
  <form>

    <label>Type:</label>
    <input type="text" required v-model="colour"/>

    <label>Model:</label>
    <input type="text" required v-model="style"/>

    <label>Manufacturer:</label>
    <input type="text" required v-model="name"/>

    <!-- <label>Size:</label>
    <input type="text" required v-model="sz"/>

    <label>Price:</label>
    <input type="number" required v-model="price"/> -->


    <div class="submit">
      <button @click="createStyle">Add new Product</button>
    </div>
  </form>
</template>

<script>

export default {

  data () {
   return {
     name: null,
     colour: null,
     sz: "M",
     price: 0,
     style: null,
     stock: 0
   }; 
  },

  computed: {
    styles: {
      get() {
        return this.$store.getters.allStyles
      }
    }
  },

  mounted() {
    this.$store.dispatch('getStyles')
  },

  methods: {
    createStyle() {
      if(this.style && this.name && this.colour) {
        const data = { style: this.style, stock: this.stock, name: this.name, colour: this.colour, sz: this.sz, price: this.price }
        this.$store.dispatch('createStyle', data)
        this.style = null
        this.name = null
        this.colour = null
        // this.sz = null
        // this.price = null
      }

      alert("New Product Added")
    }
  }

};

</script>
