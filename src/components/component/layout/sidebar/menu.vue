<template>
    <ul class="sidebar-menu">
        <li class="header">{{title}}</li>
        <sub-menu v-for="(item, index) in data" :item="item" :index="index" :nav="nav" :hash="index"></sub-menu>
    </ul>
</template>


<script>
    export default {
        name: 'vlte-sidebar-menu',
        props: ['title', 'data'],
        components: {
            subMenu: {
                name: 'sub-menu',
                props: ['item', 'nav', 'index', 'hash'],
                data(){
                    return {
                        isActive: false
                    }
                },
                computed: {
                    hashArr(){
                        return String(this.hash).split('.')
                    }
                },
                methods: {
                    navSlide: function (index) {
                        let _this = this;
                        let result = this.nav;
                        let hash = String(index).split('.');

                        if (hash.length > 1) {
                            let abc = '';
                            let qq = '';
                            hash.forEach(function (val) {
                                abc = val;
                                qq = result[val];
                                result = result[val].child || result[val];
                            });
                            result.hasSub = !result.hasSub;
                            _this.$set(qq, Number(abc), result);
                            this.isActive = result.hasSub;
                        } else {
                            hash[0]=Number(hash[0]);
                            let qq = this.nav;

                            qq[hash[0]].hasSub=!qq[hash[0]].hasSub;

                            this.isActive = qq[hash[0]].hasSub;
                            _this.$set(_this.nav,hash[0], qq[hash[0]]);
                        }
                    }
                },
                template: '\
                      <li v-if="item.child" :class="[{active: isActive}]">\
                          <a href="javascript:;" @click.stop.prevent="navSlide(item.hash)">\
                              <i :class="item.iconFont"></i> <span>{{item.title}}{{nav[index].hasSub}}</span>\
                              <span class="pull-right-container" v-if="item.child">\
                                  <i class="fa fa-angle-left pull-right"></i>\
                              </span>\
                          </a>\
                          <ul class="treeview-menu">\
                              <sub-menu v-for="(item,index) in item.child"  :item="item" :index="index" :nav="nav" :hash="item.hash"></sub-menu>\
                          </ul>\
                      </li>\
                      <li v-else class="treeview" @click.stop.prevent="navSlide(item.hash)">\
                          <router-link :to="item.href">\
                              <i :class="item.iconFont"></i><span>{{item.title}}{{nav[index].hasSub}}</span>\
                              <span class="pull-right-container" v-if="item.child">\
                                  <i class="fa fa-angle-left pull-right"></i>\
                              </span>\
                          </router-link>\
                      </li>',
                created(){
                    let result = this.nav;
                    let hash = this.hashArr;

                    hash.forEach(function (val) {
                        result = result[val].child || result[val];
                    });

                    this.isActive = result.hasSub;
                }
            }
        },
        data () {
            return {
                nav: {}
            };
        },
        created(){
            let _this = this;
            let data = this.data;
            let abc = function (arr, hash) {

                arr.map(function (obj, index) {
                    obj.hasSub = false;

                    if (hash) {
                        if (typeof hash == 'string') {
                            hash = hash.split('.');
                        }

                        hash.push(index)
                    } else {
                        hash = [index];
                    }

                    obj.hash = hash.join('.');

                    if (obj.child) {
                        abc(obj.child, obj.hash);
                    }

                    hash.pop();
                });
            };

            abc(data);

//            this.nav = data;
            this.nav = Object.assign({}, this.nav, data)
        }
    }
</script>