<template>
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">基础表格</h3>
        </div>
        <div class="box-body">
            <v-table
                    :data="tableData"
                    style="width: 100%">
                <v-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </v-table-column>
                <v-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </v-table-column>
                <v-table-column
                        prop="address"
                        label="地址">
                </v-table-column>
            </v-table>
        </div>
    </div>
</template>

<script>
    import {
        Table,
        TableColumn,
    } from '../components/component/vlte.js';

    export default {
        name: '',
        components: {vTable: Table, vTableColumn: TableColumn},
        data () {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        created(){
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
