<template>
  <form >

    <label>Style:</label>
    <select v-model="style">
      <option v-for="style in styles" :value="style.style" :key="style.id">
        {{ style.style }}
      </option>
    </select>

    <label>Tid:</label>
    <input type="text" v-model="tid" @keyup.enter="addTid(tid.length)" @keyup.enter.prevent="registerTags"/>
    <div v-for="tid in tempTids" :key="tid" class="pill">
      <span @click="deleteTid(tid)">
        {{ tid }} {{ tid.length }}
      </span>
    </div>

    <div class="submit" @click.ctrl.exact="registerTags">
      <button>Regiter Tags</button>
    </div>

  </form>
</template>

<script>
export default {
  name: "DCTags",
  data() {
    return {
      regTids: [],
      tid: null,
      tempTids: [],
      style: null,
      values: []
    };
  },

  mounted() {
    this.$store.dispatch('getStyles')
    this.$store.dispatch('getTids')
  },

  computed: {
      styles: {
          get() {
            return this.$store.getters.allStyles
          }
      },

      tids: {
        get() {
          return this.$store.getters.justTids
        }
      }
  },

  methods: {

    addTid(tidLength) {
      if (this.tid) {
        if (!this.tempTids.includes(this.tid) && !this.tids.includes(this.tid)) {
          console.log(tidLength);
          console.log(this.tid);
          if (tidLength === 24) {
            this.tempTids.push(this.tid);
          }
        }

        this.tid = "";
      }
    },

    deleteTid(tid) {
      this.tempTids = this.tempTids.filter((item) => {
        return tid !== item;
      });
    },

    registerTags() {
      if(this.tempTids) {

        this.tempTids.forEach(i => {
          this.values.push([17,this.tempTids[i], this.style]);
        })
      }
    }
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}

.submit {
  text-align: center;
}

.error{
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
