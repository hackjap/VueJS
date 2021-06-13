import bus from '../utils/bus.js';

export default {

    mounted(){  // 인스턴스가 불러와 화면에 띄워졌을떄
    bus.$emit('end:spinner');
  }

  
    // 재사용할 컴포넌트 옵션 & 로직 
    //   created() {
    //         bus.$emit('start:spinner');
    //            this.$store
    //                 .dispatch("FETCH_LIST",this.$route.name)
    //                 .then(() => {
    //                     console.log("fetched");
    //                     bus.$emit("end:spinner");
    //                 })
    //                 .catch((error) => {
    //                     console.log(error);
    //                 });
    //     }





}


