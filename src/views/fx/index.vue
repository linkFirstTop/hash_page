<template>
  <div class="mymrs">
    <div class="head">
      <van-nav-bar
        title="分享好友"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="content">
      <h3>全球区块链TRC20-USDT/TRX竞猜平台</h3>
      <div class="txt">
        <div>公平</div>
        <div>安全</div>
        <div>公开</div>
      </div>
    </div>
    <div class="footer">
      <div>【2022风口项目】</div>
      <p>在家躺赚USDT</p>
    </div>
    <div class="erweima">
      <img src="../../assets/img_s/bg.png" alt="" />
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        onClickLeft(){
            console.log('000')
        this.$router.go(-1)
        }
    }
}
</script>
<style lang="less" scoped>
// pc
@media screen and (min-width: 992px) {
  // .mymrs {
  // display: none;

  // }
}

// 移动端
@media screen and (max-width: 992px) {
  .mymrs {
    background-color: #010c1b;
    height: 100vh;
  }
  .head {
    color: #fff;
    position: absolute;
    text-align: center;
    position: relative;
    font-size: 0.4533rem;
    color: #1ae5fe;
  }
  .head span:first-child {
    position: absolute;
    left: 0;
    top: 0;
    margin-left: 0.2667rem;
  }
  .head span:nth-child(2) {
    position: absolute;
    left: 0;
    top: 0;
    margin-left: 20px;
  }
  /deep/ .van-nav-bar{
       background: #010c1b;
       color: #54f6fc;
  }
  /deep/ .van-nav-bar .van-icon{
       color: #54f6fc;
  }
  /deep/ .van-nav-bar__text{
       color: #54f6fc;
  }
  /deep/ .van-ellipsis{
      color: #54f6fc;
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
    // margin-top: .4333rem;
  }
  .content h3 {
    font-size: 0.4267rem;
    text-align: center;
  }
  .content .txt {
    display: flex;
    font-size: 0.5333rem;
  }
  .content .txt div {
    margin-left: 0.8rem;
    font-weight: 700;
  }
  .footer {
    color: #fff;
    text-align: center;
  }
  .footer div {
    font-size: 0.6rem;
    color: #d9ab4e;
    margin: 0;
    margin-top: 0.3933rem;
  }
  .footer p {
    margin-top: 0.1333rem;
    color: #54f6fc;
    font-size: 0.47rem;
    margin: 0;
  }
  .erweima {
    position: relative;
  }
  .erweima img {
    position: absolute;
    left: 2.6667rem;
    top: 1.2rem;
    width: 4.7467rem;
  }
}
</style>