<template>
     <div class="imgsp">
         <div class="boxs" v-for="(item,index) in listname" :key="index" @click="Mynst(index)" 
          :style="index == 5 ? 'border:0' : ''"
         >{{item.name}}</div>
     </div>
</template>
 <script>
 export default {
      data(){
          return{
               listname:[
                   {
                       name:'主页'
                   },
                   {
                       name:"优惠"
                   },
                   {
                       name:'推广'
                   },
                   {
                       name:'反水'
                   },
                   {
                       name:'我的'
                   },
                   {
                       name:'语言'
                   }
               ]
          }
      },
      methods:{
          Mynst(index){
              this.$emit('Mynst',index)
          }
      }
 }
 </script>
<style lang="less" scoped>
      .imgsp{
          background: url(../../assets/img/bg.png) no-repeat;
          background-size: 100% 100%;
          width: 70%;
          margin: 1rem auto;
          height: 8.3333rem;
          padding: .2667rem 0;
          .boxs{
              color: #fff;
              width: 80%;
              margin: 0 auto;
              text-align: center;
              padding:  .4333rem 0;
              font-size: .3467rem;
              border-bottom: 1px solid #ccc ;
          }
      }
    //   .imgsp .boxs:nth-child(4){
    //        border: 0 !important;
    //   }
</style>