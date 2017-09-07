<template>
  <div id="wrapper">
    <main>
      <el-row>
        <div ref="hmsg" class="hostory-msg" :style="{height: hostoryHeight + 'px'}">
          <msg v-for="item in hostory" :key="item.id" :msg="item.msg" :user="item.user" :float="item.float" :head="item.head"></msg>
        </div>
        <div class="self-msg">
          <el-input type="textarea" resize="none" :autosize="{ minRows: 4, maxRows: 4}" v-model="msg" @keyup.native.enter="handleSubmit()"></el-input>
          <el-button @click="handleReback()">返回</el-button>
          <el-button type="primary" @click="handleSubmit()">发送</el-button>
        </div>
      </el-row>
    </main>
  </div>
</template>

<script>
import msg from './msg/Msg'

export default {
  name: 'main-page',

  components: { msg },

  data () {
    return {
      msg: '你好', // 用户输入信息
      id: 0, // 对话id记录,机器人发来的和用户发出的都用这个id记录
      hostory: [] // 历史对话
    }
  },

  watch: {
    hostory () {
      // DOM更新后执行
      this.$nextTick(() => { this.$refs.hmsg.scrollTop = this.$refs.hmsg.scrollHeight })
    }
  },

  computed: {
    hostoryHeight () {
      return document.body.scrollHeight - 168
    }
  },

  methods: {
    handleReback () {
      if (this.notice) this.notice.close()
      this.$router.push('/login') // 路由到login
    },

    handleSubmit () {
      let msg = {
        id: ++this.id,
        msg: { text: this.msg },
        user: this.$store.user.user,
        float: 1,
        head: this.$store.user.icon
      }
      this.hostory.push(msg)
      this.send(msg.msg)
      this.msg = ''
    },

    send (info) {
      let userid = this.$store.user.id
      this.$http.post('http://www.tuling123.com/openapi/api', {
        key: 'e4c19a28838546bcaf514aa6922101d7',
        info: info,
        userid: userid
      }).then((res) => {
        let msg = {
          id: ++this.id,
          msg: res.data,
          user: '图灵机器人',
          float: 0,
          head: '/src/renderer/assets/tuling.png'
        }
        this.hostory.push(msg)
      })
    }
  },

  mounted () {
    if (!this.$store.user) {
      // 如果user为空就是没有登录 路由到login
      this.$router.push('/login')
      return
    }
    this.handleSubmit() // 打招呼
  }
}
</script>

<style>
.hostory-msg {
  border: 1px solid #bfcbd9;
  background-color: white;
  overflow-y: scroll;
}

.self-msg {
  margin-top: 8px;
  border: 1px solid #bfcbd9;
  text-align: right;
  background-color: white;
}

.self-msg .el-textarea__inner {
  border: none;
}

.self-msg .el-button {
  margin: 5px;
}
</style>
