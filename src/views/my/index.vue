<template>
      <div>
       <div class="mymrs">
         <div class="head">
           <div class="top">
              <div>返回</div>
              <div>我的</div>
           </div>
           <div class="content">
             <div><img src="../../assets/img_s/tox.png" alt=""></div>
             <div>账号：1234567</div>
             <div>ID:656565</div>
           </div>
           <div class="buttom">
             <h3 class="tops">TRC地址</h3>
             <div class="buttoms">fhifhshdihshdkfhrsof</div>
           </div>
         </div>
         <!-- 页脚 -->
         <div class="footer">
           <div class="betting">
             <ul>
               <li>                
                 <div>
                   <img src="../../assets/img_s/tubiao3_2.png" alt=""> <span>投注记录</span>
                 </div>
                 <span>
                   <img src="../../assets/img_s/jt.png" alt="">
                 </span>
                 </li>
               <li>
                 <div>
                 <img src="../../assets/img_s/tubiao3_2.png" alt=""> <span>反水结算记录</span>
                 </div>
                 <span><img src="../../assets/img_s/jt.png" alt=""></span>
                 </li>
               <li>
                 <div >
                 <img src="../../assets/img_s/tubiao3_2.png" alt=""> <span>佣金结算记录</span>
                 </div>
                 <span><img src="../../assets/img_s/jt.png" alt=""></span>
                 </li>
             </ul>

           </div>
           <!-- <div class="betting"></div> -->

            <div class="betting">
             <ul>
               <li>                
                 <div>
                   <img src="../../assets/img_s/tubiao4_2.png" alt=""> <span>下载APP</span>
                 </div>
                 <span>
                   <img src="../../assets/img_s/jt.png" alt="">
                 </span>
                 </li>
               <li>
                 <div>
                 <img src="../../assets/img_s/tubiao5_2.png" alt=""> <span>分享好友</span>
                 </div>
                 <span><img src="../../assets/img_s/jt.png" alt=""></span>
                 </li>
               <li>
                 <div>
                 <img src="../../assets/img_s/tubiao3_2.png" alt=""> <span>退出登录</span>
                 </div>
                 <span><img src="../../assets/img_s/jt.png" alt=""></span>
                 </li>
             </ul>

           </div>
         </div>
         </div>
         <!-- pc -->
         <div class="personal">
           <div class="pc-box">
             <div class="outer">
               <div class="pc-top">
                  <div class="pc-left">
                    <div class="personals"><img src="../../assets/img_s/tox.png" alt=""></div>
                    <div class="zhanghao">
                      <div class="txt">账号:1234567</div>
                      <div style="font-size:12px">ID:545464</div>
                      <button>退出登录</button>
                    </div>
                  </div>
                  <div class="pc-rigth" >
                    <div>TRC地址</div>
                    <p>fldjgdsojdfodjhfgdj</p>
                  </div>
               </div>
               <div class="pc-buttom">
                 <div class="shabi">
                   <div><img src="../../assets/img_s/tubiao1_1.png" alt=""></div>
                   <p>投注记录</p>
                 </div>
                 <div class="shabi">
                   <img src="../../assets/img_s/tubiao2_2.png" alt="">
                   <p>反水结算记录</p>
                 </div>
                 <div class="shabi">
                   <img style="width:28px;height:32px" src="../../assets/img_s/tubiao3_2.png" alt="">
                   <p>佣金结算记录</p>
                 </div>
                 <div class="shabi">
                   <img src="../../assets/img_s/tubiao4_2.png" alt="">
                   <p>下载APP</p>
                 </div>
                 <div class="shabi">
                   <img src="../../assets/img_s/tubiao5_2.png" alt="">
                   <p>分享好友</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
    <!-- </div> -->
</template>

