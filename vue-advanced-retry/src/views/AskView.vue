<template>
	<div>
		<div v-for="ask in fetchedAsk" :key="ask.id">
			{{ ask.title }}
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	created() {
		this.$store.dispatch('FETCH_ASK');
	},

	computed: {
		// 1. mapGetters를 이용
		...mapGetters(['fetchedAsk']),
	},
};
</script>

<style></style>
