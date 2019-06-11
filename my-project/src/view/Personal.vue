<template>
    <div>
        <CompenHead :meanname='meanname'></CompenHead>
        <div class="myperson">
            <div class="myperson-name">
                <div class="myperson-name-top">
                    <!-- <van-uploader :after-read="afterRead" /> -->
                    <img src="../assets/img/1.jpg" alt="">
                    <h3>{{shuju}}</h3>
                </div>
                <div class="myperson-name-huodong">
                    <div class="font">活动中心</div>
                    <div >立即签到领积分</div>
                </div>
                <div class="myperson-name-huiyuan">
                    <div class="font">会员中心</div>
                    <div>新用户9元首开</div>
                </div>
            </div>
            <div class="myperson-list">
                <ul>
                    <li class="myperson-list-li" v-for="(title,index) in personlist" :key="index">
                         <i class="icon iconfont" :class="title.icon"></i>
                        <div class="myperson-list-li-name">{{title.name}}</div>
                    </li>
                </ul>
            </div>
        </div>
        <CompenFoot></CompenFoot>
    </div>
</template>
<script>
import "@/assets/font/iconfont.css";
import CompenHead from "@/components/CompenHead.vue";
import CompenFoot from "@/components/CompenFoot.vue";
import axios from 'axios';
export default {
    components:{
        CompenHead,
        CompenFoot
  },
  data() {
      return {
          meanname:'',
          shuju: this.$store.state.user,
          personlist:[
          {
              icon:'icon-yinyue',
              name:'本地音乐'
          },
          {
              icon:'icon-bofang',
              name:'最近播放'
          },
          {
              icon:'icon-xiazai',
              name:'下载管理'
          },
          {
              icon:'icon-diantaizhibo',
              name:'我的电台'
          },
          {
              icon:'icon-unie601',
              name:'我的收藏'
          }]
      }
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
    //   console.log(file);
    }
  },
  created() {
      this.meanname = this.$route.params.meanname;
    //   axios.get("localhost:8080/creatinf").then(res=>{
    //     //   this.shuju=res.data.user;
    //     //   console.log(res.data);
    //   })
    //   console.log(this.$store.state.user);
  },
}
</script>
<style lang="scss">
    .myperson{
        width: 100%;
        margin-top: 6rem;
        &-name{
            width: 100%;
            height: 12rem;
            position: relative;
            border-bottom: 0.1px solid #ccc;
            &-top{
                width: 80%;
                margin: 0 auto;
                height: 5rem;
                line-height: 5rem;
                overflow: hidden;
                font-size: 1.5rem;
                border-bottom: 0.1px solid #ccc;
                img{
                    width: 3rem;
                    height: 3rem;
                    line-height: 3rem;
                    border-radius: 1rem;
                    float: left;
                    margin:1rem;
                    margin-left: 6rem; 
                }  
            }
            &-huodong{
                width: 50%;
                height: 100%;
                // margin-left: 2rem;
                margin: 1rem;
                margin-left: 5rem;
            }
            &-huiyuan{
                width: 35%;
                height: 100%;
                position: absolute;
                top: 5rem;
                right: 0;
                margin: 1rem;
            }
        }
        &-list{
            width: 100%;
            border-bottom: 0.1px solid #ccc;
            &-li{
                
                width: 100%;
                height: 4rem;
                line-height: 4rem;
                i{
                    font-size: 2rem;
                    margin-left: 4rem
                }
                &-name{
                    display: inline;
                    margin-left: 2rem;
                    font-size: 1.8rem;
                }
            }
        }
    }
      .font{
            // color:red;
            font-size: 2rem;
        }
</style>