<template>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <breadcrumb></breadcrumb>
        <!-- Main content -->
        <section class="content">
            <slot></slot>
        </section>
        <!-- /.content -->
    </div>
</template>

<script>
    import breadcrumb from './breadcrumb.vue';
    export default {
        name: 'vlte-main',
        components: { breadcrumb },
        data () {
            return {}
        },
        mounted(){

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
