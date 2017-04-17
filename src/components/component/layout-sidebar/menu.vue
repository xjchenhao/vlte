<template>
    <ul class="sidebar-menu">
        <li class="header">{{title}}</li>
        <sub-menu v-for="item in data" :item="item"></sub-menu>
        <!--<slot name="item"-->
        <!--v-for="item in items"-->
        <!--:text="item.text">-->
        <!--&lt;!&ndash; 这里写入备用内容 &ndash;&gt;-->
        <!--</slot>-->
        <!--<li class="header">LABELS</li>-->
        <!--<li><a href="#"><i class="fa fa-circle-o text-red"></i> <span>Important</span></a></li>-->
        <!--<li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>-->
        <!--<li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>-->
    </ul>
</template>


<script>
    export default {
        name: 'vlte-sidebar-menu',
        props: ['title', 'data'],
        data () {
            return {}
        },
        mounted(){
            console.log(this.title);
            console.log(this.data);
        },
        components: {
            subMenu: {
                name:'sub-menu',
                props: ['item'],
                template: '\
                <li class="treeview">\
                    <a :href="item.href">\
                        <i :class="item.iconFont"></i> <span>{{item.title}}</span>\
                        <span class="pull-right-container" v-if="item.child">\
                            <i class="fa fa-angle-left pull-right"></i>\
                        </span>\
                    </a>\
                    <ul class="treeview-menu" v-if="item.child">\
                        <sub-menu v-for="item in item.child" :item="item"></sub-menu>\
                    </ul>\
                </li>'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
