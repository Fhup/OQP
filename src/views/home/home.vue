<template>
<div class="home">
  <home-check/>
</div>
</template>

<script>
import Cookies from 'js-cookie'
import homeCheck from './childCopms/homeCheck.vue';
export default {
  components: { homeCheck },
  name: 'Home',

  created(){
     console.log(Cookies.get('key'));
  },

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style scoped>
  .home{
    width: 100%;
    height: 100%;
  }
</style>

