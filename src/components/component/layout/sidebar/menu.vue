<template>
  <ul class="sidebar-menu">
    <li class="header">{{title}}</li>
    <sub-menu v-for="item in data" :key="item.id" :item="item" :navSlide="navSlide"></sub-menu>
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
        props: ['item','navSlide'],
        template: '\
                      <li v-if="item.child">\
                          <a @click.stop="navSlide($event)" href="javascript:;">\
                              <i :class="item.iconFont"></i> <span>{{item.title}}</span>\
                              <span class="pull-right-container" v-if="item.child">\
                                  <i class="fa fa-angle-left pull-right"></i>\
                              </span>\
                          </a>\
                          <ul class="treeview-menu">\
                              <sub-menu v-for="item in item.child" :key="item.id" :item="item" :navSlide="navSlide"></sub-menu>\
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
        };
    },
    methods: {
        navSlide: function($event){
        	  let parentNode= $event.target.parentNode;
        	  if(parentNode.classList.contains('active')){
                let reg = new RegExp('(\\s|^)' + 'active' + '(\\s|$)');
                parentNode.className = parentNode.className.replace(reg, '');
            }else{
                parentNode.className = "active";
            }
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
