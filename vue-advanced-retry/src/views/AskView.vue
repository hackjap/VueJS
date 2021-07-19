<template>
	<div><list-item /></div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin';
export default {
	components: { ListItem },

	mixins: [ListMixin],
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
