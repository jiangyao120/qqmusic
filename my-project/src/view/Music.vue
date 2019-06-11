<template>
  <div>
    <CompenHead :meanname='meanname'></CompenHead>
    <div class="swiper-body">
       <swipe class="my-swipe">
      <swipe-item class="slide" v-for="(img,index) in photolist" :key="index">
        <img :src="img.src" alt>
      </swipe-item>
    </swipe>
    </div>
    <div class="check">
      <ul class="check-box">
        <li class="check-li" v-for="(item, index) in icons" :key="index">
          <i class="icon iconfont" :class="item.class"></i>
          <div>{{item.name}}</div>
        </li>
      </ul>
    </div>
    <div class="gedan">
      <div class="gedan-top">
        <div class="gedan-title">为你推荐歌单</div>
        <div class="more">更多</div>
      </div>
      <ul class="gedan-list">
        <li class="gedan-list-li" @click="musiclist(index)" v-for="(title,index) in swiper" :key="index">
          <img :src="title.src" alt>
          <div class="gedan-list-li-title">{{title.title}}</div>
        </li>
      </ul>
    </div>
    <div class="gedan">
      <div class="gedan-top">
        <div class="gedan-title">分类专区</div>
        <div class="more">更多</div>
      </div>
      <ul class="gedan-list">
        <li class="gedan-list-li" @click="musiclist(index)" v-for="(title,index) in swiper" :key="index">
          <img :src="title.src" alt>
          <div class="gedan-list-li-title">{{title.title}}</div>
        </li>
      </ul>
    </div>
    
    <CompenFoot></CompenFoot>
  </div>
</template>
<script>
import "@/assets/font/iconfont.css";
import "vue-swipe/dist/vue-swipe.css";
import { Swipe, SwipeItem } from "vue-swipe";
import CompenHead from "@/components/CompenHead.vue";
import CompenFoot from "@/components/CompenFoot.vue";
import url from "@/url.js";
import list from "@/assets/photo.json";
// import Swiper from "@/components/Swiper.vue";
import axios from "axios";
export default {
  components: {
    CompenHead,
    CompenFoot,
    swipe: Swipe,
    "swipe-item": SwipeItem
  },
  data() {
    return {
      meanname:'',
      swiper: [],
      photolist:[],
      icons: [
        {
          name: "排行榜",
          class: "icon-paixingbang"
        },
        {
          name: "推荐",
          class: "icon-tuijian"
        },
        {
          name: "歌单",
          class: "icon-gedan"
        },
        {
          name: "电台",
          class: "icon-diantaizhibo"
        },
        {
          name: "直播",
          class: "icon-zhibo"
        }
      ]
    };
  },
  methods: {
    musiclist(index){
        this.$router.push(`../shou/musiclist/${index}`);
    }
  },
  created() {
    this.photolist=list.photoData
    console.log(this.photolist);
    axios.get(url.getphoto).then(res => {
      this.swiper = res.data;
      // this.titlelist = res.data.title;
    });
    this.meanname = this.$route.params.meanname;
  }
};
</script>
<style lang="scss">
.swiper-body {
  width: 100%;
  height: 200px;
  margin-top: 6rem;
}
.my-swipe {
  height: 100%;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide {
  width: 100%;
  height: 100%;
  // color: #fff;
  // background-size: contain;

  img {
    width: 100%;
    height: 100%;

  }
}
.check {
  margin-top: 1rem;
  width: 100%;
  height: 5rem;
  &-box {
    width: 100%;
    height: 100%;
    display: flex;
    text-align: center;
  }
  &-li {
    float: left;
    flex: 1;
  }
  &-li:hover {
    color: #0f0;
  }
}
.gedan {
  width: 100%;
  height: 21rem;
  overflow: hidden;
  position: relative;
  &-title {
    font-size: 2rem;
    margin: 1rem;
    float: left;
  }
  &-top{
      width: 100%;
      height: 5rem;
      line-height: 5rem;
  }
  &-list{
    
      width: 100%;
      position: absolute;
      height: 15rem;
      top: 5rem;
      left: 0;
      &-li{
          float: left;
          width: 26%;
          height: 100%;
          margin: 1rem;
          overflow: hidden;
          img{
              width: 100%;
              height: 80%;
              border-radius: 1rem;
          }
          &-title{
              width: 100%;
              height: 3rem;
              line-height: 3rem;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
          }
      }
  }
}
.more {
  float: right;
  margin: 1rem;
}
</style>