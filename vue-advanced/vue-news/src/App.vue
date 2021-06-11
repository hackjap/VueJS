<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";

export default {
  components: {
    ToolBar,
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

/* Router transition */
.page-enter-active,
.page_leave-active {
  transition: opacity.7s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
