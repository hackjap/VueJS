<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo(this.newTodoItem.todoItems)">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>
      <Modal v-if="showModal" @close="showModal = false">
        <!--
          you can use custom content here to overwrite default content
         -->
        <h3 slot="header" style="color:red;">
          경고!
          <i class="closeModalZBtn fas fa-times" @click="showModal=false"> </i>
         </h3>
        <div slot="body">
            내용을 입력하세요.
        </div>
        <div slot="footer">
            copy right
        </div>
      </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
  data() {
    return {
      newTodoItem: '',
      showModal: false
    }


  },
  methods: {

      addTodo() {
      if (this.newTodoItem !== '') {
        // this.$emit('addTodoItem',this.newTodoItem)
        // const text = this.newTodoItem.trim();
        this.$store.commit('addOneItem',this.newTodoItem);
        this.clearInput();
      }else{
        this.showModal  =!this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  },
  components:{
    Modal 
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalZBtn{
  color: #42b983;
}
</style>
