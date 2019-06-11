<template>
  <div>
    <CompenHead :meanname="meanname" @change="change"></CompenHead>
    <div class="wrap">
       <!-- <van-pull-refresh head-height:100  v-model="isLoading" class="pull" @refresh="onRefresh"> -->
    <ul class="shou-body">
      <li
        class="photo-li"
        @click="musiclist(index)"
        v-for="(videos,index) in imglist"
        :key="index"
      >
        <img :src="videos.src" alt>
        <div class="photo-li-title">{{videos.title}}</div>
      </li>
      <!-- <video :src="video.url"></video> -->
    </ul>
    <!-- </van-pull-refresh> -->
    </div>
   
    <CompenFoot></CompenFoot>
  </div>
</template>
<script>
import CompenHead from "@/components/CompenHead.vue";
import CompenFoot from "@/components/CompenFoot.vue";
import url from "@/url.js";
import axios from "axios";
// import url from "@/url.js";
export default {
  data() {
    return {
      meanname: "",
         isLoading: false,
      imglist: [],
      video :""
    };
  },
  components: {
    CompenHead,
    CompenFoot
  },
  methods: {
     onRefresh() {
      setTimeout(() => {
        // this.$toast('刷新成功');
        this.isLoading = false;
          // this.change();
      }, 500);
    },
    musiclist(index) {
      this.$router.push(`musiclist/${index}`);
    },
    change() {
        axios.get(url.getphoto).then(res=>{
        this.imglistt=res.data;
      });
    },
    changed(value) {
        axios
          .get(url.getphoto)
          .then(res => {
            this.imglist = this.imglist.concat(res.data);
          })
          
    }
  },
  created() {
    this.changed();
    this.meanname = this.$route.params.meanname;
  },
  mounted() {
    window.onscroll = () => {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      let scrollHeight = document.documentElement.scrollHeight;
      let clientHeight = document.documentElement.clientHeight;
      if (scrollHeight == scrollTop + clientHeight) {
        // 请求数据
        this.changed();
      }
    };
  },

};
</script>
<style lang="scss">
.shou-body {
  width: 100%;
  height: 100%;
  margin-top: 6rem;
  display: flex;
  flex-wrap: wrap;
}

.photo-li{
  width: 50%;
  text-align: center;
  img{
    width: 80%;
  }
    // flex: 1;
}
.pull{
  // margin-top: 6rem;
  
}
</style>