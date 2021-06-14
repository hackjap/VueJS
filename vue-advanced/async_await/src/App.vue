<template>
  <div>
    <button @click="loginUser1">login</button>
    <ul>
      <li v-for="item in items" :key="item.id">{{item}}</li>
    </ul>
    <h1>List</h1>
  </div>
</template>

<script>
  import axios from 'axios';
  // import {handleException} from './utils/handler.js';

  export default {
    data() {
      return {
        items: [],
      }
    },
    methods: {
      loginUser() {
        axios.get('https://jsonplaceholder.typicode.com/users/1')
          .then(response => {
            if (response.data.id === 1) {
              axios.get('https://jsonplaceholder.typicode.com/users/1/todos')
                .then(response => {

                  this.items = response.data;
                })
                .catch();
            }
          })

      },
      async loginUser1() {
        try {
          var response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
          if (response.data.id === 1) {
            console.log("사용자가 인증되었습니다.");
            var list = await axios.get('https://jsonplaceholder.typicode.com/users/1/todos');
            this.items = list.data;
          }
        } catch (error) {
          // handleException(error); // 예외처리 함수 
          console.log(error);
        }

      },
    },

  }
</script>

<style>

</style>