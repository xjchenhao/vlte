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
                            hash[0] = Number(hash[0]);
                            let qq = this.nav;

                            qq[hash[0]].hasSub = !qq[hash[0]].hasSub;

                            this.isActive = qq[hash[0]].hasSub;
                            _this.$set(_this.nav, hash[0], qq[hash[0]]);
                        }
                    }
                },
                template: '\
                      <li v-if="item.child" :class="[{active: isActive}]">\
                          <a href="javascript:;" @click.stop.prevent="navSlide(item.hash)">\
                              <i :class="item.iconFont"></i> <span>{{item.title}}{{isActive}}</span>\
                              <span class="pull-right-container" v-if="item.child">\
                                  <i class="fa fa-angle-left pull-right"></i>\
                              </span>\
                          </a>\
                          <ul class="treeview-menu">\
                              <sub-menu v-for="(item,index) in item.child"  :item="item" :index="index" :nav="nav" :hash="item.hash"></sub-menu>\
                          </ul>\
                      </li>\
                      <li v-else :class="[{active: isActive,treeview:true}]">\
                          <router-link :to="item.href">\
                              <i :class="item.iconFont"></i><span>{{item.title}}{{isActive}}</span>\
                              <span class="pull-right-container" v-if="item.child">\
                                  <i class="fa fa-angle-left pull-right"></i>\
                              </span>\
                          </router-link>\
                      </li>',
                created(){
                    let _this = this;
                    let result = this.nav;
                    let hash = this.hashArr;

                    let length = hash.length;
                    let i = 0;
                    if (length > 1) {
                        hash.forEach(function (val) {
                            if (i < length-1) {
                                result = result[val].child;
                                i++
                            } else {
                                result = result[val];
                            }
                        });
                        _this.isActive = result.hasSub;
                    } else {
                        hash[0] = Number(hash[0]);
                        let qq = this.nav;

                        _this.isActive = qq[hash[0]].hasSub;
                        _this.$set(_this.nav, hash[0], qq[hash[0]]);
                    }
                }
            }
        },
        data () {
            return {
                urlHash: '',
                nav: {}
            };
        },
        created(){
            let _this = this;
            let data = this.data;

            // 给各菜单层级增加，表示对象位置的hash和展开状态。
            {
                let addAttr = function (arr, hash) {

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
                            addAttr(obj.child, obj.hash);
                        }

                        hash.pop();
                    });
                };

                addAttr(data);
            }

            let urlFindHash = function (arr) {
                let isRecursive = true;

                if (!arr) {
                    return;
                }
                for (let i = 0, l = arr.length; i < l; i++) {
                    if (!isRecursive) {
                        return;
                    }
                    if (arr[i].href == location.pathname) {
                        _this.urlHash = arr[i].hash;

                        isRecursive = false;
                        break;
                    }

                    urlFindHash(arr[i].child);
                }
            };

            urlFindHash(data);

            // 设置展开后的nav值
            {
                let result = data;
                let urlHash = this.urlHash.split('.');
                urlHash.forEach(function (val) {
                    result[val].hasSub = true;
                    result = result[val].child || result[val];
                });
            }

            _this.nav = Object.assign({}, _this.nav, data)
        }
    }
</script>
