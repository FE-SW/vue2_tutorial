export default {
    namespaced: true, //true로 설정해야 vuex mapState,mapActions를 사용할때 모듈 namespace를 활용할수 있음음
    state: {
        todos: [
            { id: 1, text: 'todo1', checked: false},
            { id: 2, text: 'todo2', checked: false},
        ],

    },
    mutations: {
        //state, payload 가 인자
        ADD_TODO(state, value) {
            state.todos.push({
                id: Math.random(),
                text: value,
                checked: false
            });
        },
        TOGGLE_TODO(state, {id, checked}) {
            const index = state.todos.findIndex(todo => {
                return todo.id === id;
            });
            state.todos[index].checked = checked;
        },
        DELETE_TODO(state, todoId) {
            const index = state.todos.findIndex(todo => {
                return todo.id === todoId;
            });
            state.todos.splice(index, 1);
        }
    },
    actions: {
        //(context,value)
        //context안에는 commit,dispatch등이 들어있음
        addTodo({ commit }, value) {
            //비동기 작업이 끝나는시점에 commit을 수행(실제론 api 통신코드가 적힘)
            setTimeout(function () {
                commit('ADD_TODO', value);
            }, 500);
        },
        toggleTodo({ commit }, payload) {
            setTimeout(function () {
                commit('TOGGLE_TODO', payload);
            }, 500);
        },
        deleteTodo({ commit }, todoId) {
            setTimeout(function () {
                commit('DELETE_TODO', todoId);
            }, 500);
        },
    },
    //getters: 컴포넌트의 computed와 비슷함
    getters: {
        numberOfCompletedTodo: state => {
            return state.todos.filter(todo => todo.checked).length;
        }
    }
}