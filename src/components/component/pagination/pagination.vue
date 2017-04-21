<template>
    <ul id="paging" class="pagination pagination-sm no-margin" v-if="total>1">
        <template v-if="total>10">
            <template v-if="current<5">
                <template v-for="i in 5">
                    <li v-if="i==current" class="active"><a href="javascript:;"
                                                                @click="loadData(i)">{{i}}</a>
                    </li>
                    <li v-else><a href="javascript:;" @click="loadData(i)">{{i}}</a></li>
                </template>
                <li class="no-link"><a href="javascript:;">…</a></li>
                <li><a href="javascript:;" @click="loadData(total)">{{total}}</a></li>
            </template>

            <template v-if="current>=5&&current<=total-4">
                <li><a href="javascript:;" @click="loadData(1)">1</a></li>
                <li><a href="javascript:;" @click="loadData(2)">2</a></li>
                <li class="no-link"><a href="javascript:;">…</a></li>
                <li><a href="javascript:;" @click="loadData(current-2)">{{current - 2}}</a></li>
                <li><a href="javascript:;" @click="loadData(current-1)">{{current - 1}}</a></li>
                <li class="active"><a href="javascript:;" @click="loadData(current)">{{current}}</a></li>
                <li><a href="javascript:;" @click="loadData(current+1)">{{current + 1}}</a></li>
                <li><a href="javascript:;" @click="loadData(current+2)">{{current + 2}}</a></li>
                <li class="no-link"><a href="javascript:;">…</a></li>
                <li><a href="javascript:;" @click="loadData(total-1)">{{total - 1}}</a></li>
                <li><a href="javascript:;" @click="loadData(total)">{{total}}</a></li>
            </template>

            <template v-if="current>total-4">
                <li><a href="javascript:;" @click="loadData(1)">1</a></li>
                <li class="no-link"><a href="javascript:;">…</a></li>
                <template v-for="i in 5">
                    <li v-if="total-4+i==current" class="active" @click="loadData(total-4+i)"><a
                            href="javascript:;">{{total - 4 + i}}</a>
                    </li>
                    <li v-else><a href="javascript:;" @click="loadData(total-4+i)">{{total - 4 + i}}</a></li>
                </template>
            </template>
        </template>
        <template v-else>
            <template v-for="i in total" v-if="total!==1">
                <li class="active" v-if="i==current"><a href="javascript:;" @click="loadData(i)">{{i}}</a>
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
        props: {
            current: {
                type:Number,
                required:true
            },
            total: {
                type:Number,
                required:true
            },
            onChange: Function
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
