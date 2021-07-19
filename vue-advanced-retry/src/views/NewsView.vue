<template>
	<div>
		<p v-for="user in fetchedNews" :key="user.id">
			<a :href="user.url">{{ user.title }}</a>
		</p>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
// import { fetchNewList } from '@/api/index';
export default {
	created() {
		this.$store.dispatch('FETCH_NEWS');
	},
	computed: {
		...mapGetters(['fetchedNews']),
	},
};
</script>

<style></style>
