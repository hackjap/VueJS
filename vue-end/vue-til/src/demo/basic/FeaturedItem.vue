<template>
  <div id="featured-item">
      <Sort></Sort>
      <Goods></Goods>
      <!-- <span>{{$route.params.big}}</span>
      <span>{{$route.params.mid}}</span> -->


  </div>
</template>

<script>
import Goods from './common/goods.vue'
import Sort from './common/sort.vue'
import { getGoodsList } from '@/api/Goods.js';

export default {
    data(){
        return{
            cateName:$route.params.big+'/'+$route.params.mid
        };
    },
    async created(){
        const cateName=this.$route.params.name;
        try{
            // 카테고리 이름에 해당하는 상품들을 불러온다
            const response=await getGoodsList(cateName);
            // 상품들을 동기화시킨다
            this.$store.state.goods.goods=response.data.result;
            // 이후 goods.vue와 연동하여 동기화된 상품들을 보여준다
        }   catch (error) {
            alert(error);
    }
    },
    components:{
        Goods,
        Sort
    },
    methods:{

    }

}
</script>

<style>

</style>