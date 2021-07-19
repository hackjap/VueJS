<template>
	<div>
		<p>name : {{ fetchedUser.id }}</p>
		<p>karma : {{ fetchedUser.karma }}</p>
		<p>createAt : {{ fetchedUser.created }}</p>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	created() {
		const userName = this.$route.params.id;
		this.$store.dispatch('FETCH_USER', userName);
	},

	computed: {
		...mapGetters(['fetchedUser']),
	},
};
</script>

<style></style>
