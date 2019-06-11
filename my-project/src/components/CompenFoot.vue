<template>
    <div class="foot">
        <ul class="foot-bot">
            <li @click="swit(title)" class="foot-bot-li" v-for="(title,index) in switchlist" :key="index" >
                {{title.name}}
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    data(){
        return {
             switchlist:[
            {
                title:'music',
                name:'音乐馆',
                path:'/music'
            },
            {
                title:'find',
                name:'发现',
                path:'/shou'
            },
            {
                title:'personal',
                name:'我的',
                path:'/personal'
            }
        ],
        name:''
        }
       
    },
    methods: {
        swit(mean){
            this.name=mean.name;
            // this.bus.$emit('title',mean.name);
            this.$router.push(`${mean.path}/${mean.name}`);
        }
    },
}
</script>
<style lang="scss">
    .foot{
        position: relative;
        &-bot{
            position: fixed;
            width: 100%;
            height: 6rem;
            bottom: 0;
            left: 0;
            background: #f2f2f2;
            display: flex;
            &-li{
                flex:1;
                line-height: 6rem;
                text-align: center;
                font-size: 1.5rem;
            }
            &-li:hover{
                color: #0f0;
            }
        }
    }

  
</style>