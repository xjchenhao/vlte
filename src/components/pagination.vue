<template>
    <div class="box">
        <v-pagination
                :current=current
                :onChange=onChange
                :total=85>
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

                onChange: function (page) {
                    this.current = page
                }
            }
        },
        computed: {},
        methods: {},
        created(){
        }
    }
</script>

<style scoped>

</style>
