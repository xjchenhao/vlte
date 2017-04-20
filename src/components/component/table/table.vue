<template>
    <table class="table table-bordered">
        <tbody>
        <tr>
            <th v-for="item in columnsList" :key="item.key">{{item.title}}</th>
        </tr>
        <tr v-for="rowItem in dataSourceList" :key="rowItem.forKey">
            <td v-for="item in rowItem.value" :key="item.forKey">
                <td-value :data="item"></td-value>
                <!--{{item.value}}-->
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: 'table',
        props: ['columns', 'dataSource'],
        data () {
            return {}
        },
        computed: {

            //给columns增加forKey
            columnsList(){

                return this.columns.map((obj, index) => {
                    obj.key = 'columns' + index;

                    return obj;
                });
            },

            //根据标题columns顺序，计算valueList的顺序
            dataSourceList(){
                let listData = [];

                // 计算columns顺序
                let columnsOrder = this.columns.map((obj) => {
                    return {
                        key:obj.dataIndex,
                        render:obj.render
                    }
                });

                this.dataSource.forEach((obj, rowIndex) => {
                    let arr = [];
                    columnsOrder.forEach((columnsObj, index) => {
                        arr.push({
                            forKey: columnsObj.key + index,
                            key:columnsObj.key,
                            record:obj,
                            value: obj[columnsObj.key],
                            render:columnsObj.render
                        });
                    });
                    listData.push({
                        forKey: 'row' + rowIndex,
                        value: arr
                    });
                });

                return listData;
            }
        },
        components:{
          tdValue:{
              name:'table-td-value',
              props: ['data'],
              mounted(){
//                console.log(this.data)
              },
              template:'<div v-html="data.render?data.render(data.key,data.record):data.value"></div>'
          }
        },
        created(){
        }
    }
</script>

<style scoped>

</style>
