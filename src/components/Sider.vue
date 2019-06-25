<template>
    <div class="sider-wpt">
        <div class="title ta-c">{{ isCollapse ? 'Vue' : 'Smile-Vue平台'}}</div>
        <div class="menu-wpt">
            <el-menu 
                unique-opened
                :collapse="isCollapse" 
                router
                background-color="#343268"
                text-color="#8481c8"
                active-text-color="#fff"
                :default-active="this.$route.path">
                <template v-for="(menu, ind) in menuList">
                    <el-submenu :index="menu.path" v-if="menu.children && menu.children.length > 0" :key="ind">
                        <template slot="title">
                            <i :class="menu.icon"></i>
                            <span slot="title">{{ menu.name }}</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item  v-for="child in menu.children" :key="child.name" :index="child.path">{{child.name}}</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item :index="menu.path" v-else :key="ind">
                        <i :class="menu.icon"></i>
                        <span slot="title">{{ menu.name }}</span>
                    </el-menu-item>
                </template>
            </el-menu>
        </div>
    </div>
</template>

<script>
import { menuRouter } from '../router'
export default {
    data () {
        return {
            menuList: menuRouter.filter(item => {
                if (item.meta) {
                    if (!item.meta.hide) {
                        return item
                    }
                } else {
                    return item
                }
            }),
        }
    },
    computed: {
        isCollapse () {
            return +this.$store.state.collapse > 0
        }
    },
}
</script>

<style lang="scss" scoped>
.sider-wpt{
    .title{
        height: 70px;
        line-height: 70px;
        font-size: 22px;
        color: #fff;
        background: #5656fb;
    }
}

.el-menu{
    border-right: none;
}

.el-menu-item i, .el-submenu__title i{
    color: inherit;
}

.el-menu-item.is-active{
    background: #47458d !important;
    border-left: 8px solid #5656fb;
    padding-left: 32px !important;
    // margin-left: -8px;
}
</style>


