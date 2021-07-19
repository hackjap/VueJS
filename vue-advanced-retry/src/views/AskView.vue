<template>
	<div><list-item /></div>
</template>

<script>
import { mapGetters } from 'vuex';
import ListItem from '../components/ListItem.vue';
export default {
	components: { ListItem },
	created() {
		this.$store.dispatch('FETCH_ASK');
	},

	computed: {
		// 1. mapGetters를 이용
		...mapGetters(['fetchedAsk']),
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
	border-bottom: 1px solid;
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
