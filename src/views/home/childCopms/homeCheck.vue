<template>
  <div class="homecheck">
      <el-row>
        <el-col :span="24"><div class="top">
          <h2>请选择你的试题</h2>
        </div></el-col>
      </el-row>
      <div style="display:flex">
        <el-row v-for="(item,index) in type" :key="index" style="flex:1;min-width:300px;margin:0 10px;">
          <home-check-item @click.native="check(item)" :type="item" :color="colors[index]"/>
        </el-row>
      </div>
  <el-dialog
    :title="checked"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
    <div style="margin:0 20px">
      <div class="block">
        <span class="demonstration">选择试题个数(默认为10个)</span>
        <el-slider
          v-model="numvalue"
          :step="10"
          :min="10"
          show-stops>
        </el-slider>
      </div>
      <div>
        <span>输入试题类型:</span>
        <el-select
          v-model="value"
          filterable
          remote
          clearable
          placeholder="请输入关键词"
          :remote-method="remoteMethod"
          :loading="loading">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
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
      numvalue:10,

      //单选框
      options: [],
      value: [],
      list: [],
      loading: false,
      states: ["java","j","jdsfsd"],

      //颜色
      colors:["#FF6347","#40E0D0","#EE82EE","#F5DEB3"]
    };
  },

  mounted() {
    //单选框
      this.list = this.states.map(item => {
        return { value: `${item}`, label: `${item}` };
      });
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
      this.numvalue=10
    },

    //单选框
    remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options = [];
        }
      }
  },
};
</script>

<style scoped>
.homecheck{
  width: 100%;
  height: 100%;
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

