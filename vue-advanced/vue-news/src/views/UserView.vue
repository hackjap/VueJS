<template>
  <div>
    <p>name : {{ userInfo.id }}</p>
    <p>karma : {{ userInfo.karma }}</p>
    <p>crated : {{ userInfo.created }}</p>
    <p>about : {{ userInfo.about }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    console.log(this.$route);
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userName);
  },
};
</script>

<style>
</style>