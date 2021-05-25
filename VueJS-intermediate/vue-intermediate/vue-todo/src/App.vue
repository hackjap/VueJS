<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {

    components: {
        // 컴포넌트 태그명 : 컴포넌트 내용
        TodoHeader,
        TodoInput,
        TodoList,
        TodoFooter,
      }  
    }


  /*
  !!! mutations refactoring !!!

    data (){
      return {
        todoItems:[]
      }
    },  
    methods : { 
    
      addOnItem (todoItem){
        const obj = {completed: false, item: todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        this.$store.state.todoItems.push(obj);
      },
      removeOneItem (todoItem,index){
        this.$store.state.todoItems.splice(index, 1);
        localStorage.removeItem(todoItem.item);
      },
      toggleOneItem(todoItem,index){
         //todoItem.completed = !todoItem.completed;
         this.$store.state.todoItems[index].completed = !this.$store.state.todoItems[index].completed;
         localStorage.removeItem(todoItem.item);
         localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      },
      clearAllItems(){
        localStorage.clear();
        this.$store.state.todoItems = [];
      }
    },
    */

  
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
