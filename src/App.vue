<template>
    <div id="app" class="wrapper">
        <v-header>
            <v-navbar-logo></v-navbar-logo>
            <v-navbar-top></v-navbar-top>
        </v-header>
        <v-sidebar></v-sidebar>
        <v-main>
            <router-view></router-view>
        </v-main>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import jquery from '../node_modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js';
    import bootstrap from '../node_modules/admin-lte/bootstrap/js/bootstrap.js';
    import app from '../node_modules/admin-lte/dist/js/app.js';

    import vHeader from './components/component/layout-header/index.vue';
    import vNavbarTop from './components/component/layout-header/navbar-top.vue';
    import vNavbarLogo from './components/component/layout-header/navbar-logo.vue';
    import vSidebar from './components/component/layout-sidebar/index.vue';
    import vMain from './components/component/layout-main/index.vue';
    import vFooter from './components/component/layout-footer/index.vue';

    export default {
        name: 'app',
        components: {vHeader, vNavbarTop, vNavbarLogo, vSidebar,vMain,vFooter}
    }
</script>

<style>
    @import '../node_modules/admin-lte/bootstrap/css/bootstrap.css';
    @import '../node_modules/admin-lte/dist/css/AdminLTE.css';
    @import '../node_modules/admin-lte/dist/css/skins/_all-skins.css';
    @import '../node_modules/font-awesome/css/font-awesome.css';
</style>
