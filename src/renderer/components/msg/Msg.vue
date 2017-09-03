<template>
  <el-row>
    <div :class="float == 0 ? 'msg-box msg-left' : 'msg-box msg-right'">
      <img :src="head" :class="float == 0 ? 'icon icon-left' : 'icon icon-right'">
      <div class="msg">
        <div :class="float == 0 ? 'msg-user msg-left' : 'msg-user msg-right'">{{user}}</div>
        <div :class="float == 0 ? 'msg-info gray' : 'msg-info blue'">{{msg.text}}</div>
      </div>
    </div>
  </el-row>
</template>

<script>
export default {
  name: 'msg',
  props: {
    msg: {
      text: String
    }, // 消息
    user: String, // 用户
    float: {
      type: Number,
      default: 0 // 0靠左, 1靠右
    },
    head: String // 头像
  }
}
</script>

<style>
.icon-left {
  float: left;
}

.icon-right {
  float: right;
}

.msg-left {
  text-align: left;
}

.msg-right {
  text-align: right;
}

.msg-box .icon {
  cursor: pointer;
  margin: 5px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
}

.msg-box .msg {
  padding: 5px;
  display: inline-block;
  max-width: 800px;
  vertical-align: top;
  word-break: break-all;
}

.msg-box .msg .msg-user {
  color: gray;
  font-size: 12px;
}

.msg-box .msg .msg-info {
  margin-top: 3px;
  background-color: #EEEEEE;
  border-radius: 5px;
  padding: 5px;
}

.msg-box .msg .msg-info.gray {
  background-color: #EEEEEE;
}

.msg-box .msg .msg-info.blue {
  background-color: #2683F5;
  color: white;
  text-align: left;
}
</style>
