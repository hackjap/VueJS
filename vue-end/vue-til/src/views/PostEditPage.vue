<template>
	<div class="form-container">
		<PostEditForm></PostEditForm>
	</div>
</template>

<script>
import PostEditForm from '@/components/posts/PostEditForm.vue';

export default {
	components: {
		PostEditForm,
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
