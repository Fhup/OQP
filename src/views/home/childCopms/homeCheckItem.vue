<template>
    <div class="grid-content">
        <el-card shadow="hover">
          {{type}}
        </el-card>
    </div>
</template>

<script>
export default {
  name: 'homeCheckItem',

  data() {
    return {
    };
  },

  props:{
    type:{
      type:String,
      default:null
    }
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style scoped>

</style>

<style>
  .homecheck .grid-content {
    min-height: 200px;
    min-width: 200px;
    height: 200px;
    border-radius: 20px;
    line-height: 160px;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
  }
  .homecheck .el-card{
    height: 200px;
    border-radius: 20px;
  }
</style>