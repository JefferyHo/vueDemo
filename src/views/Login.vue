<template>
  <div class="home ta-c">
    <h3>平台登录</h3>
    <img alt="Vue logo" src="../assets/logo.png" width="140" height="140">
    <div class="pt-20">
      <el-button @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    async login() {
      const loading = this.$loading({
          lock: true,
          text: '正在登录',
          spinner: 'el-icon-loading',
          background: 'rgba(52, 50, 104, 0.7)'
      });
      await this.$store.dispatch('Login')
      loading.close()
      this.$router.push('/admin')
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  margin-top: 100px;
}
</style>


