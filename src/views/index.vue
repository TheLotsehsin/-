<template>
    <div id="index">
        <el-container>
            <el-main>
                <admin_top></admin_top>
                <el-card>
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-input
                                    placeholder="请输入内容"
                                    clearable
                                    v-model="queryInfo.query"
                                    @clear="getGoodsList"
                            >
                                <el-button
                                        slot="append"
                                        icon="el-icon-search"
                                        @click="handleCurrentChange(1)"
                                ></el-button>
                            </el-input>
                        </el-col>
                        <el-col :span="4">
                            <el-button type="primary" :icon="Search" @click="searchFile" >搜索</el-button>
                        </el-col>
                    </el-row>
                    <el-table :data="flieList" stripe border style="width: 100%">
                        <el-table-column type="index"> </el-table-column>
                        <el-table-column prop="file_name" label="文件名称" width="300px"></el-table-column>
                        <el-table-column prop="updateDate" label="上传日期" width="300px"></el-table-column>
                        <el-table-column prop="state" label="状态" width="300px"></el-table-column>
                        <el-table-column prop="uploader" label="上传人" width="150px"></el-table-column>
                        <el-table-column label="操作">
                            <template v-slot="scope">
                                <el-button size="mini" type="primary" icon="el-icon-edit" @click="edit(scope.row)"></el-button>
                            </template>
                        </el-table-column>
                    </el-table>

                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="queryInfo.pagenum"
                            :page-sizes="[10, 20, 50]"
                            :page-size="queryInfo.pagesize"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="total"
                            background
                    >
                    </el-pagination>
                </el-card>
            </el-main>

        </el-container>
    </div>
</template>

<script>
    import admin_top from "../components/admin_top";
    export default {
        name:'index',
        data() {
            return {
                queryInfo: {
                    query: "",
                    pagenum: 1,
                    pagesize: 10
                },
                // goodslist: [],
                total: 0
            };
        },
        components:{
            admin_top
        },
        // created() {
        //     this.getGoodsList();
        // },
        methods: {

        }
    };
</script>

<style scoped>

</style>


