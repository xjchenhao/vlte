<template>
    <div id="app" class="wrapper">
        <v-header>
            <v-navbar-logo></v-navbar-logo>
            <v-navbar-top></v-navbar-top>
        </v-header>
        <v-sidebar>
            <v-sidebar-menu title="MAIN NAVIGATION" :data="sidebarMemuData"></v-sidebar-menu>
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
    import 'admin-lte/bootstrap/css/bootstrap.css';
    import 'admin-lte/dist/css/AdminLTE.css';
    import 'admin-lte/dist/css/skins/_all-skins.css';
    import 'font-awesome/css/font-awesome.css';
    //    window.AdminLTEOptions = {
    //        enableControlTreeView: false
    //    };

    import jquery from '../node_modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js';
    import bootstrap from '../node_modules/admin-lte/bootstrap/js/bootstrap.js';
    //    import app from '../node_modules/admin-lte/dist/js/app.js';

    import {
        Layout
    } from './components/component/vlte.js';

    export default {
        name: 'app',
        components: {
            vHeader: Layout.header,
            vNavbarLogo: Layout.header.logo,
            vNavbarTop: Layout.header.top,
            vSidebar: Layout.sidebar,
            vSidebarMenu: Layout.sidebar.menu,
            vMain: Layout.main,
            vFooter: Layout.footer
        },
        data () {
            return {
                sidebarMemuData: this.$store.state.slideMenu
            }
        }
    }
</script>

<style>
</style>
