<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOnItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem"
                                           v-on:toggleItem="toggleOneItem"> </TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
    data (){
      return {
        todoItems:[]
      }
    },
    methods : {
      addOnItem (todoItem){
        const obj = {completed: false, item: todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        this.todoItems.push(obj);
      },
      removeOneItem (todoItem,index){
        this.todoItems.splice(index, 1);
        localStorage.removeItem(todoItem.item);
      },
      toggleOneItem(todoItem,index){
         //todoItem.completed = !todoItem.completed;
         this.todoItems[index].completed = !this.todoItems[index].completed;
         localStorage.removeItem(todoItem.item);
         localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      },
      clearAllItems(){
        localStorage.clear();
        this.todoItems = [];
      }

    },
    // 앱이 시작할 때 
   created () {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },

  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    // TodoHeader: TodoHeader
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }  
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>
