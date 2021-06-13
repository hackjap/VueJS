<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import ListMixin from "../mixins/ListMixin.js";
// import bus from '../utils/bus.js';

export default {
  components: {
    ListItem,
  },
  // mounted(){  // 인스턴스가 불러와 화면에 띄워졌을떄
  //   bus.$emit('end:spinner');
  // }
   mixins: [ListMixin],
  
};
</script>

<style scoped>
</style>