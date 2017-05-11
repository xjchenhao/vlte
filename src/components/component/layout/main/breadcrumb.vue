<template>
    <section class="content-header">
        <h1>
            Simple Tables
            <small>preview of simple tables</small>
        </h1>
        <ol class="breadcrumb" id="breadcrumb">
            <!--<realbread v-for="(item,index) in bread" :key="item.id" :item="item" :index="index" :len="bread.length"></realbread>-->
        </ol>
    </section>
</template>

<script>
  import Vue from 'vue';
  export default {
  	  name:"breadcrumb",
      data (){
          return {
          	  bread: [],
              nav : this.$store.state.nav
          }
      },
//      components:{
//          realbread:{
//              name: 'realbread',
//              props: ['item','index','len'],
//              template:'\
//                  <li v-if="index<len-1"><span>{{item}}</span></li>\
//                  <li v-else class="active"><span>{{item}}</span></li>'
//          }
//      },
      methods:{
      	  //查找当前路由面包屑信息
      	  searchNav: function(nav){
      	  	  let _this = this;
              let current = this.$route.path.toLowerCase();
              for(let i=0;i<nav.length;i++){
                let item = nav[i];
                _this.$data.bread.push(item.title);
                if(item.href.toLowerCase() === current){
                  _this.renderBread(_this.$data.bread);
                }else if(item.child && item.child instanceof Array){
                  _this.searchNav(item.child);
                }
                _this.$data.bread.pop();
              }
              return nav;
          },
          //渲染当前路由面包屑
          renderBread: function(curBread){
              let breadcrumb = document.getElementById('breadcrumb');
              let html = '<li><a href="/"><i class="fa fa-dashboard"></i>Home</a></li>';
              curBread.forEach(function(value,index){
              	  if(index == curBread.length-1){
                    html += '<li class="active"><span>'+value+'</span></li>';
                  }else{
                    html += '<li><span>'+value+'</span></li>';
                  }
              });
              breadcrumb.innerHTML = html;
          }
      },
      mounted(){
          this.searchNav(this.nav);
      },
      watch: {
          '$route': function(){
          	  //清除上次路由面包屑信息
              this.$data.bread = [];
              this.searchNav(this.nav);
          }
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
