<template>
  <form >
    <label>Style:</label>
    <input type="text" required v-model="style"/>

    <label>Stock:</label>
    <input type="number" required v-model="stock"/>

    <div class="submit">
      <button @click="createStyle">Create Style</button>
    </div>
  </form>
</template>

<script>

export default {

  data () {
   return {
     style: null,
     stock: null
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
      if(this.style && this.stock) {
        const data = { style: this.style, stock: this.stock, tid_stock: this.stock }
        this.$store.dispatch('createStyle', data)
        this.style = null
        this.stock = null
      }
    }
  }

};

</script>
