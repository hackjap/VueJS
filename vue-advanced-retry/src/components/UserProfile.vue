<template>
	<div class="user-container">
		<div>
			<i class="fas fa-user"></i>
		</div>

		<div class="user-description">
			<div>
				<slot name="username">
					<!--  상위컴포넌트에서 정의할 영역  -->
				</slot>
			</div>
			<div class="time">
				<slot name="time">
					<!--  상위컴포넌트에서 정의할 영역  -->
				</slot>
			</div>
			<slot name="karma">
				<!--  상위컴포넌트에서 정의할 영역  -->
			</slot>
		</div>
	</div>
</template>

<script>
// import { mapGetters } from 'vuex';
export default {
	// computed: {
	// 	...mapGetters(['fetchedUser']),
	// }, ft
	props: {
		info: Object,
	},
};
</script>

<style scoped>
.user-container {
	display: flex;
	align-items: center;
	padding: 0.5rem;
}
.fa-user {
	font-size: 2.5rem;
}

.user-description {
	padding-left: 8px;
}
.time {
	font-size: 0.7rem;
}
</style>
