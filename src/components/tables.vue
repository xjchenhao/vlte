<template>
    <div class="box">
        <div class="box-header with-border">
            <h3 class="box-title">Bordered Table</h3>
        </div>
        <div class="box-body">
            <v-table :columns="columns" :dataSource="dataSource"></v-table>
        </div>
        <div class="box-footer clearfix">
            <v-pagination :current=1 :total=100></v-pagination>
        </div>
        <v-button>默认按钮</v-button>
        <v-button type="primary">主要按钮</v-button>
        <v-button type="text">文字按钮</v-button>
    </div>
</template>

<script>
    import {
        vTable,
        vPagination,
        vButton
    } from '../components/component/vlte.js';

    const columns = [{
        title: '姓名',
        dataIndex: 'name'
    }, {
        title: '年龄',
        dataIndex: 'age'
    }, {
        title: '住址',
        dataIndex: 'address'
    }, {
        title: 'action',
        dataIndex: 'action',
        render: ((text, record) => {
            return `
                <span>
                  <a href="#">${text} 一 ${record.name}</a>
                    <span className="ant-divider" />
                  <a href="#">Delete</a>
                    <span className="ant-divider" />
                  <a href="#" className="ant-dropdown-link">
                    More actions <Icon type="down" />
                  </a>
                </span>
            `
        })
    }];

    const dataSource = [{
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号'
    }, {
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号'
    }];

    export default {
        name: '',
        components: {vTable,vPagination,vButton},
        data () {
            return {
                columns,
                dataSource
            }
        },
        created(){
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
