<template>
  <div id="wrapper">
    <main>
      <el-row>
        <el-form :model="ruleForm" :rules="rules" label-width="60px" ref="ruleForm">
          <el-form-item label="昵称" prop="user">
            <el-input v-model="ruleForm.user" placeholder="请输入你的昵称"></el-input>
          </el-form-item>
          <el-form-item label="头像" prop="icon">
            <el-input v-model="ruleForm.icon" placeholder="请选择你的头像"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSubmit('ruleForm')">开始聊天</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </main>
  </div>
</template>

<script>
export default {
  name: 'login-page',
  data () {
    return {
      ruleForm: {
        user: '',
        icon: ''
      },
      rules: {
        user: [
          { required: true, message: '请输入昵称', trigger: 'change' }
        ],
        icon: [
          { required: true, message: '请选择头像', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/main') // 路由到main
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style>
.el-form {
  margin-top: 80px;
  width: 320px;
  text-align: center;
  margin: 80px auto;
}
</style>

