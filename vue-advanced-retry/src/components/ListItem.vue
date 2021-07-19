<template>
	<div>
		<ul class="news-list">
			<li v-for="item in fetchedList" :key="item.id" class="post">
				<!-- 포인트 영역 -->
				<div class="points">
					{{ item.points || 0 }}
				</div>
				<!-- 기타 정보 영역 -->
				<div>
					<!-- 타이틀 -->
					<p classdff="news-title">
						<template v-if="item.domain">
							<a :href="item.url">{{ item.title }}</a>
						</template>
						<template else>
							<router-link :to="`item/${item.id}`">{{
								item.title
							}}</router-link>
						</template>
					</p>
					<small class="link-text">
						by

						<router-link
							v-if="item.user"
							:to="`/user/${item.user}`"
							class="link-text"
						>
							{{ item.user }}</router-link
						>
						<a :href="item.url" v-else>
							{{ item.domain }}
						</a>
					</small>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
	created() {
		const name = this.$route.name;

		if (name === 'news') this.$store.dispatch('FETCH_NEWS');
		else if (name === 'ask') this.$store.dispatch('FETCH_ASK');
		else this.$store.dispatch('FETCH_JOBS');
	},
	computed: {
		// ListItems() {},
		...mapGetters(['fetchedList']),
		// return this.$store.state.list;
		// ...mapGetters(['fetchedNews']),
		// 	const name = this.$route.name;
		// 	if (name === 'news') return this.$store.state.news;
		// 	else if (name === 'ask') return this.$store.state.ask;
		// 	else return this.$store.state.jobs;
		// },
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
