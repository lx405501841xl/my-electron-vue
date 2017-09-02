<template>
  <div id="wrapper">
    <main>
      <el-row>
        <div class="hostory-msg" v-bind:style="{height: css.hostoryHeight + 'px'}">
          <msg v-for="item in hostory" :key="item.id" :msg="item.msg" :user="item.user" :float="item.float" :head="item.head"></msg>
        </div>
        <div class="self-msg">
          <el-input type="textarea" resize="none" :autosize="{ minRows: 4, maxRows: 4}" v-model="msg"></el-input>
          <el-button @click="reback()">返回</el-button>
          <el-button type="primary">发送</el-button>
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
      msg: '',
      id: 1,
      hostory: [
        {
          id: 1,
          msg: '你好,' + this.$store.user.user,
          user: '图灵机器人',
          float: 0,
          head: '~@/assets/tuling.png'
        }
      ],
      notice: undefined
    }
  },
  computed: {
    css: function () {
      return {
        hostoryHeight: document.body.scrollHeight - 168
      }
    }
  },
  methods: {
    reback () {
      if (this.notice) this.notice.close()
      this.$router.push('/login') // 路由到login
    }
  },
  mounted () {
    this.notice = this.$notify({
      title: '提示',
      type: 'success',
      message: '现在可以进行聊天了哦!',
      duration: 0
    })
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
