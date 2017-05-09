<template>
    <ul class="sidebar-menu">
        <li class="header">{{title}}</li>
        <sub-menu v-for="(item,index) in data" :key="item.id" :item="item" :index="index" :setnav="setnav" :navSlide="navSlide"></sub-menu>
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
                props: ['item','index','setnav','navSlide'],
                template: '\
                      <li v-if="item.child" @click="navSlide(index)" :class="{active: setnav[index].hasSub}">\
                          <a href="javascript:;">\
                              <i :class="item.iconFont"></i> <span>{{item.title}}</span>\
                              <span class="pull-right-container" v-if="item.child">\
                                  <i class="fa fa-angle-left pull-right"></i>\
                              </span>\
                          </a>\
                          <ul class="treeview-menu">\
                              <sub-menu v-for="(item,index) in item.child" :key="item.id" :item="item" :index="index" :setnav="setnav" :navSlide="navSlide"></sub-menu>\
                          </ul>\
                      </li>\
                      <li v-else>\
                          <router-link :to="item.href">\
                              <i :class="item.iconFont"></i><span>{{item.title}}</span>\
                              <span class="pull-right-container" v-if="item.child">\
                                  <i class="fa fa-angle-left pull-right"></i>\
                              </span>\
                          </router-link>\
                      </li>'
            }
        },
        data () {
            return {
                nav: this.data
            };
        },
        methods: {
        	  navSlide: function(index){
                this.$set(this.nav[index], hasSub, !this.nav[index].hasSub)
                console.log(this.nav);
            },
        },
        computed:{
            setnav(){
            	  let data = this.nav;
                data.map((obj)=>{
                    if(typeof obj.hasSub === "undefined"){
                        obj.hasSub = false;
                    }
                });
                return data;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
