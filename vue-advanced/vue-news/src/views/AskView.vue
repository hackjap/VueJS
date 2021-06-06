<template>
   <div>
    <p v-for="ask in this.$store.state.ask" :key="ask.title">

      <a :href="ask.url">
         {{ask.title}}
      </a>
      <small>{{ask.time_ago}} , {{ask.user}}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters} from 'vuex';
// import { mapState} from 'vuex';

export default {

  computed : {
    ...mapGetters([
    'fetchedAsk'
    ])


    // # 2 
    // ...mapState ({
    //   ask : state => state.ask
    // }),

    // # 1 
    // ask(){
    //   return this.$store.state.ask;
    // }
  },
  created(){
    this.$store.dispatch('FETCH_ASK');
    
  }

}
</script>

<style>

</style>