<script>
export default {
  name: "",
  data() {
    return {
            listim: [
        {
          names: "首页",
          pw:'sy'
        },
        {
          names: "流程",
          pw:"liiuc"
        },
        {
          names: "规则",
          pw:'gz'
        },
        {
          names: "优势",
          pw:'ys'
        },
        {
          names: "问题",
          pw:'wt'
        },
        {
          names: "常用工具",
        },
        {
          names: "个人中心",
        },
        {
          names: "简体中文",
        },
      ],
      indexs: 6,
    };
  },
  components: {},
  created() {
    // var token = localStorage.getitem('token')
    console.log(token,'1000')
  },
  mounted() {
        
        //  console.log(token,'to')
  },
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style lang="less" scoped>
@media screen and (min-width: 992px) {
  .mymrs {
    display: none;
  }
     .nav {
      display: flex;
      align-items: center;
      width: 80%;
      margin: 0 auto;
      justify-content: space-between;
      height: 55px !important;
      .letfs {
        width: 240px;
        height: 40px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .right {
        color: #fff;
        display: flex;
        height: 55px;
        line-height:  55px;
        a{
            color: #fff;
        }
        div {
          //  margin: 0 .4rem;
          padding: 0 0.4rem;
          font-size:12px;
        }
      }
    }
    .hesr {
      display: none;
    }
  .personal {
    width: 100%;
    height: 100vh;
    background: url(../../assets/img_s/beijing.jpg) no-repeat;
    background-position: center center;
    overflow: hidden;
  }
  .personals {
    width: 70px;
    height: 70px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .pc-box {
    background: url(../../assets/img_s/jods.png) no-repeat;
    // border: 5px solid red;
    width: 65%;
    height: 350px;
    // background-color: pink;
    background-size: 100% 100%;
    margin: 0 auto;
    margin-top: 1.6rem;
    padding: 5px 0;
    box-sizing: border-box;
  }
  .outer {
    width: 80%;
    height: 6.6667rem;
    // background-color: pink;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    // background-color: pink;
  }
  .pc-box .outer .pc-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .pc-box .outer .pc-top .pc-left {
    display: flex;
    color: #49f6ff;
  }
  .pc-box .outer .pc-top .pc-left .txt {
    // font-size: .3733rem;
    font-weight: 400;
    margin-left: 30px;
  }
  .pc-box .outer .pc-top .pc-left .zhanghao div {
    font-size: 14px;
    margin-left: 30px;
  }
  .pc-box .outer .pc-top .pc-left .zhanghao button {
    width: 100px;
    height: 30px;
    background-color: #053039;
    font-size: 14px;
    margin-left: 0.4333rem;
  }
  .pc-top .pc-rigth {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #49f6ff;
    font-size: 12px;
    width: 200px;
    // height: 25px;
    border: 2px solid #fbe18f;
    height: 40px;
    // padding: 5px 0;
    // padding: .2333rem;
    text-align: center;
  }
  .pc-top .pc-rigth p {
    margin: 0;
  }
  .outer .pc-buttom {
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
  .outer .pc-buttom .shabi {
    width: 17%;
    height: 130px;
    font-size: 12px;
    // background-color: pink;
    // border: 2px solid #49f6ff;
    background: url(../../assets/img_s/fle.png) no-repeat;
    background-size: 100% 100%;
    color: #fff;
  }
  .outer .pc-buttom .shabi img {
    width: 32px;
    height: 32px;
    margin-top: 0.5633rem;
  }
  .outer .pc-buttom .shabi::before {
    width: 0.8rem;
    height: 0.0533rem;
    background-color: #d8aa4d;
  }
}
// 移动端
@media screen and (max-width: 992px) {
  .mymrs {
    background-color: #010c1b;
    height: 100vh;
  }
  .head {
    display: block;
    width: 100%;
    height: 7.7333rem;
    background: url(../../assets/img_s/bgc.png) no-repeat;
    background-size: 100% 100%;
    .top {
      position: relative;
      text-align: center;
      color: #49f6ff;
    }
    .top div:nth-child(1) {
      position: absolute;
      left: 0;
      top: 0;
      margin-left: 0.2667rem;
      font-size: 0.4533rem;
    }
    .top div:nth-child(2) {
      font-size: 0.4533rem;
    }
    .content {
      margin-top: 0.5333rem;
      color: #49f6ff;
      text-align: center;
      font-size: 0.4rem;
    }
    .content div {
      margin-bottom: 0.1333rem;
    }
    .content div img {
      width: 1.6rem;
    }
    .buttom {
      width: 8.2667rem;
      height: 1.6rem;
      border: 0.0533rem solid #f6de9b;
      margin: 0.6667rem auto;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .buttom .tops {
      margin-bottom: 0.18rem;
      color: #49f6ff;
      font-size: 0.3733rem;
    }
    .buttom .buttoms {
      color: #49f6ff;
      font-size: 0.2133rem;
      margin-bottom: 0.3833rem;
    }
  }
  .footer {
    width: 9.2rem;
    //  background-color: red;
    margin: 0 auto;
  }
  .betting {
    width: 8.9rem;
    height: 4.2667rem;
    border: 1px solid #237d88;
    margin-bottom: 0.3033rem;
  }
  .betting ul {
    padding-top: 0.2667rem;
    display: flex;
    //  justify-content: space-between;
    flex-direction: column;
  }
  .betting ul li img {
    //  height: 0.5533rem;
    width: 0.4533rem;
    vertical-align: middle;
  }
  .betting ul li span img {
    height: 0.2933rem;
    vertical-align: middle;
  }
  .betting ul li {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #237d88;
    margin: 0 0.6667rem;
    line-height: 1.2rem;
    font-size: 0.1533rem;

    color: #fff;
  }
  .betting ul li:last-child {
    border: none;
  }
  .betting ul li div span {
    margin-left: 0.1333rem;
  }
}
</style>
