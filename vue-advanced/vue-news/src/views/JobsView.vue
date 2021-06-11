<template>
  <div>
    <ul class="news-list">
      <li v-for="job in this.$store.state.jobs" :key="job.title" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ job.points || 0 }}
        </div>

        <div class="">
          <!-- 기타 정보 영역 -->
          <p class="news-title">
            <a :href="job.url">
              {{ job.title }}
            </a>
          </p>
          <small class="link-text">
            {{ job.time_ago }}by
            <!-- <router-link class="link-text" v-bind:to="`/user/${job.domain}`">
              {{ job.user }}</router-link
            > -->
            <a :href="job.url">{{ job.domain }}</a>
          </small>
        </div>
      </li>
    </ul>

    <!-- <p v-for="job in this.$store.state.jobs" :key="job.title">
      <a :href="job.url">
        {{ job.title }}
      </a>
      <small>{{ job.time_ago }} , {{ job.domain }}</small>
    </p> -->
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_JOBS");
  },
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>