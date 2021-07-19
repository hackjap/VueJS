<template>
	<div>
		<tool-bar></tool-bar>
		<transition name="page">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
	components: {
		ToolBar,
	},
};
</script>

<style>
body {
	padding: 0;
	margin: 0;
}
a {
	text-decoration: 0;
}
a:hover {
	color: #42b883;
}
a.router-link-exact-active {
	text-decoration: underline;
}

/* 라우터 트랜지션 */
.page-enter-active,
.page-leave-active {
	transition: opacity 0.5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
