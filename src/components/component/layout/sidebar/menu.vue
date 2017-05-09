<template>
    <ul class="sidebar-menu">
        <li class="header">{{title}}</li>
        <sub-menu v-for="(item, index) in data" :item="item" :index="index" :nav="nav" :navSlide="navSlide"></sub-menu>
    </ul>
</template>


<script>
  import Vue from 'vue';

    export default {
        name: 'vlte-sidebar-menu',
        props: ['title', 'data'],
        components: {
            subMenu: {
                name: 'sub-menu',
                props: ['item','nav','index','navSlide'],
                template: '\
                      <li v-if="item.child" @click="navSlide(index)" :class="[{active: nav[index].hasSub}]">\
                          <a href="javascript:;">\
                              <i :class="item.iconFont"></i> <span>{{item.title}}{{nav[index].hasSub}}</span>\
                              <span class="pull-right-container" v-if="item.child">\
                                  <i class="fa fa-angle-left pull-right"></i>\
                              </span>\
                          </a>\
                          <ul class="treeview-menu">\
                              <sub-menu v-for="(item,index) in item.child"  :item="item" :index="index" :nav="nav" :navSlide="navSlide"></sub-menu>\
                          </ul>\
                      </li>\
                      <li v-else class="treeview">\
                          <router-link :to="item.href">\
                              <i :class="item.iconFont"></i><span>{{item.title}}{{nav[index].hasSub}}</span>\
                              <span class="pull-right-container" v-if="item.child">\
                                  <i class="fa fa-angle-left pull-right"></i>\
                              </span>\
                          </router-link>\
                      </li>'
            }
        },
        data () {
          return {
              nav:{}
          };
        },
        methods: {
        	  navSlide: function(index){
                  let nav=this.nav[index];
                  nav.hasSub=!nav.hasSub;
                  this.$set(this.nav, index, nav)
            }
        },
        created(){
            let data = this.data;
            data.map((obj)=>{
                obj.hasSub = false;
            });
            this.nav=data;
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
