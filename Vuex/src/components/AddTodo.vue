<template>
    <input
        v-model="todoText"
        type="text"
        class="w-100 p-2"
        placeholder="Type todo"
        @keyup.enter="addTodo"
    >
</template>

<script>
export default {
    data() {
        return {
            todoText: '',
        }
    },
    methods: {
        addTodo(e) {
            // this.$store.commit('ADD_TODO', e.target.value) -> 바로 commit -> mutation
            // 보통 비동기작업을 수행할때 dispatch를 통해 action을 일으킴
            // distpatch(type,payload)
            this.$store.dispatch('todo/addTodo', e.target.value); //distpatch를 통해 action -> commit-> mutation
            this.todoText = '';
            // this.$emit('add-todo', e.target.value);
        }
    }
}
</script>

<style>

</style>