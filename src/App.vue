<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: '微软雅黑', sans-serif;
}

.pt-20 {
  padding-top: 20px;
}
.ta-c{
  text-align: center;
}

.p-l{
  float: left;
}
.p-r{
  float: right;
}
.clear{
  overflow: hidden;
}

.c-p{
  cursor: pointer;
}
</style>
