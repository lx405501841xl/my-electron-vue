<template>
  <div id="wrapper">
    <main>
      <el-row>
        <el-form ref="form">
          <el-form-item prop="text">
            <el-input v-model="account" placeholder="请输入账号" type="text"></el-input>
          </el-form-item>
          <el-form-item prop="passwd">
            <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSubmit()">登陆</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </main>
  </div>
</template>

<script>
export default {
  name: 'landing-page',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    handleSubmit () {
      console.log(this.account)
      console.log(this.password)
      if (this.account === 'admin' && this.password === 'qwe123') {
        window.location.href = '/'
      } else {
        this.$message.error('账号或密码错误!')
      }
    },
    handleReset () {
    }
  }
}
</script>

<style>
.el-form {
  margin-top: 80px;
  width: 280px;
  text-align: center;
  margin: 80px auto;
}
</style>
