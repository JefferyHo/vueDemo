<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/admin/hello' }">欢迎使用</el-breadcrumb-item>
        <el-breadcrumb-item v-for="item in list" :key="item.path">{{ item.name }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    data () {
        return {
            list: []
        }
    },
    watch: {
        $route(to, from) {
            let notShowList = ['/admin', '/admin/hello']
            this.list = to.matched.filter(item => !notShowList.includes(item.path))
        }
    },
    mounted () {
        let notShowList = ['/admin', '/admin/hello']
        this.list = this.$route.matched.filter(item => !notShowList.includes(item.path))
    }
}
</script>

