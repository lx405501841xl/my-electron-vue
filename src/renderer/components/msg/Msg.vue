<template>
  <el-row>
    {{msg}} - {{user}} - {{float}} - {{head}}

  </el-row>
</template>

<script>
export default {
  name: 'msg',
  props: {
    msg: String, // 消息
    user: String, // 用户
    float: {
      type: Number,
      default: 0 // 0靠左, 1靠右
    },
    head: String // 头像
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  mounted () {
    console.log('4322')
  }
}
</script>

<style>

</style>
