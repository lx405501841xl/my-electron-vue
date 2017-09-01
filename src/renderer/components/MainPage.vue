<template>
  <el-row>
    <div class="total-msg" v-bind:style="{height: css.totalHeight + 'px'}"></div>
    <div class="self-msg">
      <el-input type="textarea" resize="none" :autosize="{ minRows: 4, maxRows: 4}" v-model="msg">
      </el-input>
      <el-button type="primary">发送</el-button>
    </div>
  </el-row>
</template>

<script>
export default {
  name: 'main-page',
  data () {
    return {
      msg: '',
      all: []
    }
  },
  computed: {
    css: function () {
      return {
        totalHeight: document.body.scrollHeight - 168
      }
    }
  },
  methods: {

  },
  mounted () {
    this.$notify({
      title: '提示',
      type: 'success',
      message: '现在可以进行聊天了哦!',
      duration: 0
    })
  }
}
</script>

<style>
.total-msg {
  border: 1px solid #bfcbd9;
  background-color: white;
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
