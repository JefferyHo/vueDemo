<template>
  <div class="page-wpt">
    {{page}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      page: '新页面'
    }
  },
  watch: {
    $route(to, from){
      this.page = `这是一个 ` + to.name + ' 页面'
    } 
  },
  mounted () {
    this.page = `这是一个 ` + this.$route.name + ' 页面'
  }
}
</script>

<style scoped>
.page-wpt{
  padding: 10px;
  text-align: center;
}
</style>


