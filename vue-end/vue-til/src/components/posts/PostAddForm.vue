<template>
	<div class="contents">
		<h1 class="page-header">Create Post</h1>
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
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { createPost } from '@/api/posts';
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
			try {
				this.isLoading = true;
				const response = await createPost({
					title: this.title,
					contents: this.contents,
				});
				console.log(response);
				this.isLoading = false;
				this.$router.push('/main');
			} catch (error) {
				console.log(error.response.data.message);
				this.logMessage = error.response.data.message;
			}
		},
	},
	components: {
		LoadingSpinner,
	},
};
</script>

<style scopted>
.form-wrapper .form {
	width: 100%;
}
.btn {
	color: white;
}
</style>
