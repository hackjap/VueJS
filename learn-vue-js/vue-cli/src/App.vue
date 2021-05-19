<template>
  <!-- 템플릿 루트는 무조건 하나의 요소로 구성되어야 함  -->
  <div>
    <!-- 데이터 바인딩 -->
    <!-- <app-header v-bind:"프롭스 속성 이름"="상위 컴포넌트 데이터 이름"></app-header> -->
    <app-header v-bind:propsdata="str"
    v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
export default {
  // 싱글 페이지에서는 자원을 많이 공유하기 떄문에 함수를 리턴해주는 형태로 데이터를 입력받음
  // 데이터 뿐만아니라 디렉티브,메소드,이벤트 등을 구현 
  data : function(){
    return{
      str : 'Headers'
    }
  },
  components:{
    'app-header':AppHeader
  },
  methods:{
    renewStr:function(){
      this.str = 'hi';
    }
  }
}
</script>

<style>

</style>