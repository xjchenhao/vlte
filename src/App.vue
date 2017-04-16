<template>
    <div id="app">
        <v-header>
            <navbar-logo></navbar-logo>
            <navbar-top></navbar-top>
        </v-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import jquery from '../node_modules/admin-lte/plugins/jQuery/jquery-2.2.3.min.js';
    import bootstrap from '../node_modules/admin-lte/bootstrap/js/bootstrap.js';

    import vHeader from './components/component/header/index.vue';
    import navbarTop from './components/component/header/navbar-top.vue';
    import navbarLogo from './components/component/header/navbar-logo.vue';

    export default {
        name: 'app',
        components: {vHeader, navbarTop, navbarLogo}
    }
</script>

<style>
    @import '../node_modules/admin-lte/bootstrap/css/bootstrap.css';
    @import '../node_modules/admin-lte/dist/css/AdminLTE.css';
    @import '../node_modules/admin-lte/dist/css/skins/_all-skins.css';
    @import '../node_modules/font-awesome/css/font-awesome.css';
</style>
