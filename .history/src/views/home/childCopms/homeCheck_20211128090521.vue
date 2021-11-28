<template>
  <div class="homecheck">
      <el-row>
        <el-col :span="24"><div class="top">
          <h2>请选择你的试题</h2>
        </div></el-col>
      </el-row>
      <div style="display:flex">
        <el-row v-for="(index,item) in type" :key="index" style="flex:1">
          <home-check-item @click.native="check(item)"/>
        </el-row>
      </div>
  <el-dialog
    :title="checked"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
    <div>
      <div class="block">
        <span class="demonstration">选择试题个数(默认为10个)</span>
        <el-slider
          v-model="value"
          :step="10"
          :min="10"
          show-stops>
        </el-slider>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
  </div>
</template>

<script>
import homeCheckItem from './homeCheckItem.vue';
export default {
  components: { homeCheckItem },
  name: 'homeCheck',

  data() {
    return {
      type:["java","c","javascript","vue"],
      dialogVisible: false,
      checked:null,
      value:[10,100]
    };
  },

  mounted() {
    
  },

  methods: {
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    check(info){
      this.dialogVisible=true
      this.checked=info
    }
  },
};
</script>

<style scoped>
.homecheck{
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