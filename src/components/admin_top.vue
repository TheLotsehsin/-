<template>
    <el-header>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }"><el-icon><House /></el-icon>首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/personalCenter'}"><el-icon><User /></el-icon>个人中心</el-breadcrumb-item>
        </el-breadcrumb>
    </el-header>
</template>

<script>
    export default {
        name: "admin_top"
    }
</script>

<style scoped>

</style>