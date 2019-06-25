<template>
    <div class="header clear">
        <div class="p-l c-p">
            <i :class="foldClass" @click="toggleCollapse"></i>
        </div>
        <div class="p-r">
            <span class="avatar">
                <i class="el-icon-user-solid"></i>
            </span>
            <span class="welcome">欢迎您， {{name}}</span>
            <el-divider direction="vertical"></el-divider>
            <i class="signout el-icon-ice-cream-round c-p" @click="logout"></i>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            name: '管理员'
        }
    },
    watch: {

    },
    computed: {
        foldClass () {
            return +this.$store.state.collapse > 0 ? 'el-icon-s-unfold' : 'el-icon-s-fold'
        }
    },
    methods: {
        toggleCollapse () {
            let collapse = this.$store.state.collapse > 0 ? 0 : 1
            this.$nextTick(() => {
                this.$store.commit('SET_COLLAPSE', collapse)
            })
        },
        logout () {
            this.$confirm('确定登出系统?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true
                }).then(async () => {
                    const loading = this.$loading({
                        lock: true,
                        text: '正在登出',
                        spinner: 'el-icon-loading',
                        background: 'rgba(52, 50, 104, 0.7)'
                    });
                    await this.$store.dispatch('Logout')
                    loading.close()
                    this.$router.push('/')
                });
        }
    }
}
</script>

<style lang="scss" scoped>
.header{
    font-size: 24px;
    padding: 0 20px;

    .avatar {
        width: 30px;
        text-align: center;
        height: 30px;
        line-height: 30px;
        border-radius: 50%;
        background: rgb(0, 153, 255);
        display: inline-block;
        color: #fff;
    }
    .welcome{
        font-size: 16px;
        color: #333;
        padding: 20px;
    }
    .signout{
        padding-left: 10px;
    }
}
</style>


