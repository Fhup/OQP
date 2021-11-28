<template>
  <div class="homecheckitem">
    <!-- <el-col :span="6"><div class="grid-content" @click="check('java')">
        <el-card shadow="hover" >
          java试题
        </el-card>
    </div></el-col> -->
    <h2>haha</h2>
  </div>
</template>

<script>
export default {
  name: 'homeCheckItem',

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
.homecheck{
    margin: 0 200px;
    min-width: 1000px;
    user-select: none;
  }
  .top{
    height: 200px;
    line-height: 200px;
    text-align: center;
  }
  h2{
    cursor: help;
    color:  #409EFF;
  }
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