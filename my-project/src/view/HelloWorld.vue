<template>
  <div class="body">
    <h1>{{msg}}</h1>
    <div>
      <div>
        <!-- <label>账号</label> -->
        <input class="user" type="text" placeholder="账号" v-model="inf.zhanghao">
      </div>
      <div>
        <!-- <label>密码</label> -->
        <input class="user" type="password" placeholder="密码" v-model="inf.mima">
      </div>
      <button class="bto" @click="save()" v-show="denglu" >登陆</button>
      <button class="bto" @click="regist()" v-show="zhuche">注册</button>
      <div class="tishi" @click="addregist()" v-show="denglu">注册账号</div>
      <div class="tishi" @click="removeregist()" v-show="zhuche">取消注册</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/url.js"
import { resolve } from 'url';
export default {
  name: "HelloWorld",
  data() {
    return {
      denglu:true,
      zhuche:false,
      index:'发现',
      msg: "添加登陆",
      inf: {
        zhanghao: "",
        mima: "",
      }
    };
  },
  methods: {
    save(){
      let url1=url.loginuser;
      if(this.inf.zhanghao==""||this.inf.mima==""){
          alert("用户名，密码不能为空");
          return false;
      }
      else{
        axios.post(url1,{username:this.inf.zhanghao,password:this.inf.mima}).then(res=>{
            if(res.data.code==200 ){
                return this.$router.push(`/shou/${this.index}`);
                
            }
            if(res.data.code==501){
              return alert("用户不存在");
            }
            else{
              alert("密码错误")
            }

        }).then(()=>{
          this.$store.commit('insert',this.inf.zhanghao);
        }) .catch(function(error){
        // console.log(error);
        })
      }
    },
    regist(){
       if(this.inf.zhanghao==""||this.inf.mima==""){
          alert("用户名，密码不能为空");
          return false;
      }
      axios({
        url: url.registuser,
        method: 'post',
        data: {
          username : this.inf.zhanghao,
          password : this.inf.mima,
        }
      }).then((res)=>{
        // console.log(res);
        if(res.status ==200){
           this.denglu=true;
           this.zhuche=false;
        }
      }).catch()
    },
    addregist(){
      this.denglu=false;
      this.zhuche=true;
    },
    removeregist(){
      this.denglu=true;
      this.zhuche=false;
    }
  },
};
</script>

<style scoped>
.tishi{
  font: 300;
}
.body {
  margin: 2rem;
   margin-top: 6rem;
}
.user{
  width: 100%;
  height: 3rem;
  font-size: 2rem;
  /* color: #ccc; */
  border: none;
  border-bottom: #dbdbdb solid;
  outline: none;
}
.bto{
  margin-top: 2rem;
  color: #fff;
  width: 100%;
  height: 3rem;
  background: #09f;
  border-radius: 1rem;
  border: 1px solid #ccc;
  /* font-size: 1rem; */
}
</style>
