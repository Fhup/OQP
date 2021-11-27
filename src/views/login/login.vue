<template>
  <div class="login">
    <el-row>
      <el-col :span="6" :offset="9"><div class="top"></div></el-col>
    </el-row>
    <el-row v-show="isShow">
      <el-col :span="6" :offset="9"><div class="grid-content">
        <el-card shadow="hover">
          <!-- 欢迎登录 -->
          <h2>欢迎登录</h2>
          <el-divider content-position="right" class="line"><span @click="togClick">新用户注册</span></el-divider>
          <el-form :model="zhValidateForm" ref="zhValidateForm" label-width="80px">
            <el-form-item
              label="账号"
              prop="zh"
              :rules="[
                { required: true, message: '账号不能为空'},
                { type: 'number', message: '账号必须为数字'}
              ]"
            >
              <el-input placeholder="请输入账号" v-model.number="zhValidateForm.zh" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item
              label="密码"
              prop="mm"
              :rules="[
                { required: true, message: '密码不能为空'}
              ]"
            >
              <el-input type="password" placeholder="请输入密码" v-model="zhValidateForm.mm" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('zhValidateForm')">登录</el-button>
              <el-button @click="resetForm('zhValidateForm')">重置</el-button>
              <el-button type="warning" @click="dialogVisible = true">忘记密码</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </div></el-col>
    </el-row>
    
    <el-row v-show="!isShow">
      <el-col :span="6" :offset="9"><div class="grid-content">
        <el-card shadow="hover">
          <!-- 欢迎注册 -->
          <h2>欢迎注册</h2>          
          <el-divider content-position="right" class="line"><span @click="togClick">已有账号,去登录</span></el-divider>
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px">
          <el-form-item label="注册账号" prop="zzh">
              <el-input placeholder="请输入账号" v-model.number="ruleForm.zzh"  autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="输入密码" prop="pass">
              <el-input type="password" placeholder="请输入密码" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" placeholder="请再次输入密码" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="QQ邮箱" prop="email">
              <el-input v-model="ruleForm.email" placeholder="请输入QQ邮箱" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </div></el-col>
    </el-row>


<!-- 忘记密码对话框 -->
<el-dialog
  title="忘记密码"
  :visible.sync="dialogVisible"
  width="40%"
  :before-close="handleClose">
  <div>
    <div class="step">
      <el-steps :active="active" finish-status="success" align-center>
      <el-step title="1"></el-step>
      <el-step title="2"></el-step>
      <el-step title="3"></el-step>
    </el-steps>
    </div>
    <div>
      
    </div>
    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
export default {
  name: 'login',

 data() {
      //注册的密码和确认密码
      var checkzzh = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('注册账号不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字'));
          } else {
            if (value.toString().length < 6) {
              callback(new Error('账号必须最短为6位'));
            }else if(value.toString().length >12){
              callback(new Error('账号必须最长为11位'));
            }else {
              callback();
            }
          }
        }, 500);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else if(value.length<6){
          callback(new Error('密码必须最短为6位'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var patter1 = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
      var validateemail = (rule, value, callback) => {
        if(value === '') {
          callback(new Error('请输入邮箱'));
        } else if (!patter1.test(value)) {
          callback(new Error('邮箱格式不正确!'));
        }else {
          callback();
        }
      };
      return {
        //步骤条
        active: 1,
        //是否显示对话框
        dialogVisible: false,
        //表单数据对象
        zhValidateForm: {
          zh: '',
          mm:'',
        },
        isShow:true,
        ruleForm: {
          zzh:'',
          pass: '',
          checkPass: '',
          email:''
        },
        rules: {
          zzh: [
            { required: true,validator: checkzzh, trigger: 'blur' }
          ],
          pass: [
            { required: true,validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required: true,validator: validatePass2, trigger: 'blur' }
          ],
          email:[
            { required: true,validator: validateemail, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      //提交表单
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('成功!');
            if(this.isShow){
              this.$router.replace('/home')
              this.$notify({
                title: '登录成功',
                type: 'success'
              });
            }else{
              this.$notify({
                title: '注册成功',
                message: '登录您的账号和密码',
                type: 'success'
              });
              
              this.zhValidateForm.zh=this.ruleForm.zzh
              this.zhValidateForm.mm=''
              this.ruleForm.zzh=''
              this.ruleForm.pass=''
              this.ruleForm.checkPass=''
              this.ruleForm.email=''

              this.isShow=!this.isShow
              
            }
          } else {
            console.log('失败!!');
            return false;
          }
        });
      },
      //重置
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //点击切换登录 注册
      togClick(){
        this.isShow=!this.isShow;
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      //步骤条切换
      next() {
        if (this.active++ > 2) {
          // this.active = 0;

        }
      }
    }
};
</script>
<style scoped>
  .login{
    user-select: none;
  }
  .top{
    height: 120px;
  }
  .grid-content {
    border-radius: 4px;
    height:300px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    min-width: 400px;
  }
  span{
    cursor: pointer;
    color: #409EFF;
  }
  h2{
    height: 20px;
    line-height: 20px;
    font-size: 20px;
    margin: 0;
    color: #409EFF;
  }

  .line{
    background-color: #409EFF;
  }
  .step{
    margin: 0 20px;
  }
  
</style>
<style>
  .login .el-dialog__title{
    color: #409EFF !important;
  }
  .login .is-success{
    color: #409EFF !important;
    border-color: #409EFF !important;
  }
</style>