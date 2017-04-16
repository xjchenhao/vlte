<template>
    <div id="app" class="wrapper">
        <v-header>
            <v-navbar-logo></v-navbar-logo>
            <v-navbar-top></v-navbar-top>
        </v-header>
        <v-sidebar>
            <!--<v-menu>-->
            <!--<v-sub-menu></v-sub-menu>-->
            <!--</v-menu>-->
        </v-sidebar>
        <v-main>
            <router-view></router-view>
        </v-main>
        <v-footer>
            <div class="pull-right hidden-xs">
                <b>Version</b> 1.0.0

            </div>
            <strong>Copyright © 2017 <a href="http://www.xjchenhao.cn">xjchenhao</a>.</strong> All rights reserved.

        </v-footer>
    </div>
</template>

<script>
    import jquery from '../node_modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js';
    import bootstrap from '../node_modules/admin-lte/bootstrap/js/bootstrap.js';
    import app from '../node_modules/admin-lte/dist/js/app.js';

    import {
        vHeader,
        vSidebar,
        vMain,
        vFooter
    } from './components/component/vlte.js';

    let vNavbarTop = vHeader.top;
    let vNavbarLogo = vHeader.logo;

    export default {
        name: 'app',
        components: {vHeader, vNavbarTop, vNavbarLogo, vSidebar, vMain, vFooter}
    }
</script>

<style>
    @import '../node_modules/admin-lte/bootstrap/css/bootstrap.css';
    @import '../node_modules/admin-lte/dist/css/AdminLTE.css';
    @import '../node_modules/admin-lte/dist/css/skins/_all-skins.css';
    @import '../node_modules/font-awesome/css/font-awesome.css';
</style>
