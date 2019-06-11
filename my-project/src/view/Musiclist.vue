<template>
  <div>
    <div v-show="!show">
      <div class="book">
        <div class="book-img">
          <img :src="photos.src" alt>s
        </div>
        <header class="book-top">
          <div @click="backhistory">返回</div>
        </header>
        <div class="book-pic">
          <img :src="photos.src" alt>
        </div>
        <div class="book-name">
          <div>{{photos.title}}</div>
        </div>
      </div>
      <ul class="ul">
        <div class="ul-top" @click="playall">播放全部</div>
        <div class="ul-list">
          <li class="list" @click="add(index)" v-for="(title,index) in music" :key="index">
            <div class="list-img">
              <img :src="title.src" alt>
            </div>
            <div class="list-base">
              <div class="list-base-actou">{{title.title}}</div>
              <div class="list-base-name">{{title.author}}</div>
            </div>
            <i class="icon iconfont icon-bofang icons"></i>
          </li>
        </div>
      </ul>
    </div>
      <Viper :musicid="musicid" @change="change"></Viper>

    <!-- <Listen v-show="show" @change="change" :musicid="musicid"></Listen> -->
  </div>
</template> 
 <script>
import "@/assets/font/iconfont.css";
import axios from "axios";
import Viper from "@/components/Viper.vue";
import url from "@/url.js";
export default {
  data() {
    return {
      show: false,
      indexid: "",
      photos:'',
      photo: [],
      music: [],
      musicid: 1,

   
    };
  },
  methods: {
    change(value) {
      this.show = value;
    },
    add(index) {
      this.musicid = index;
      // console.log(this.musicid);
    },
    backhistory() {
      this.$router.go(-1);
    },
    playall(){
      
    },
  },
  created() {
    this.indexid = this.$route.params.indexid;
    axios.get(url.getmusic).then(res => {
      
         this.music = this.music.concat(res.data);
    });
     axios.get(url.getphoto).then(res => {
         this.photo = res.data;
         this.photos=this.photo[this.indexid];
          // console.log(this.photos);
    });
    
      
    

  },
  
  components: {
    Viper,
  }
};
</script>
<style lang="scss">
.ul {
  width: 100%;
  margin-top: -2.5rem;
  border-top-left-radius: 2rem;
  // overflow: hidden;
  background: hsl(0, 8%, 91%);

  border-top-right-radius: 2rem;
  &-top {
    text-align: center;
    line-height: 4rem;
    background: hsl(0, 8%, 91%);
    // border-top-right-radius: 2rem;
    // border-top-left-radius: 2rem;

    width: 100%;
    height: 4rem;
    position: sticky;
    top: 0;
  }
  &-list {
    border-top-left-radius: 2rem;
    background: hsl(0, 0%, 97%);
    border-top-right-radius: 2rem;

  }
}
.book {
  
  width: 100%;
  height: 30rem;
  overflow: hidden;
  position: relative;
  &-img {
    width: 100%;
    height: 100%;
    position: absolute;
    filter: blur(100px);
    z-index: -1;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &-pic {
    width: 35%;
    height: 50%;
    margin: 2rem;
    margin-top: 5rem;
    float: left;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &-name {
    width: 40%;
    height: 60%;
    margin-top: 5rem;
    margin-right: 2rem;
    float: right;
  }
  &-top {
    position: fixed;
    top: 0;
    left: 0;
    height: 4rem;
    line-height: 4rem;
    z-index: 1;
  }
}
.icons {
  font-size: 2.6rem;
  float: right;
  margin-top: -4rem;
  margin-right: 4rem;
}
.list {
  width: 100%;
  // background: #f1c2d1;
  height: 6rem;
  overflow: hidden;
  &-img {
    width: 20%;
    height: 4rem;
    margin: 1rem;
    float: left;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &-base {
    width: 50%;
    // float: right;
    margin-top: 1rem;
    margin-left: 10rem;
  }
}
</style>