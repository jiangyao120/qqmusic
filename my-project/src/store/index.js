import Vue from 'vue';
import vuex, { Store } from 'vuex';

Vue.use(vuex);

export default new vuex.Store({
    state: {
        user: '1',
        // index: 1
    },
    getters: {

    },
    actions: {

    },
    mutations: {
        insert(state, user) {
            state.user = user;
        },
        // insertmusic(state, index) {
        //     state.index = index;
        // }
    }
})