<template>
	<div>
		userVIe
	</div>
</template>

<script>
import axios from 'axios';
export default {
	async created() {
		const response = await axios.get('https://api.hnpwa.com/v0/news/1.json');
		console.log(response);
	},
};
</script>

<style></style>
