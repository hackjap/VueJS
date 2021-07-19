import ListView from '@/views/ListView';
import bus from '@/utils/bus';
export default function createListView(name) {
	return {
		// 재사용 할 컴포넌트 옵션
		name, // name : 컴포넌트에 들어가는 이름(보통 $route.name )
		created() {
			bus.$emit('start:spinner');
			this.$store.dispatch('FETCH_LIST', this.$route.name);
			bus.$emit('end:spinner');
		},
		render(createElement) {
			return createElement(ListView);
		},
	};
}
