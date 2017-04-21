<template>
    <div class="box">
        <v-pagination
                :current=current
                :onChange=onChange
                :total=total>
        </v-pagination>
    </div>
</template>

<script>
    import {
        vPagination
    } from '../components/component/vlte.js';

    export default {
        name: '',
        components: {vPagination},
        data () {
            return {
                current: 1,
                total:85
            }
        },
        computed: {},
        methods: {
            onChange: function (page) {
                this.current = page
            }
        },
        created(){
        }
    }
</script>

<style scoped>

</style>
