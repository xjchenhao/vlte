<template>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Main content -->
        <section class="content">
            <slot></slot>
        </section>
        <!-- /.content -->
    </div>
</template>

<script>
    export default {
        name: 'vlte-main',
        data () {
            return {}
        },
        mounted(){
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
