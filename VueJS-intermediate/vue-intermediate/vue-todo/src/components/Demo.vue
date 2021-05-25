<template>
  <div id="root">
      <p>{{originalPrice}}</p>
      <p>{{ doublePrice }}</p>
      <p>{{ triplePrice }}</p>

      <!-- <p>{{this.$demoStore.getters.originalPrice }}</p>
      <p>{{this.$demoStore.getters.doublePrice }}</p>
      <p>{{this.$demoStore.getters.triplePrice }}</p> -->

  </div>
</template>

<script>
import {mapGetters} from 'vuex';


export default {
    computed: {
        ...mapGetters(['originalPrice','doublePrice','triplePrice']),

        originalPrice(){
            return this.$demoStore.getters.originalPrice;
        },
        doublePrice(){
            return this.$demoStore.getters.doublePrice;

        },
        triplePrice(){
            return this.$demoStore.getters.triplePrice;
        }
    }
}
</script>

<style>

</style>