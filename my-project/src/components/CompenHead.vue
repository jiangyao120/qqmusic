<template>
    <div class="wrapper">
        <nav class="nav">
            <div class="nav-title">{{meanname}}</div>
            <input style="test" class="nav-input" placeholder="shoushuo" @keyup.13="select()" v-model="xinxi.shoushuo">
        </nav>
    </div>
</template>
<script>
import axios from "axios";
export default {
    props:['meanname'],
     data() {
    return {
    //   loginlist:'',
      xinxi:{
           shoushuo:''
      }
     
    }
  },
  methods: {
      select(){
        //   console.log(this.xinxi.shoushuo);
        //   event.preventDefault();
          if(this.xinxi.shoushuo=""){
              return false;
          }
          else{
              this.$emit('change',this.xinxi.shoushuo);
          }

            //   console.log(this.xinxi.shoushuo);
              
              
         
      },
    //   summit(){
    //     let url1="localhost:8080/creatinf";
    //     axios.get(url1).then(res=>{
    //         // console.log(res)
    //         // this.loginlist=res.data.user;
    //     })
    //   }
  },
//   created() {
//       this.summit();
//   },
//   mounted() {
//   },
}
</script>
<style lang="scss">
    .wrapper{
        position: relative;
        height: 6rem;
        background: #f2f2f2;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1;
    }
    .nav{
        width: 100%;
        height: 6rem;
        line-height: 6rem;
        &-title{
            // display: inline;
            float: left;
            margin-left: 3rem;
            font-size: 2rem;
            font-weight: 600;
        }
        &-input{
        float: right; 
        margin-top: 2rem;  
        border-radius: 15px;
        margin-right: 2rem;
        outline: none;
        }
    }
   
</style>