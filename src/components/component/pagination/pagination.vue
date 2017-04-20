<template>
    <ul id="paging" class="pagination pagination-sm no-margin" v-if="total>1">
        <template v-if="total>10">
            <template v-if="currentPage<5">
                <template v-for="i in 5">
                    <li v-if="i==currentPage" class="active"><a href="javascript:;"
                                                                @click="loadData(i)">{{i}}</a>
                    </li>
                    <li v-else><a href="javascript:;" @click="loadData(i)">{{i}}</a></li>
                </template>
                <li class="no-link"><a href="javascript:;">…</a></li>
                <li><a href="javascript:;" @click="loadData(total)">{{total}}</a></li>
            </template>

            <template v-if="currentPage>=5&&currentPage<=total-4">
                <li><a href="javascript:;" @click="loadData(1)">1</a></li>
                <li><a href="javascript:;" @click="loadData(2)">2</a></li>
                <li class="no-link"><a href="javascript:;">…</a></li>
                <li><a href="javascript:;" @click="loadData(currentPage-2)">{{currentPage - 2}}</a></li>
                <li><a href="javascript:;" @click="loadData(currentPage-1)">{{currentPage - 1}}</a></li>
                <li class="active"><a href="javascript:;" @click="loadData(currentPage)">{{currentPage}}</a></li>
                <li><a href="javascript:;" @click="loadData(currentPage+1)">{{currentPage + 1}}</a></li>
                <li><a href="javascript:;" @click="loadData(currentPage+2)">{{currentPage + 2}}</a></li>
                <li class="no-link"><a href="javascript:;">…</a></li>
                <li><a href="javascript:;" @click="loadData(total-1)">{{total - 1}}</a></li>
                <li><a href="javascript:;" @click="loadData(total)">{{total}}</a></li>
            </template>

            <template v-if="currentPage>total-4">
                <li><a href="javascript:;" @click="loadData(1)">1</a></li>
                <li class="no-link"><a href="javascript:;">…</a></li>
                <template v-for="i in 5">
                    <li v-if="total-4+i==currentPage" class="active" @click="loadData(total-4+i)"><a
                            href="javascript:;">{{total - 4 + i}}</a>
                    </li>
                    <li v-else><a href="javascript:;" @click="loadData(total-4+i)">{{total - 4 + i}}</a></li>
                </template>
            </template>
        </template>
        <template v-else>
            <template v-for="i in total" v-if="total!==1">
                <li class="active" v-if="i==currentPage"><a href="javascript:;" @click="loadData(i)">{{i}}</a>
                </li>
                <li v-else><a href="javascript:;" @click="loadData(i)">{{i}}</a></li>
            </template>
        </template>
    </ul>

    <!--<div style="display:inline-block;vertical-align: top">-->
    <!--<input type="text" name="phone" class="form-control input-sm" placeholder=""-->
    <!--style="width:45px;display:inline-block;border-radius:3px" v-model="goPage"-->
    <!--@keyup.enter="loadData(goPage)">-->
    <!--<input class="btn btn-default btn-sm" type="button" value="GO" style="vertical-align: top;"-->
    <!--@click="loadData(goPage)">-->
    <!--</div>-->
</template>

<script>
    export default {
        name: '',
        components: {},
        data () {
            return {}
        },
        props: ['current', 'defaultCurrent', 'total', 'defaultPageSize', 'pageSize', 'onChange', 'showSizeChanger', 'pageSizeOptions', 'onShowSizeChange', 'showQuickJumper', 'size', 'simple', 'showTotal'],
//        props: {
//            current: Number,
//            defaultCurrent: Number,
//            total: Number,
//            defaultPageSize: Number,
//            pageSize: Number,
//            onChange: Function
//        },
        computed: {
            currentPage(){
                return this.current;
            }
        },
        methods: {
            loadData(i){
                this.onChange && this.onChange(i);
            }
        },
        created(){

        }
    }
</script>

<style scoped>

</style>
