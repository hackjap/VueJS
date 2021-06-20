<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">ID : </label>
			<input id="username" type="text" v-model="username" />
		</div>
		<div>
			<label for="password">PW : </label>
			<input id="password" type="text" v-model="password" />
		</div>
		<button :disabled="!isUsernameValid || !password" type="submit">
			로그인
		</button>
		<p>{{ logMessage }}</p>
	</form>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
	data() {
		return {
			// form value
			username: '',
			password: '',
			// log
			logMessage: '',
		};
	},
	computed: {
		isUsernameValid() {
			return validateEmail(this.username);
		},
	},
	methods: {
		async submitForm() {
			try {
				// 비즈니스 로직
				const userData = {
					username: this.username,
					password: this.password,
				};
				const { data } = await loginUser(userData);
				console.log(data.user.username);
				this.logMessage = `${data.user.username} 님 환영합니다`;
			} catch (error) {
				// 에러 핸들링할 코드
				// console.log(error.response.data);
				this.logMessage = error.response.data;
			} finally {
				this.initForm();
			}
		},
		initForm() {
			this.username = '';
			this.password = '';
		},
	},
};
</script>

<style></style>
