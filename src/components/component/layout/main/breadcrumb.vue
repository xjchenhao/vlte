<template>
    <section class="content-header">
        <h1>
            Simple Tables
            <small>preview of simple tables</small>
        </h1>
        <ol class="breadcrumb">
            <!--<li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>-->
            <!--<li><a href="#">Tables</a></li>-->
            <!--<li class="active"><span>Simple</span></li>-->
            <!--<li v-for="route in matchedRoutes"-->
                <!--:class="{ 'active': $index === matchedRoutes.length - 1 }">-->
                <!--<span v-if="$index === matchedRoutes.length - 1">-->
                  <!--{{ route.handler.title }}-->
                <!--</span>-->
                <!--<a v-else v-link="route.handler.fullPath">-->
                  <!--{{ route.handler.title }}-->
                <!--</a>-->
            <!--</li>-->
        </ol>
    </section>
</template>

<script>
  export default {
  	  name:"breadcrumb",
      data (){
          return {
            matchedRoutes : [
            	"tables","pagination"
            ]
          };
      },
      mounted(){
        //console.log(this.$route);
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
