<template>
  <div id="wrapper">
    <main>
      <el-row>
        <el-form :model="ruleForm" :rules="rules" label-width="0px" ref="ruleForm">
          <el-form-item label="" prop="user">
            <el-input v-model="ruleForm.user" placeholder="请输入你的昵称" @keyup.native.enter="handleSubmit('ruleForm')"></el-input>
          </el-form-item>
          <el-form-item label="" prop="icon">
            <img src="/src/renderer/assets/user1.jpg" @click="checkIcon('/src/renderer/assets/user1.jpg')" :class="ruleForm.icon == '/src/renderer/assets/user1.jpg' ? 'check' : ''">
            <img src="/src/renderer/assets/user2.jpg" @click="checkIcon('/src/renderer/assets/user2.jpg')" :class="ruleForm.icon == '/src/renderer/assets/user2.jpg' ? 'check' : ''">
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
import users from '../store/users'

export default {
  name: 'login-page',
  data () {
    return {
      ruleForm: {
        user: '',
        icon: '/src/renderer/assets/user1.jpg'
      },

      rules: {
        user: [
          { required: true, message: ' ', trigger: 'change' }
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
          for (let user of users.getUser()) {
            if (user.user === this.ruleForm.user) {
              // 如果user已经存在就取出来放在程序中,方便后续聊天使用
              user.icon = this.ruleForm.icon
              this.$store.user = user
            }
          }
          if (!this.$store.user) {
            // 如果user没有存在就根据用户输入名字和头像新建用户并保存
            this.$store.user = users.setUser(this.ruleForm.user, this.ruleForm.icon)
          }
          users.store()
          this.$router.push('/main') // 路由到main
        } else {
          return false
        }
      })
    },

    checkIcon (icon) {
      this.ruleForm.icon = icon
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

.el-form .el-input__inner {
  border: none;
  border-radius: 0;
  text-align: center;
  background-color: #F0F0F0;
  border-bottom: 1px solid #bfcbd9;
}

.el-form img {
  cursor: pointer;
  margin: 0 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.el-form img.check {
  border: 2px solid #20a0ff;
}
</style>

