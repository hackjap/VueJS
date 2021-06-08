<template>
  <div>
    <p v-for="ask in this.$store.state.ask" :key="ask.title">
      <!-- <a :href="ask.url">
        {{ ask.title }}
      </a> -->
      <router-link v-bind:to="`/item/${ask.id}`">
        {{ ask.title }}
      </router-link>
      <small>{{ ask.time_ago }} ,{{ ask.user }} </small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import { mapState} from 'vuex';

export default {
  computed: {
    ...mapGetters(["fetchedAsk"]),

    // # 2
    // ...mapState ({
    //   ask : state => state.ask
    // }),

    // # 1
    // ask(){
    //   return this.$store.state.ask;
    // }
  },
  created() {
    console.log(this.$store.state.ask);
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ASK", itemId);
  },

  //     created() {
  //     const userName = this.$route.params.id;
  //     this.$store.dispatch("FETCH_USER", userName);
  //   },
  // };
};
</script>

<style>
</style>