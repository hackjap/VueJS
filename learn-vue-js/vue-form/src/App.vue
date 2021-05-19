<template>
    <form v-on:submit.prevent="submitForm">
      <div>
        <label for="username">id: </label>
        <input type="text" id="username" v-model="username">
      </div>
      <div>
        <label for="password">pw: </label>
        <input type="text" id="password" v-model="password">
      </div>
      <button type="submit">login</button>
    </form>
</template>

<script>
//https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/ 이벤트 버블링 , 캡처, 위임 
// npm i axios : axios 라이브러리 설치 
import axios from 'axios'
export default {
  data:function(){
    return{
      username : '',
      password : '',
      
     
    }
  },
  methods:{
    submitForm:function(){
      //event.preventDefault(); // submit 후 새로고침을 방지해주는 메소드 
      console.log(this.username);
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username : this.username,
        password : this.password
      }
      axios.post(url,data)
        .then(function(response){
          console.log(response);
        })
        .catch(function(error){ 
          console.log(error);
        })
      
    }
  }
}
</script>

<style>

</style>