<template>
    <div class="mymrs">
    <div class="content">
      <h3>全球区块链TRC20-USDT/TRX竞猜平台</h3>
      <div class="txt">
      <div>公平</div>
      <div>安全</div>
      <div>公开</div>
      </div>
    </div>
   <div class="kefu">
     <ul>
       <li>
         <div class="kftxt">
           <img src="../../assets/img_s/kefu1.png" alt="">
           <span>客服</span>
         </div>
        <div class="liji">立即咨询</div>
       </li>
      <li>
         <div class="kftxt">
           <img src="../../assets/img_s/kefu2.png" alt="">
           <span>Telegram</span>
         </div>
         <div class="liji">立即咨询</div>
       </li>
      <li>
         <div class="kftxt">
           <img src="../../assets/img_s/kefu3.png" alt="">
           <span>Whatsapp</span>
         </div>
         <div class="liji">立即咨询</div>
       </li>
     <li>            
         <div class="kftxt">
           <img src="../../assets/img_s/kefu4.png" alt="">
           <span>Line</span>
         </div>
         <div class="liji">立即咨询</div>
      </li>
     </ul>
   </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style lang="less" scoped>
@media screen and (min-width: 992px) {

}
// 移动端
@media screen and (max-width: 992px) {
.mymrs {
  height: 100vh;
  background-color: #010c1b;
}
   .content {
     display: flex;
     justify-content: center;
     flex-direction: column;
     align-items: center;
     color: #fff;
     height: 6.5333rem;
     background: url(../../assets/img_s/top.png) center no-repeat;
     background-size: 100%;
   }
   .content h3 {
     font-size: .4267rem;
     text-align: center;
   }
   .content .txt {
     display: flex;
     font-size: .5333rem;
   }
   .content .txt div {
     margin-left: .8rem;
     font-weight: 700;
   }
  .kefu {
    width: 92%;
    height: 6.533rem;
    // background-color: pink;
    margin: 1.5rem auto 0;
  }
  .kefu ul {
    background: url(../../assets/img_s/kefubj.png) no-repeat;
    background-size: 100% 100%;
    padding: .2667rem .2667rem;
  }
  .kefu ul li {
    height: 1.6333rem;
    // padding: 0 .4rem;
    // line-height:  1.6333rem;
    margin: 0 .7333rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #1ae5fe;
  }
  .kefu ul li:nth-child(4) {
    border: none;
  }
  .kefu ul li .liji {
    padding: 0;
    margin: 0;
    width: 1.6rem;
    height: .4733rem;
    background-color: pink;
    background: url(../../assets/img_s/kefung.png);
    font-size: .32rem;
    text-align: center;
    color: #1ae5fe;
    vertical-align: middle;
  }
  .kefu ul li .kftxt img {
    width: 0.7rem;
    height: 0.7rem;
  }
  .kefu ul li .kftxt span {
    margin-top: .15rem;
    margin-left: .2333rem;
    display: block;
    color: #fff;
  }
  .kefu .kftxt {
    display: flex;
  }
}

</style>
