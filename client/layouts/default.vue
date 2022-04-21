<template>
  <v-app v-if="user">
    <Header class="z-index-12"/>
    <v-main>
      <v-container>
        <Nuxt class="z-index-1"/>
        <div id="vk_community_messages"></div>
      </v-container>
    </v-main>
    <Footer class="z-index-10"/>
  </v-app>
</template>

<script>
import Header from '@/components/UI/Header.vue'
import { getItem, setItem} from '@/helpers/persistanceStorage.js'
import Footer from '@/components/UI/Footer.vue'
export default {
  async fetch(){
    if(this.$cookiz.get('user')){
      this.$store.dispatch('auth/tokenPair')
        .then((res)=>this.user=true)
        .finally(res=>this.user=true)
    }else{
      this.user=true
    }
    
  },
  name: 'DefaultLayout',
  // middleware: ['isLoggedIn'],
  components:{
    Header,
    Footer
  },
  data() {
    return ({
      user: false,
    })
  }
}
</script>

<style>
  .z-index-12{
    z-index: 12;
  }
</style>

