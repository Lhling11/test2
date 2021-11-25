<template>
  <div class ="login-wrap">
    <div class="ms-login">
      <div class="ms-title">后台管理系统</div>
      <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
        <el-form-item prop="username">
          <el-input v-model="param.username" placeholder="用户名称">
            <template #prepend>
              <el-button icon="el-icon-user"></el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="密码" v-model="param.password"
            @keyup.enter="submitForm()">
            <template #prepend>
              <el-button icon="el-icon-lock"></el-button>
            </template>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('login')">登陆</el-button>
        </div>
        <p class="login-tips">Tips:用户名和密码随便填。</p>
      </el-form>
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue'; // ?
// import { useStore } from 'vuex';
// import { useRouter } from 'vue-router';
export default {
  data () {
    // const router = useRouter();
    // const login = ref(null);
    // const store = useStore();
    return {
      param: {
        username: 'admin',
        password: '123123'
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
      // router
      // login
    }
  },
  methods: {
    submitForm (formName) {
      console.log('submit!')
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // Message.success('success')
          this.$message({
            message: '登陆成功',
            type: 'success'
          })
          console.log(this.param.username)
          localStorage.setItem('ms_username', this.param.username)
          this.$router.push('/dashboard')
          // this.$router.push({
          //   name: 'layoutYHGL'
          // });
        } else {
          // ElMessage.error('登陆失败')
          this.$message({
            message: '登陆失败',
            type: 'warning'
          });
          return false
        }
      })
    }
  }
}
// import { ref, reactive } from 'vue'; // ?
// import { useStore } from 'vuex';
// import { useRouter } from 'vue-router';
// import { ElMessage } from 'element-plus';

// export default {
//   setup () {
//     console.log('B');
//     const router = useRouter();
//     const param = reactive({
//       username: 'admin',
//       password: '123123'
//     });
//     console.log('A');
//     const rules = {
//       username: [
//         {
//           required: true,
//           message: '请输入用户名',
//           trigger: 'blur'
//         }
//       ],
//       password: [
//         {
//           required: true,
//           message: '请输入密码',
//           trigger: 'blur'
//         }
//       ]
//     };
//     const login = ref(null);
//     const submitForm = () => {
//       login.value.validate((valid) => {
//         if (valid) {
//           // ElMessage.success('登陆成功')
//           this.$message({
//             message: '登陆成功',
//             type: 'success'
//           })
//           localStorage.setItem('ms_username', param.username)
//           router.push('/about')
//         } else {
//           // ElMessage.error('登陆失败')
//           this.$message({
//             message: '登陆失败',
//             type: 'warning'
//           });
//           return false
//         }
//       })
//     };
//     const store = useStore(); // ?
//     store.commit('clearTags');
//     console.log('C');

//     return {
//       param,
//       rules,
//       login,
//       submitForm
//     }
//   }
// }
</script>

<style>
  .login-wrap {
      position: relative;
      width: 100%;
      height: 100%;
      background-image: url(../assets/img/login-bg.jpg);
      background-size: 100%;
  }
  .ms-title {
      width: 100%;
      line-height: 50px;
      text-align: center;
      font-size: 20px;
      color: #20A0FF;
      border-bottom: 1px solid #ddd;
  }
  .ms-login {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 350px;
      margin: -190px 0 0 -175px;
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.3);
      overflow: hidden;
  }
  .ms-content {
      padding: 30px 30px;
  }
  .login-btn {
      text-align: center;
  }
  .login-btn button {
      width: 100%;
      height: 36px;
      margin-bottom: 10px;
  }
  .login-tips {
      font-size: 12px;
      line-height: 30px;
      color: #fff;
  }
</style>
