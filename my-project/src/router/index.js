import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/HelloWorld'
import Shou from '@/view/Shou.vue'
import Music from '@/view/Music.vue'
import Personal from '@/view/Personal.vue'
import Musiclist from '@/view/Musiclist.vue'
export var bus = new Vue()

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/shou/:meanname',
            name: 'shou',
            component: Shou
        },
        {
            path: '/music/:meanname',
            name: 'music',
            component: Music
        },
        {
            path: '/personal/:meanname',
            name: 'personal',
            component: Personal
        },
        {
            path: '/shou/musiclist/:indexid',
            name: 'musiclist',
            component: Musiclist
        },
    ]
})