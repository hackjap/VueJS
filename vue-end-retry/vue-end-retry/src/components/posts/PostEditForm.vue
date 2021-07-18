<template>
  <div class="contents">
    <h1 class="page-header">Edit Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title"> Title : </label>
          <input type="text" id="title" v-model="title" />
        </div>
        <div>
          <label for="contents"> Content : </label>
          <textarea type="text" id="contents" rows="5" v-model="contents" />
          <p class="vallidation-text warning" v-if="!isContentsValid">
            Contents length must be less than 250
          </p>
        </div>
        <button type="submit" class="btn">Edit</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';
export default {
  data() {
    return {
      title: '',
      contents: '',
      logMessage: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200; // 200자 이하
    },
  },
  methods: {
    async submitForm() {
      const id = this.$route.params.id;
      try {
        await editPost(id, {
          title: this.title,
          contents: this.contents,
        });
        this.$router.push('/main');
      } catch (error) {
        console.log(error);
        this.logMessage = error;
      }
    },
  },
  async created() {
    const id = this.$route.params.id;
    const { data } = await fetchPost(id);

    this.title = data.title;
    this.contents = data.contents;
  },
};
</script>

<style scopped>
.form-wrapper .form {
  width: 100%;
}
.btn {
  color: white;
}
</style>
