import Vue from 'vue';
import Vuex from 'vuex';
import todo from './modules/todo';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
    //state,mutations(실질적인 상태값 작업수행),actions(비동기적인 작업수행),getters가 기본옵션임
    modules: {
        todo,
        user
    }
});
