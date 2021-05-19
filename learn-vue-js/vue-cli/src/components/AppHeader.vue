// html의 표준태그와 충돌나지 않게 최소 두 단어의 파일명으로 생성한다

<template>
  <header>
      <h1>{{propsdata} }</h1>
      <button v-on:click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
    props: ['propsdata'],
    methods:{
        sendEvent:function(){
            this.$emit('renew');
        }
    }
}
</script>

<style>

</style>