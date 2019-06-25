<template>
  <div class="page-wpt clear">
    <div class="sider-wpt p-l" :class="collapse ? 'w-64' : 'w-200'">
      <Sider />
    </div>
    <div class="main-wpt p-r">
      <div class="header-wpt">
        <Header />
      </div>
      <div class="content-wpt">
        <div class="breadcrumb-wpt">
          <Breadcrumb />
        </div>
        <div class="view-wpt">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Sider from '@/components/Sider.vue'
import Breadcrumb from '@/components/Breadcrumb'
export default {
  data () {
    return {
      
    }
  },
  computed:{
    collapse () {
      return +this.$store.state.collapse > 0
    }
  },
  components: {
    Header,
    Sider,
    Breadcrumb
  }
}
</script>

<style lang="scss" scoped>
.page-wpt {
  display: flex;

  .sider-wpt{
    &.w-64{
      width: 64px;
    }
    &.w-200{
      width: 200px;
    }
    background: #343268;
  }

  .main-wpt{
    flex: 1;
    background: #f3f3f8;
    
    .header-wpt{
      height: 70px;
      line-height: 70px;
      background: #fbfbfb;
    }

    .content-wpt{
      height: calc(100vh - 70px);
      max-height: calc(100vh - 70px);
      overflow-y: auto;
      padding: 20px;
      box-sizing: border-box;

      .breadcrumb-wpt{
          margin: 0 0 15px;
      }

      .view-wpt{
        background: #fff;
        min-height: 200px;
      }
    }
  }
}
</style>


