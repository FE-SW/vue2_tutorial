<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <!-- @keyup.enter="addTodo":엔터를 눌렀을떄의 이벤트바인딩 설정 -->
    <input 
      v-model="todoText"
      type="text" 
      class="w-100 p-2" 
      placeholder="Type todo"
      @keyup.enter="addTodo"
    >
    <hr>
    <!-- @toggle-checkbox,@click-delete 자식컴포넌트에서 설정한 이벤트명 -->
    <Todo 
      v-for="todo in todos" 
      :key="todo.id" 
      :todo="todo"
      @toggle-checkbox="toggleCheckbox"
      @click-delete="deleteTodo"
    />
  </div>
</template>

<script>
import Todo from '@/components/Todo.vue';

export default {
  components: {
    Todo
  },
  data() {
    return {
      todoText: '',
      todos: [
        { id: 1, text: 'buy a car', checked: false},
        { id: 2, text: 'play game', checked: false},
      ]
    }
  },

  methods: {
    addTodo(e) {
      this.todos.push({
        id: Math.random(),
        text: e.target.value,
        checked: false
      });
      this.todoText = '';
    },
    //자식컴포넌트에서 보내준 id와 checked
    toggleCheckbox({id, checked}) {
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      });
      this.todos[index].checked = checked;
    },
    deleteTodo(id) {
      // const index = this.todos.findIndex(todo => {
      //   return todo.id === id;
      // });
      // this.todos.splice(index, 1);
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
  }
}
</script>
