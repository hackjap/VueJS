<template>
	<div id="nodiceadd">
		<div class="container-fluid">
			<div class="mb-6">
				<label for="exampleFormControlInput1" class="form-label">제목</label>
				<input
					class="form-control"
					id="exampleFormControlInput1"
					placeholder="제목"
				/>
			</div>
			<div class="mb-3">
				<label for="exampleFormControlTextarea1" class="form-label">내용</label>
				<textarea
					class="form-control"
					id="exampleFormControlTextarea1"
					rows="10"
				></textarea>
			</div>

			<div class="d-grid gap-2 d-md-flex justify-content-md-end" role="group">
				<button type="button" class="btn btn-outline-primary">
					공지등록
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.offcanvas-wrapper {
	z-index: 1;
}
</style>
