<template>
  <form @submit.prevent="transferToServerRoom">
    <h2>Server Room</h2>

    <label>Tid:</label>
    <input type="text" v-model="tid" v-on:keydown.enter.prevent="addTid(tid.length)" />

    {{ tempTid }}

    <div >
      <button type="submit">Transfer to server room</button>
    </div>

  </form>

  <div v-if="showModal">
    <Modal :header="header" :text="text" @close="toggleModal">
      <h3>{{ message }}</h3>
    </Modal>
  </div>
</template>

<script>
export default {
    data() {
        return {
            tid: null,
            tempTid: null,
            shop: "server room",
            message: "Transferred to server room",
            
        };
    },
    mounted() {
        this.$store.dispatch('getOngoingShops')
    },

    computed: {
        ongoingShops: {
            get() {
                return this.$store.getters.ongoingShops
            }
        }
    },

    methods: {
        addTid(tidLength) {
            if(this.tid) {
                    if(tidLength === 24) {
                        this.ongoingShops.filter(item => {
                            if(item.tid == this.tid && !this.tempTid) {
                                this.tempTid = this.tid

                            }
                        })
                    }
                // }
                
                this.tid = null
            }
        },

        transferToServerRoom() {
            if(this.tempTid) {
                const data = { shop:this.shop, tid: this.tempTid }
                console.log(data);
                this.$store.dispatch("updateShop", data)
            }
        }
    }
}
</script>

<style>

</style>