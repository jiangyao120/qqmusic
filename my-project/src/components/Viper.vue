<template>
<div> 
  <div v-show="!show">
    <div class="botton" @click="listen">
    <div class="botton-left">
      <img class="botton-left-img" :src="music.src" alt>
    </div>
    <div class="botton-right">
      <audio ref="musicAudio" class="botton-right-audio" :src="music.musicImgSrc" controls></audio>
    </div>
  </div>
  </div>
  
  <div v-show="show"> 
    <div class="beijing">
      <img :src="music.src" alt>
    </div>
    <div class="listens">
      <div class="listen" @click="fan">
        <div class="listen-title">{{music.title}}</div>
        <div class="listen-author">{{music.author}}</div>
      </div>
      <div class="pic">
        <div class="pic-box">
          <img :src="music.src" alt>
        </div>
      </div>
      <div class="control">
        <ul class="control-box">
          <li class="control-box-li">
            <i class="icon iconfont icon-xihuan"></i>
          </li>
          <li class="control-box-li" @click="prev">
            <i class="icon iconfont icon-shangyiqu101"></i>
          </li>
          <li class="control-box-li" v-show="!isPlay" @click="play">
            <i class="icon iconfont icon-bofang"></i>
          </li>
          <li class="control-box-li" v-show="isPlay" @click="pause">
              <i class="icon iconfont icon-pause"></i>
          </li>
          <li class="control-box-li" @click="next">
              <i class="icon iconfont icon-xiayiqu101"></i>
          </li>
          <li class="control-box-li">
              <i class="icon iconfont icon-pinglun"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
  
</template>
<script>
import { bus } from "@/router/index.js";
import "@/assets/font/iconfont.css";

import axios from "axios";
import url from "@/url.js";
export default {
  props: ["musicid"],

  data() {
    return {
      nowindex: 0,
      show: false,
      isPlay: false,
      musicdata: [],
      index: '',
      music: "",

    };
  },
  methods: {
    listen() {
      // let a=this.show;
      // a=!a;
      this.show=!this.show;

      this.$emit("change", this.show);
    },
    showid() {
      axios.get(url.getmusic).then(res => {
      this.musicdata=res.data;
      this.music=this.musicdata[this.musicid];
      this.index=this.musicid;
    });
    },
     fan() {
      this.show=!this.show;
      this.$emit("change", this.show);
    },
    play() {
        this.$refs.musicAudio.play();
        this.isPlay=!this.isPlay;
    },
    pause() {
      this.$refs.musicAudio.pause();
      this.isPlay=!this.isPlay;

    },
    prev() {
      // this.$refs.musicAudio.pause();
      this.index--;
      if(this.index<0){
          this.index=this.musicdata.length-1;
      }
      this.music = this.musicdata[this.index];
      this.isPlay=false;      

      // this.playnext();
    },
    playnext(){
       this.$refs.musicAudio.play();
      // this.isPlay=true;
      
    },
    next() {
        this.index++;
        if(this.index==this.musicdata.length){
            this.index=0;
        };
      this.music = this.musicdata[this.index];
      this.isPlay=false;      
      //  this.$refs.musicAudio.play();
      // this.play();

        

    }
  },
  created() {
      this.showid();
  },
  watch: {
    musicid() {
      this.music = this.musicdata[this.musicid];
      // console.log(this.musicid)
    }
  }
};
</script>
<style lang="scss">
.botton {
  position: fixed;
  bottom: 0;
  height: 6rem;
  border: 1px solid #ccc;
  background: #fff;
  width: 100%;
  &-left {
    margin: 0.5rem;
    width: 5rem;
    height: 5rem;
    background-size: contain;
    border-radius: 50%;
    overflow: hidden;
    &-img {
      width: 100%;
      height: 100%;
    }
  }
  &-right {
    position: absolute;
    top: 0.5rem;
    right: 3rem;
    font-size: 1rem;
    width: 60%;
    height: 100%;
    &-audio {
      width: 100%;
    }
  }
}
.pic {
  width: 100%;
  height: 30rem;
  overflow: hidden;
  &-box {
    margin: 5rem auto;
    width: 25rem;
    height: 25rem;
    border-radius: 50%;
    overflow: hidden;
    border: 2px #000 solid;
    z-index: 1;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.listen {
  width: 100%;
  height: 6rem;
  color: #fff;
  &-title {
    font-size: 2rem;
    margin-left: 6rem;
  }
  &-author {
    font-size: 1rem;
    margin-left: 6rem;
  }
}
.listens {
  width: 100%;
  height: 100%;
  position: fixed;
  background: #000;
  opacity: 0.7;
}
.beijing {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  filter: blur(20px);
  img {
    width: 100%;
    height: 100%;
  }
}
.control {
  width: 100%;
  height: 20rem;
  overflow: hidden;
  color: #fff;
  &-box {
    margin-top: 10rem;
    text-align: center;
    display: flex;
    &-li {
      float: left;
      flex: 1;
      i{
          font-size: 3rem;
      }
    }
  }
}
</style>