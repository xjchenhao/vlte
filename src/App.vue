<template>
    <div id="app">
        <v-header>
            <v-navbar-logo></v-navbar-logo>
            <v-navbar-top></v-navbar-top>
        </v-header>
        <v-sidebar></v-sidebar>
        <router-view></router-view>
    </div>
</template>

<script>
    import jquery from '../node_modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js';
    import bootstrap from '../node_modules/admin-lte/bootstrap/js/bootstrap.js';
    import app from '../node_modules/admin-lte/dist/js/app.js';

    import vHeader from './components/component/header/index.vue';
    import vNavbarTop from './components/component/header/navbar-top.vue';
    import vNavbarLogo from './components/component/header/navbar-logo.vue';
    import vSidebar from './components/component/sidebar/index.vue';

    export default {
        name: 'app',
        components: {vHeader, vNavbarTop, vNavbarLogo, vSidebar}
    }
</script>

<style>
    @import '../node_modules/admin-lte/bootstrap/css/bootstrap.css';
    @import '../node_modules/admin-lte/dist/css/AdminLTE.css';
    @import '../node_modules/admin-lte/dist/css/skins/_all-skins.css';
    @import '../node_modules/font-awesome/css/font-awesome.css';
</style>
