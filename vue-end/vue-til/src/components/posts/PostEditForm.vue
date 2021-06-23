<template>
	<div class="contents">
		<h1 class="page-header">Edit Post</h1>
		<div class="form-wrapper">
			<form class="form" @submit.prevent="submitForm">
				<LoadingSpinner v-if="isLoading"></LoadingSpinner>
				<div>
					<label for="title">Title</label>
					<input id="title" type="text" v-model="title" />
				</div>
				<div>
					<label for="contents">Contents:</label>
					<textarea id="contents" type="text" rows="5" v-model="contents" />
					<p class="validation-text warning" v-if="!isContentsValid">
						Contents length must be less than 200
					</p>
				</div>
				<button class="btn" type="submit">Create</button>
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
			isLoading: false,
		};
	},
	computed: {
		isContentsValid() {
			return this.contents.length <= 200;
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

<style scopted></style>
