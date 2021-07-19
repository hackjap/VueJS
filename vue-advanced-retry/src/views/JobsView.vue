<template>
	<div>
		<div v-for="job in fetchedJobs" :key="job.id">
			{{ job.title }}
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	created() {
		this.$store.dispatch('FETCH_JOBS');
	},
	computed: {
		...mapGetters(['fetchedJobs']),
	},
};
</script>

<style></style>
