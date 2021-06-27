<template>
	<!-- 회원가입 폼-->
	<div class="col-md-6">
		<div class="padding-top-3x hidden-md-up"></div>
		<h3 class="margin-bottom-1x">
			계정이 없나요?
		</h3>
		<p>1분이면 가입하고 댕댕마켓을 즐길 수 있어요!</p>
		<form class="row" @submit.prevent="submitForm">
			<div class="col-sm-6">
				<div class="form-group">
					<label for="reg-email">이메일</label>
					<input
						class="form-control"
						type="email"
						id="reg-email"
						required
						v-model="username"
					/>
				</div>
			</div>
			<div class="col-sm-6">
				<div class="form-group">
					<label for="reg-phone">휴대폰 번호</label>
					<input class="form-control" type="text" id="reg-phone" required />
				</div>
			</div>
			<div class="col-sm-6">
				<div class="form-group">
					<label for="reg-pass">비밀번호</label>
					<input
						class="form-control"
						type="password"
						id="reg-pass"
						required
						v-model="password"
					/>
				</div>
			</div>
			<div class="col-sm-6">
				<div class="form-group">
					<label for="reg-pass-confirm">비밀번호 확인</label>
					<input
						class="form-control"
						type="password"
						id="reg-pass-confirm"
						required
					/>
				</div>
			</div>
			<div class="col-sm-6">
				<div class="form-group">
					<label for="reg-fn">닉네임</label>
					<input
						class="form-control"
						type="text"
						id="reg-fn"
						required
						v-model="nickname"
					/>
				</div>
			</div>
			<div class="col-sm-6">
				<div class="form-group">
					<label for="select-input">관심사</label>
					<!-- <select class="form-control select-interest" id="select-input">
						<option>관심사를 골라주세요</option>
						<option>대형견</option>
						<option>중형견</option>
						<option>소형견</option>
					</select> -->
					<form class="form-control">
						<div class="interestbox">
							<label> <input type="checkbox" />대형견</label>

							<label> <input type="checkbox" />중형견</label>

							<label> <input type="checkbox" />소형견</label>
						</div>
					</form>
				</div>
			</div>
			<div class="col-12 text-center text-sm-right">
				<button class="btn btn-primary margin-bottom-none" type="submit">
					가입하기
				</button>
			</div>
		</form>
		<p class="log">{{ logMessage }}</p>
	</div>
</template>

<script>
import { registerUser } from '../api/index';

export default {
	data() {
		return {
			// form values
			username: '',
			password: '',
			nickname: '',
			// log
			logMessage: '',
		};
	},
	methods: {
		async submitForm() {
			const userData = {
				username: this.username,
				password: this.password,
				nickname: this.nickname,
			};
			const { data } = await registerUser(userData);
			console.log(data.username);
			this.logMessage = `${data.username}님이 가입되었습니다`;
			this.initForm();
		},
		initForm() {
			this.username = '';
			this.password = '';
			this.nickname = '';
		},
	},
};
</script>

<style scoped>
.interestbox {
	display: flex;
	align-items: center;
	margin-top: 5%;
}
</style>
