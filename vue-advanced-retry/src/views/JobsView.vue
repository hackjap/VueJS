<template>
	<div>
		<list-item></list-item>
		<!-- <ul class="news-list">
			<li v-for="item in fetchedJobs" :key="item.id" class="post">
				<div class="points">
					{{ item.points || 0 }}
				</div>

				<div>
					<p class="news-title">
						<a :href="item.url">{{ item.title }}</a
						>>
						{{ item.title }}
					</p>
					<small class="link-text">
						{{ item.time_ago }} by {{ item.domain }}
					</small>
				</div>
			</li>
		</ul> -->
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import ListItem from '../components/ListItem.vue';
export default {
	components: { ListItem },
	created() {
		this.$store.dispatch('FETCH_JOBS');
	},
	computed: {
		...mapGetters(['fetchedJobs']),
	},
};
</script>
