<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import users from './store/users'
import { Loading } from 'element-ui'
export default {
  name: 'my-electron-vue',
  mounted () {
    let loadingInstance = Loading.service({ text: '加载中' })
    users.load()
    setTimeout(() => loadingInstance.close(), 1000)
  }
}
</script>

<style>

</style>
