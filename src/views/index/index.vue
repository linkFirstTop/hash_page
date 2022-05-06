<template>
  <div class="activity-index">
    <div class="nav" id="sy">
      <div class="letfs">
        <img src="../../assets/img_s/lgos.png" alt="" />
      </div>
      <div class="right">
        <div
          v-for="(item, index) in listim"
          :key="index"
          @click="taosn(index, item.pw)"
          :style="indexs == index ? 'color: #000;background: #d9be82;' : ''"
          
        >
          <a
            href="javascript:void(0);"
            :style="indexs == index ? 'color: #000;' : index == 7 ? 'color:#FFF':''"
            >{{ item.names }}</a
          >
        </div>
      </div>
    </div>
    <div class="hesr">
      <div class="letfs">
        <img src="../../assets/img_s/lgos.png" alt="" />
      </div>
      <div class="rifhs" @click="Punst">
        <img src="../../assets/img_s/cidan.png" alt="" />
      </div>
    </div>
    <!-- 咨询客服 -->
    <div class="keiku">
      <img src="../../assets/img_s/1.png" alt="" />
      <div>咨询客服</div>
    </div>
    <div class="indexview" v-if="indexs != 6 && Pchome">
      <div class="brann">
        <div class="box">全球区块链TRC20-USDT/TRX竞猜平台</div>
        <div class="boxs">
          <div v-for="(item, index) in lists" :key="index">{{ item.name }}</div>
        </div>
      </div>
      <div class="branns">
        <div class="box">全球区块链TRC20-USDT/TRX竞猜平台</div>
        <div class="boxs">
          <div v-for="(item, index) in lists" :key="index">{{ item.name }}</div>
        </div>
      </div>
      <div class="tile">
        温馨提示：温馨提示提示提示温馨提示提示提示温馨提示提示提示温馨提示提示提示温馨提示提示提示
      </div>
      <div class="szhibu">数字货币竞猜平台</div>
      <div class="hanx">
        <div class="tops">
          <div
            v-for="(itmes, index) in hanx"
            :key="index"
            @click="tapng(index, itmes.name)"
            :style="Dnidex != index ? 'color:#49f6ff' : 'color:#ecca80'"
            class="boxns"
          >
            <div class="imgs">{{ itmes.name }}</div>
            <img
              src="../../assets/img_s/jig.png"
              v-if="Dnidex == index"
              alt=""
            />
            <img src="../../assets/img_s/7.png" alt="" v-else />
          </div>
        </div>
      </div>
      <div class="hanxsn" id="show">
        <div class="lefts">
          <div class="tops">{{ nmeas }}</div>
          <div class="btoms">
            <div class="">
              <span style="font-weight: bold">官方投注地址</span>
              <span style="margin-top: 5px">Tsgsgasdaodoasp</span>
            </div>
            <div class="fhzi">一复制键</div>
            <div class="yjfz">
              <img src="../../assets/img_s/fz.png" alt="" />
              一鍵复制
            </div>
          </div>
        </div>
        <div class="shihs">用户实时开奖平台</div>
        <div class="rigsh">
          <van-swipe :autoplay="3000" vertical>
            <van-swipe-item>
              <div class="boxn">
                <div>投注时间: 2001/08/21 12:20</div>
                <div>玩家地址:sfhsafsa</div>
                <div>游戏类型: 幸运数字</div>
                <div>投注金额: 10</div>
                <div>区块哈希:2Q33W</div>
                <div>投注方式:大</div>
                <div>开奖数据:5</div>
                <div>开奖结果:大单</div>
                <div>开奖状态:中奖</div>
              </div>
            </van-swipe-item>
            <van-swipe-item>
              <div class="boxn">
                <div>投注时间: 2001/08/21 12:20</div>
                <div>玩家地址:sfhsafsa</div>
                <div>游戏类型: 幸运数字</div>
                <div>投注金额: 10</div>
                <div>区块哈希:2Q33W</div>
                <div>投注方式:大</div>
                <div>开奖数据:5</div>
                <div>开奖结果:大单</div>
                <div>开奖状态:中奖</div>
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <div class="wtp" id="gz" :style="stgz">
        <img src="../../assets/img_s/wt.png" alt="" />
        <div class="zhoj">中奖规则</div>
        <div class="gb">
          <img src="../../assets/img_s/gb.png" alt="" />
          <div class="zhojx">
            <div>中奖详细</div>
            <div>|</div>
            <div>规则介绍</div>
          </div>
        </div>
        <div class="itmsn">
          <div class="tops">
            <div
              v-for="(itmes, index) in hanx"
              :key="index"
              @click="changso(index)"
              :style="chasx != index ? 'color:#49f6ff' : 'color:#ecca80'"
            >
              {{ itmes.name }}
            </div>
          </div>
          <div class="bosn" v-for="(item, index) in dalvael" :key="index">
            <div class="tis">
              <div>{{ index }}</div>
            </div>
            <div>{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="wtp" id="liiuc" :style="liig">
        <img src="../../assets/img_s/02.png" alt="" />
        <div class="zhoj">参与流程</div>
        <div class="gb">
          <img src="../../assets/img_s/gb.png" alt="" />
          <div class="zhojx">
            <div>如何操作</div>
            <div>|</div>
            <div>流程介绍</div>
          </div>
        </div>
      </div>
      <div class="incoe" :style="liig">
        <div
          class="imgs"
          v-for="(itme, index) in datsimg"
          :key="index"
          @click="chakimg(index)"
        >
          <img :src="ClImg == index ? itme.imgs : itme.img" alt="" />
          <!-- <img src="" alt=""> -->
          <div class="values" :style="ClImg == index ? 'color:#e2b760' : ''">
            {{ index + 1 }} {{ itme.name }}
          </div>
          <div class="imge" v-if="index != 3">
            <img src="../../assets/img_s/jto.png" alt="" />
          </div>
        </div>
      </div>
      <div class="itmsn" :style="liig">
        <div class="tops">
          <img class="imsop" src="../../assets/img_s/11.png" alt="" />
        </div>
        <div class="bosnio">
          去中心化钱包的数据都是区块链上的数据，而中心化钱包的数据侧依赖钱包服务商自己的账本
          <p>
            举个例子：<br />我们在交易所的钱包就是在中心化的钱包，我们交易所指的是地址转账，如何建议所在的账本记录我们的充值记录，此后每做一次充值转账，交易所直接在他的账本进行记录，这整个过程完全没有发生在区块链上。
          </p>
          <p>因此我们需要注册一个属于自己的中心化1钱包</p>
        </div>
        <img class="imsop" src="../../assets/img_s/12.png" alt="" />
        <div class="prmse">
          <div class="itm">
            <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.2008php.com%2F09_Website_appreciate%2F10-07-11%2F1278861720_g.jpg&refer=http%3A%2F%2Fwww.2008php.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654264267&t=89644e6a084631209ed9621a8c9d1c3b"
              alt=""
            />
            <div>token.ime</div>
            <div>查看教程</div>
          </div>
          <div class="itm">
            <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.2008php.com%2F09_Website_appreciate%2F10-07-11%2F1278861720_g.jpg&refer=http%3A%2F%2Fwww.2008php.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654264267&t=89644e6a084631209ed9621a8c9d1c3b"
              alt=""
            />
            <div>token.ime</div>
            <div>查看教程</div>
          </div>
          <div class="itm">
            <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.2008php.com%2F09_Website_appreciate%2F10-07-11%2F1278861720_g.jpg&refer=http%3A%2F%2Fwww.2008php.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654264267&t=89644e6a084631209ed9621a8c9d1c3b"
              alt=""
            />
            <div>token.ime</div>
            <div>查看教程</div>
          </div>
        </div>
      </div>
      <div class="wtp" id="ys" :style="ysne">
        <img src="../../assets/img_s/03.png" alt="" />
        <div class="zhoj">强大优势</div>
        <div class="gb">
          <img src="../../assets/img_s/gb.png" alt="" />
          <div class="zhojx">
            <div>优质平台</div>
            <div>|</div>
            <div>平台保质</div>
          </div>
        </div>
      </div>
      <div class="wtp" :style="ysne">
        <div class="zhojs">为什么选择我们?</div>
        <div class="zhojn">CHOOSE THE RLGHT PLAN FOR YOU</div>
      </div>
      <div class="mysne" :style="ysne">
        <div class="boxs">
          <div class="ton">公正透明</div>
          <div class="botmns">
            <div class="tis">1</div>
            <div>我们捍卫每一个公民享有的权利</div>
          </div>
          <div class="botmns">
            <div class="tis">2</div>
            <div>
              区块哈希值得依托中心化块区域网咯随机生成，任何人随时随地区块链
            </div>
          </div>
        </div>
        <div class="boxs">
          <div class="ton">公正透明</div>
          <div class="botmns">
            <div class="tis">1</div>
            <div>我们捍卫每一个公民享有的权利</div>
          </div>
          <div class="botmns">
            <div class="tis">2</div>
            <div>我们捍卫每一个公民享有的权利</div>
          </div>
        </div>
        <div class="boxs">
          <div class="ton">公正透明</div>
          <div class="botmns">
            <div class="tis">1</div>
            <div>我们捍卫每一个公民享有的权利</div>
          </div>
          <div class="botmns">
            <div class="tis">2</div>
            <div>我们捍卫每一个公民享有的权利</div>
          </div>
        </div>
      </div>
      <div class="wtp" id="wt" :style="wtn">
        <img src="../../assets/img_s/04.png" alt="" />
        <div class="zhoj">常见问题</div>
        <div class="gb">
          <img src="../../assets/img_s/gb.png" alt="" />
          <div class="zhojx">
            <div>疑问咨询</div>
            <div>|</div>
            <div>24h在线</div>
          </div>
        </div>
      </div>
      <div class="itmsn" :style="wtn">
        <div class="quks">
          <div class="btis">
            <div>1</div>
            <div>什么是区块哈希值 [BLOCK HASK]?</div>
          </div>
          <div class="nres">
            区块哈希是一段数据的DNA,每个区块哈希都是唯一的，随机的且不可破的。
          </div>
        </div>
        <div class="quks">
          <div class="btis">
            <div>2</div>
            <div>什么是区块链?</div>
          </div>
          <div class="nres">
            区块链从本质上讲,它是一个共享数据库,储存其中的数据或信息。具有不可伪造，全程留痕，
          </div>
        </div>
        <div class="quks">
          <div class="btis">
            <div>3</div>
            <div>中心化钱包? 为什么中心化钱包为什么转账</div>
          </div>
          <div class="nres">
            区块哈希是一段数据的DNA,每个区块哈希都是唯一的，随机的且不可破的。
          </div>
        </div>
        <div class="quks">
          <div class="btis">
            <div>4</div>
            <div>为什么我会连续中奖? 或不中奖?</div>
          </div>
          <div class="nres">
            区块哈希是一段数据的DNA,每个区块哈希都是唯一的，随机的且不可破的。
          </div>
        </div>
        <div class="quks">
          <div class="btis">
            <div>4</div>
            <div>为什么会延迟到账?</div>
          </div>
          <div class="nres">
            区块哈希是一段数据的DNA,每个区块哈希都是唯一的，随机的且不可破的。
          </div>
        </div>
      </div>
      <div class="dibu" :style="wtn">
        <div class="names">我们捍卫每一个公民享有的权利</div>
        <div class="boosp">
          <div class="gb">
            <div>官方投注TRC20地址</div>
          </div>
          <div class="gb">
            <div>网站www.com</div>
          </div>
          <div class="gb">
            <div>点击游戏</div>
          </div>
        </div>
      </div>
      <div class="ponso" v-if="coknes">
        <!-- 移动弹出 -->
        <pviee v-on:Mynst="Mynst" />
      </div>
    </div>
    <div class="poups"></div>
    <poupn
      v-if="(puos && indexs == 6) || (!Pchome && !ans)"
      v-on:changs="changs"
    />
    <mysn v-if="!puos && indexs == 6 && !ans" />
    <zhuce v-if="ans" v-on:Usna="Usna" />
  </div>
</template>

<script>
import poupn from "@/views/login";
import mysn from "@/views/my";
import zhuce from "@/views/zhuc";
import pviee from "@/components/pviee";
export default {
  name: "",
  data() {
    return {
      listim: [
        {
          names: "首页",
          pw: "sy",
        },
        {
          names: "流程",
          pw: "liiuc",
        },
        {
          names: "规则",
          pw: "gz",
        },
        {
          names: "优势",
          pw: "ys",
        },
        {
          names: "问题",
          pw: "wt",
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
      dalvael: [
        {
          name: "向游戏地址投资10-1000SUD",
        },
        {
          name: "向游戏地址投资10-1000TRX",
        },
        {
          name: "投注金额是转账金额的十分之一",
        },
        {
          name: "如果压注10usd",
        },
        {
          name: "向游戏地址投资10-1000SUD",
        },
      ],
      datsimg: [
        {
          name: "注册钱包",
          img: require("../../assets/img_s/a2.png"),
          imgs: require("../../assets/img_s/a1.png"),
        },
        {
          name: "购买虚拟币",
          img: require("../../assets/img_s/s1.png"),
          imgs: require("../../assets/img_s/s2.png"),
        },
        {
          name: "转账抽奖",
          img: require("../../assets/img_s/d1.png"),
          imgs: require("../../assets/img_s/d2.png"),
        },
        {
          name: "中奖回款",
          img: require("../../assets/img_s/d4.png"),
          imgs: require("../../assets/img_s/d3.png"),
        },
      ],
      ClImg: 0,
      indexs: 0,
      lists: [
        {
          name: "公平",
        },
        {
          name: "安全",
        },
        {
          name: "公开",
        },
      ],
      hanx: [
        {
          name: "哈希牛牛",
        },
        {
          name: "幸运哈希",
        },
        {
          name: "幸运数字",
        },
        {
          name: "幸运庄闲",
        },
      ],
      nmeas: "哈希牛牛",
      chasx: 0,
      Dnidex: 0,
      puos: false,
      ans: false,
      coknes: false,
      Pchome: true,
      stgz: "opacity:0",
      searchBarFixed: 0,
      liig: "opacity:0",
      ysne: "opacity:0",
      wtn: "opacity:0",
      oust: `opacity:1;filter: alpha(opacity=0); -webkit-transition: opacity 3s ease;-moz-transition: opacity 3s ease;-o-transition: opacity 3s ease;transition: opacity 3s ease;`,
    };
  },
  components: {
    poupn,
    mysn,
    zhuce,
    pviee,
  },
  created() {},
  mounted() {
    this.getlis();
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log(scrollTop);
      // let scrollTop = window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop;
      let offsetTop = document.querySelector("#gz").offsetTop;
      let ofsseteTo = document.querySelector("#liiuc").offsetTop; //liiuc
      let ofueyteo = document.querySelector("#ys").offsetTop;
      // wt
      let ofueywt = document.querySelector("#wt").offsetTop;
      this.searchBarFixed = scrollTop > offsetTop - 150; // 44px是导航标题头的高度
      this.senliiuc = scrollTop > ofsseteTo - 150; // 44px是导航标题头的高度
      this.senteoc = scrollTop > ofueyteo - 150; // 44px是导航标题头的高度
      this.sentwtc = scrollTop > ofueywt - 150; // 44px是导航标题头的高度
      console.log(this.searchBarFixed, "距离还有多少");
      if (this.searchBarFixed == true) {
        this.stgz = this.oust;
      }
      if (this.senliiuc == true) {
        this.liig = this.oust;
      }
      if (this.senteoc == true) {
        this.ysne = this.oust;
      }
      if (this.sentwtc == true) {
        this.wtn = this.oust;
      }
    },
    getlis() {
      // /api/getsetting
      this.$axios.post(
        "https://api-group-4-asjk823njsdk-asdjkm32edmk.uiy4.com/api/getsetting",
        {
          lang: 1,
          general_id: "2",
        }
      );
    },
    tapng(index, name) {
      this.Dnidex = index;
      console.log(index);
      this.nmeas = name;
    },
    Punst() {
      this.coknes = !this.coknes;
    },
    changso(index) {
      this.chasx = index;
      if (index == 1) {
        this.dalvael = [{ name: "赔效1.95倍" }];
      } else if (index == 2) {
        this.dalvael = [{ name: "赔效1.95倍xn" }];
      } else if (index ==3){
        this.dalvael = [       {
          name: "向游戏地址投资10-1000SUD",
        },
        {
          name: "向游戏地址投资10-1000TRX",
        },
        {
          name: "投注金额是转账金额的十分之一",
        },
        {
          name: "如果压注10usd",
        },
        {
          name: "向游戏地址投资10-1000SUD",
        },]
      }
    },
    changs() {
      this.puos = false;
      this.ans = true;
    },
    Usna() {
      this.puos = true;
      this.ans = false;
    },
    Mynst(index) {
      // pchaon手机端
      console.log(index);
      if (index == 4) {
        var token = localStorage.getItem("token");
        if (token == null) {
          console.log("-----------------");
          //  this.$router.replace('/login')
          this.puos = true;
          this.coknes = false;
          this.Pchome = false;
        }
      }
      if (index == 2) {
        this.$router.replace("/fx");
      }
      if (index == 1) {
        this.$router.replace("/yhs");
      }
    },
    taosn(index, vla) {
      this.indexs = index;
      this.ans = false;
      if (index != 6) {
        document.getElementById(vla).scrollIntoView({
          behavior: "smooth", // 平滑过渡
          block: "start", // 上边框与视窗顶部平齐。默认值
        });
        console.log("========");
      }
      if (index == 6) {
        var token = localStorage.getItem("token");
        if (token == null) {
          console.log("-----------------");
          //  this.$router.replace('/login')
          this.puos = true;
        }
        console.log(token, "1000");
      }
    },
    chakimg(index) {
      this.ClImg = index;
    },
  },
  computed: {},
  watch: {},
};
</script>

<style lang="less" scoped>
@media screen and (min-width: 992px) {
  #gz {
  }
  // .animated {
  //   -webkit-animation-duration: 1s;
  //   animation-duration: 1s;
  //   -webkit-animation-fill-mode: both;
  //   animation-fill-mode: both;
  // }
  // @-webkit-keyframes twinkling {
  //   0% {
  //     opacity: 0.2;
  //   }
  //   100% {
  //     opacity: 1;
  //   }
  // }
  .activity-index {
    .shihs {
      display: none;
    }
    .fhzi {
      display: none;
    }
    .keiku {
      position: fixed;
      width: 90px;
      height: 70px;
      background: #ecca80;
      top: 20%;
      right: 0%;
      z-index: 9999999999;
      text-align: center;
      color: #000;
      font-size: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border-radius: 10px 0 0px 10px;
      img {
        width: 30px;
        height: 30px;
      }
    }
    .nav {
      display: flex;
      align-items: center;
      width: 100%;
      margin: 0 auto;
      justify-content: space-between;
      height: 70px !important;
      position: fixed;
      top: 0;
      z-index: 111;
      left: 50%;
      background: #000;
      transform: translate(-50%, 0);
      .letfs {
        padding-left: 70px;
        width: 240px;
        height: 40px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .right {
        padding-right: 70px;
        color: #fff;
        display: flex;
        height: 70px;
        line-height: 70px;
        a {
          color: #5197ca;
          font-size: 15px;
        }
        div {
          //  margin: 0 .4rem;
          padding: 0 0.4rem;
          font-size: 12px;
        }
      }
    }
    .hesr {
      display: none;
    }
    // background: url(../../assets/img_s/under_bg.png) no-repeat;
    // height: 100vh;
    .brann {
      width: 100%;
      height: 6.6667rem;
      background: url(../../assets/img_s/branen.png) no-repeat;
      background-size: 100% 100%;
      position: relative;
    }
    .brann .box {
      color: #fff;
      position: absolute;
      font-size: 23px;
      right: 30%;
      top: 30%;
      background: #000;
      background-color: rgba(0, 0, 0, 0.12);
      padding: 0.1333rem 0.2667rem;
    }
    .brann .boxs {
      width: 7rem;
      color: #fff;
      position: absolute;
      font-size: 24px;
      display: flex;
      right: 28.5%;
      top: 49%;
      div {
        width: 2.6667rem;
        text-align: center;
      }
    }
    .branns {
      display: none;
    }
    .tile {
      color: #f2b107;
      text-align: center;
      font-size: 12px;
      padding: 10px 0;
    }
    .szhibu {
      width: 100%;
      height: 1.6rem;
      // background: #000;
      background: url(../../assets/img_s/4.png) no-repeat;
      background-size: 100% 100%;
      color: #f4bf50;
      margin: 40px 0;
      text-align: center;
      font-weight: bold;
      line-height: 1.6rem;
      font-size: 26px;
    }
    .hanx {
      width: 65%;
      height: 6rem;
      margin: 0 auto;
      background: url(../../assets/img_s/jods.png) no-repeat;
      background-size: 100% 100%;
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;
      .tops {
        padding: 0 30px;
        width: 100%;
        height: 100%;
        display: flex;
        color: #ecca80;
        box-sizing: border-box;
        //   padding-top: .5333rem;
        .boxns {
          width: 25%;
          padding: 60px 0;
          img {
            width: 100%;
            height: 170px;
          }
          .imgs {
            font-size: 13px;
            margin: 0 auto;
            // width: 120px;
            width: 66%;
            font-size: 18px;
            height: 38px;
            line-height: 38px;
            background: url(../../assets/img_s/hanx.png) no-repeat;
            background-size: 100% 100%;
            text-align: center;
            // margin: 0 0.8rem;
          }
        }
      }
      .bots {
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        box-sizing: border-box;
        padding: 0 0.5333rem;
        div {
          width: 3.633rem;
          height: 2.7333rem;
          background: url(../../assets/img_s/7.png) no-repeat;
          background-size: 100% 100%;
          //   text-align: center;
          margin: 0 0.55rem;
        }
      }
    }
    .hanx::before {
      content: "";
      width: 0.8rem;
      height: 1.6rem;
      top: 0;
      left: 0;
      background: url(../../assets/img_s/bk.png) no-repeat;
      background-size: 100% 100%;
      position: absolute;
    }
    .hanxsn {
      width: 65%;
      height: 6rem;
      margin: 0.5333rem auto;
      position: relative;
      display: flex;
      justify-content: space-between;
      .lefts {
        display: flex;
        border-radius: 10px 0 0 10px;
        flex-direction: column;
        justify-content: center;
        background: url(../../assets/img_s/jods.png) no-repeat;
        background-size: 100% 100%;
        width: 55%;
        height: 100%;
        .tops {
          // padding-top: 0.8rem;
          color: #fadc86;
          text-align: center;
          font-size: 28px;
          letter-spacing: 0.4267rem;
          font-weight: bold;
        }
        .btoms {
          box-sizing: border-box;
          display: flex;
          padding: 20px 40px;
          color: #49f6ff;
        }
        .btoms div:nth-child(1) {
          margin-top: 0.2667rem;
          font-size: 15px;
          width: 65%;
          padding: 15px 0;
          text-align: center;
          border: 2px solid #fadc86;
          span {
            display: block;
          }
        }
        .btoms div:nth-child(2) {
          margin-top: 0.2667rem;
          font-size: 12px;
          width: 20%;
          padding: 10px 0;
          margin-left: 20px;
          text-align: center;
          border: 2px solid #fadc86;
          img {
            width: 24px;
            margin: 0 auto 4px;
            height: 30px;
            display: block;
          }
          span {
            display: block;
          }
        }
      }
      .rigsh {
        // display: flex;
        overflow: hidden;
        // flex-direction: column;
        justify-content: center;
        background: url(../../assets/img_s/jods.png) no-repeat;
        background-size: 100% 100%;
        width: 43%;
        height: 100%;
        .boxn {
          width: 85%;
          height: 5.6667rem;
          margin: 0.4rem auto;
          background: url(../../assets/img_s/god.png) no-repeat;
          background-size: 100% 100%;
          // text-align: center;
          padding: 0.5333rem 0.6333rem;
          box-sizing: border-box;
          color: #49f6ff;
          font-size: 14px;
          div {
            margin: 0.1333rem 0;
          }
        }
      }
      .rigsh::before {
        content: "";
        width: 0.06rem;
        height: 5rem;
        top: 5%;
        right: 0;
        background: url(../../assets/img_s/godon.png) no-repeat;
        background-size: 100% 100%;
        position: absolute;
      }
      .rigsh::after {
        content: "";
        width: 0.8rem;
        height: 1.6rem;
        bottom: 0;
        right: 0;
        background: url(../../assets/img_s/q2.png) no-repeat;
        background-size: 100% 100%;
        position: absolute;
      }
      .lefts::before {
        content: "";
        width: 0.8rem;
        height: 1.6rem;
        top: 0;
        left: 0;
        background: url(../../assets/img_s/bk.png) no-repeat;
        background-size: 100% 100%;
        position: absolute;
      }
      .lefts::after {
        content: "";
        width: 0.8rem;
        height: 1.6rem;
        bottom: 0;
        left: 0;
        background: url(../../assets/img_s/q1.png) no-repeat;
        background-size: 100% 100%;
        position: absolute;
      }
    }
    .wtp {
      width: 100%;
      text-align: center;
      // margin: 1.2rem 0 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 58px;
      img {
        width: 2.4rem;
        height: 1.2rem;
      }
      .zhoj {
        font-weight: bold;
        font-size: 35px;
        color: #deb35b;
        letter-spacing: 0.2667rem;
      }
      .zhojs {
        font-weight: bold;
        font-size: 0.68rem;
        color: #deb35b;
        letter-spacing: 0.067rem;
      }
      .zhojn {
        font-weight: bold;
        font-size: 0.2rem;
        color: #deb35b;
        letter-spacing: 0.067rem;
      }
      .gb {
        position: relative;
        margin-bottom: 30px;
        img {
          width: 7rem;
          height: 0.4667rem;
        }
      }
      .zhojx {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        top: 50%;
        display: flex;
        color: #deb35b;
        font-size: 14px;
        div {
          margin: 0 0.1333rem;
        }
      }
    }
    .itmsn::before {
      content: "";
      width: 0.8rem;
      height: 1.6rem;
      top: 0;
      left: 0;
      background: url(../../assets/img_s/bk.png) no-repeat;
      background-size: 100% 100%;
      position: absolute;
    }
  .itmsn::after {
      content: "";
      width: 0.8rem;
      height: 1.6rem;
      bottom: 0;
      right: 0;
      background: url(../../assets/img_s/q2.png) no-repeat;
      background-size: 100% 100%;
      position: absolute;
    }
    .itmsn {
      position: relative;
      width: 65%;
      //   height: 8rem;
      margin: 0.8rem auto 0;
      background: url(../../assets/img_s/jods.png) no-repeat;
      background-size: 100% 100%;
      box-sizing: border-box;
      padding: 70px 20px;

      .tops {
        // padding: 0 0.8rem;
        display: flex;
        color: #ecca80;
        // justify-content: center;
        box-sizing: border-box;
        //   padding-top: .5333rem;
        margin-bottom: 30px;
        div {
          width: 20%;
          font-size: 18px;
          height: 43px;
          margin: 0 20px;
          line-height: 43px;
          background: url(../../assets/img_s/hanx.png) no-repeat;
          background-size: 100% 100%;
          text-align: center;
          // margin: 0 0.8rem;
        }
        .imsop {
          width: 3rem;
          height: 0.733rem;
        }
      }
      .imsop {
        display: block;
        margin: 0 auto;
        width: 3rem;
        height: 0.733rem;
      }
      .bosn {
        box-sizing: border-box;
        color: #ecca80;
        font-size: 12px;
        text-align: left;
        box-sizing: border-box;
        padding: 10px 0.4rem 0;
        color: #ecca80;
        font-size: 13px;
        text-align: left;
        // width: 80%;
        //   margin: 0.1333rem auto;
        //   color: #fff;
        align-items: baseline;
        display: flex;
        .tis {
          margin-right: 0.1333rem;
          color: #fff;
          width: 25px;
          height: 36px;
          background: url(../../assets/img_s/bit.png) no-repeat;
          background-size: 100% 100%;
          text-align: center;
          line-height: 36px;
        }
      }
      .bosnio {
        box-sizing: border-box;
        padding: 0.4rem 1.6rem;
        color: #fff;
        font-size: 16px;
        text-align: left;
      }
      .quks {
        //   display: flex;
        padding: 0 0.5333rem;
        box-sizing: border-box;
        .btis {
          color: #27f7e1;
          display: flex;
          margin-top: 0.5333rem;
          align-items: baseline;
        }
        .btis div:nth-child(1) {
          margin-right: 0.1333rem;
          color: #fff;
          width: 25px;
          height: 36px;
          background: url(../../assets/img_s/bit.png) no-repeat;
          background-size: 100% 100%;
          text-align: center;
          line-height: 36px;
        }
        .btis div:nth-child(2) {
          font-size: 0.32rem;
          border-bottom: 1px solid #27f7e1;
        }
        .nres {
          margin-top: 0.2667rem;
          box-sizing: border-box;
          padding-left: 0.8533rem;
          color: #fff;
          font-size: 15px;
        }
      }
      .prmse {
        display: flex;
        margin-top: 0.2667rem;
        padding: 20px 1.6rem;
        .itm {
          width: 120px;
          margin: 0 0.5333rem;
          text-align: center;
          color: #27f7e1;
          font-size: 13px;
          div {
            margin-top: 0.0333rem;
          }
          img {
            border-radius: 0.2667rem;
            width: 2.6667rem;
            margin-bottom: 0.1333rem;
            height: 1.8667rem;
          }
        }
      }
    }
    .yjfz {
      margin-top: 0.2667rem;
      font-size: 12px;
      width: 20%;
      padding: 10px 0;
      margin-left: 20px;
      text-align: center;
      border: 2px solid #fadc86;
      img {
        width: 24px;
        display: block;
        margin: 5px auto;
        height: 30px;
      }
    }
    .incoe {
      width: 65%;
      //   height: 8rem;
      display: flex;
      margin: 0.5333rem auto 0;
      text-align: center;
      .imgs {
        color: #49f6ff;
        position: relative;
        width: 25%;
        // margin: 0 0.6333rem;
        .values {
          font-size: 16px;
        }
        div {
          margin-top: 0.1333rem;
        }
      }
      .imge {
        position: absolute;
        width: 1rem;
        top: 26%;
        right: -16%;
        height: 0.1333rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      img {
        width: 1.8rem;
        height: 1.8rem;
      }
    }
    .mysne {
      width: 65%;
      margin: 0.5333rem auto 0;
      display: flex;
      // background: url(../../assets/img_s/jods.png) no-repeat;
      .boxs {
        width: 30%;
        background: url(../../assets/img_s/bg.png) no-repeat;
        background-size: 100% 100%;
        height: 6.6667rem;
        margin: 0 0.5333rem;
        border-radius: 20px;
        .ton {
          width: 80%;
          font-size: 0.367rem;
          height: 1.0667rem;
          margin: 0.7333rem auto;
          background: url(../../assets/img_s/33.png) no-repeat;
          background-size: 100% 100%;
          text-align: center;
          color: #27f7e1;
          line-height: 1.0667rem;
        }
        .botmns {
          width: 80%;
          margin: 0.1333rem auto;
          color: #fff;
          align-items: flex-start;
          display: flex;
          font-size: 15px;
          .tis {
            margin-right: 0.1333rem;
            color: #fff;
            width: 25px;
            height: 36px;
            background: url(../../assets/img_s/bit.png) no-repeat;
            background-size: 100% 100%;
            text-align: center;
            line-height: 36px;
          }
        }
        .botmns div:nth-child(2) {
          flex: 1;
          // padding-top: .18rem;
        }
      }
    }
    .dibu {
      width: 80%;
      margin: 1.0667rem auto 0;
      padding-bottom: 1.0667rem;
      color: #deb35b;
      .names {
        text-align: center;
        font-size: 0.4267rem;
      }
      .boosp {
        display: flex;
        justify-content: center;
      }
      .gb {
        width: 5.3333rem;
        color: #000;
        margin: 0.8rem 0.5333rem;
        height: 1.0667rem;
        background: #ffd274;
        font-size: 0.3733rem;
        text-align: center;
        line-height: 1.0667rem;
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .activity-index {
    .nav {
      display: none;
    }
    /deep/ .van-swipe__track{
          height:7.3333rem !important;
    }
    /deep/ .van-swipe__indicators--vertical{
      display: none;
    }
    .keiku {
      display: none;
    }
    .indexview {
      position: relative;
    }
    .ponso {
      opacity: 0.9;
      filter: alpha(opacity=30);
      background-color: #000;
      position: absolute;
      z-index: 999;
      width: 100%;
      height: 100%;
      top: 0;
    }
    .hesr {
      height: 100%;
      background: #000;
      height: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0.6667rem;
      .letfs {
        width: 5.3333rem;
        height: 0.7rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .rifhs {
        width: 0.7333rem;
        height: 0.7rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    // background: url(../../assets/img_s/under_bg.png) no-repeat;
    // height: 100vh;
    .brann {
      display: none;
    }
    .branns {
      width: 100%;
      height: 6.6667rem;
      background: url(../../assets/img_s/bcgr.png) no-repeat;
      background-size: 100% 100%;
      position: relative;
      overflow: hidden;
    }
    .branns .box {
      color: #fff;
      // position: absolute;
      font-size: 0.45rem;
      width: 80%;
      text-align: center;
      margin: 1.0667rem auto 0.3667rem;
      // right: 30%;
      // top: 30%;
      background: #000;
      background-color: rgba(0, 0, 0, 0.12);
      padding: 0.1333rem 0.2667rem;
    }
    .branns .boxs {
      width: 8rem;
      color: #fff;
      margin: 0 auto;
      // position: absolute;
      font-size: 0.5rem;
      display: flex;
      // right: 28.5%;
      // top: 49%;
      div {
        width: 2.6667rem;
        text-align: center;
      }
    }
    .szhibu {
      width: 100%;
      height: 1.3333rem;
      // background: #000;
      background: url(../../assets/img_s/4.png) no-repeat;
      background-size: 100% 100%;
      color: #f4bf50;
      margin: 0.5333rem 0;
      text-align: center;
      font-weight: bold;
      line-height: 1.3333rem;
      font-size: 0.3467rem;
    }
    .hanx {
      width: 92%;
      height: 3.5rem;
      margin: 0 auto;
      background: url(../../assets/img_s/jods.png) no-repeat;
      background-size: 100% 100%;
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;
      .tops {
        padding: 0 0.2667rem;
        width: 100%;
        height: 100%;
        display: flex;
        color: #ecca80;
        box-sizing: border-box;
        //   padding-top: .5333rem;
        .boxns {
          width: 25%;
          padding: 0.5333rem 0;
          img {
            width: 100%;
            height: 1.8667rem;
          }
          .imgs {
            font-size: 0.32rem;
            margin: 0 auto;
            // width: 120px;
            width: 88%;
            height: 0.6667rem;
            line-height: 0.6667rem;
            background: url(../../assets/img_s/hanx.png) no-repeat;
            background-size: 100% 100%;
            text-align: center;
            // margin: 0 0.8rem;
          }
        }
      }
      .bots {
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        box-sizing: border-box;
        padding: 0 0.5333rem;
        div {
          width: 3.633rem;
          height: 2.7333rem;
          background: url(../../assets/img_s/7.png) no-repeat;
          background-size: 100% 100%;
          //   text-align: center;
          margin: 0 0.55rem;
        }
      }
    }
    .hanx::before {
      content: "";
      width: 0.8rem;
      height: 1.6rem;
      top: 0;
      left: 0;
      background: url(../../assets/img_s/bk.png) no-repeat;
      background-size: 100% 100%;
      position: absolute;
    }
    .hanxsn {
      width: 92%;
      // height: 6rem;
      margin: 0.5333rem auto;
      position: relative;
      display: flex;
      flex-direction: column;
      // justify-content: space-between;
      .lefts {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: url(../../assets/img_s/jods.png) no-repeat;
        background-size: 100% 100%;
        width: 100%;
        //   height: 100%;
        .tops {
          padding-top: 0.8rem;
          color: #fadc86;
          text-align: center;
          font-size: 0.457rem;
          letter-spacing: 0.4267rem;
          font-weight: bold;
        }
        .btoms {
          box-sizing: border-box;
          margin: 0 auto;
          display: flex;
          padding: 0.6rem 0.5333rem;
          flex-direction: column;
          color: #49f6ff;
          width: 100%;
          .fhzi {
            border: 0 !important;
            background: #ecca80;
            color: #000;
            margin: 0.5333rem auto 0 !important;
            width: 2.4rem !important;
            height: 0.4333rem !important;
          }
        }
        .btoms div:nth-child(1) {
          margin: 0.2667rem auto 0;
          font-size: 0.3733rem;
          width: 65%;
          padding: 0.09rem 0;
          text-align: center;
          border: 2px solid #fadc86;
          span {
            display: block;
          }
        }
        .btoms div:nth-child(2) {
          margin-top: 0.2667rem;
          font-size: 0.333rem;
          width: 20%;
          padding: 0.09rem 0;
          margin-left: 0.2667rem;
          text-align: center;
          border: 2px solid #fadc86;
          img {
            width: 20px;
            margin: 0 auto;
            height: 20px;
            display: block;
          }
          span {
            display: block;
          }
        }
      }
      .shihs {
        width: 3.8667rem;
        font-size: 0.32rem;
        height: 0.8rem;
        line-height: 0.8rem;
        background: url(http://localhost:8080/img/hanx.326c8343.png) no-repeat;
        background-size: 100% 100%;
        text-align: center;
        margin: 10px auto;
        color: #fadc86;
      }
      .rigsh {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: url(../../assets/img_s/jods.png) no-repeat;
        background-size: 100% 100%;
        width: 100%;
        margin-top: 0.2667rem;
        position: relative;
        //   height: 100%;
        .boxn {
          width: 85%;
          height: 6.6667rem;
          margin: 0.4rem auto;
          background: url(../../assets/img_s/god.png) no-repeat;
          background-size: 100% 100%;
          // text-align: center;
          padding: 0.5333rem 0.6333rem;
          box-sizing: border-box;
          color: #49f6ff;
          font-size: 0.2933rem;
          div {
            margin: 0.1333rem 0;
          }
        }
      }
      .rigsh::before {
        content: "";
        width: 0.06rem;
        height: 5rem;
        top: 5%;
        right: 0;
        background: url(../../assets/img_s/godon.png) no-repeat;
        background-size: 100% 100%;
        position: absolute;
      }
      .lefts::before {
        content: "";
        width: 0.8rem;
        height: 1.6rem;
        top: 0;
        left: 0;
        background: url(../../assets/img_s/bk.png) no-repeat;
        background-size: 100% 100%;
        position: absolute;
      }
    }
    .wtp {
      width: 100%;
      text-align: center;
      margin: 1.2rem 0 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 2.4rem;
        height: 1.2rem;
      }
      .zhoj {
        font-weight: bold;
        font-size: 0.68rem;
        color: #deb35b;
        letter-spacing: 0.2667rem;
      }
      .zhojs {
        font-weight: bold;
        font-size: 0.68rem;
        color: #deb35b;
        letter-spacing: 0.067rem;
      }
      .zhojn {
        font-weight: bold;
        font-size: 0.2rem;
        color: #deb35b;
        letter-spacing: 0.067rem;
      }
      .gb {
        position: relative;
        // margin-bottom: 30px;
        img {
          width: 7rem;
          height: 0.4667rem;
        }
      }
      .zhojx {
        position: absolute;
        left: 56%;
        width: 60%;
        transform: translate(-50%, -50%);
        top: 50%;
        display: flex;
        color: #deb35b;
        div {
          margin: 0 0.1333rem;
        }
      }
    }
    .itmsn::before {
      content: "";
      width: 0.8rem;
      height: 1.6rem;
      top: 0;
      left: 0;
      background: url(../../assets/img_s/bk.png) no-repeat;
      background-size: 100% 100%;
      position: absolute;
    }
    .itmsn {
      position: relative;
      width: 92%;
      //   height: 8rem;
      margin: 0.8rem auto 0;
      background: url(../../assets/img_s/jods.png) no-repeat;
      background-size: 100% 100%;
      box-sizing: border-box;
      padding: 0.8rem 0.3333rem;

      .tops {
        display: flex;
        color: #ecca80;
        justify-content: center;
        box-sizing: border-box;
        //   padding-top: .5333rem;
        div {
          width: 1.8667rem;
          font-size: 0.32rem;
          height: 0.7rem;
          line-height: 0.7rem;
          background: url(http://localhost:8080/img/hanx.326c8343.png) no-repeat;
          background-size: 100% 100%;
          text-align: center;
          margin: 0 0.1rem;
        }
        .imsop {
          width: 2.4rem;
          height: 0.533rem;
        }
      }
      .imsop {
        display: block;
        margin: 0 auto;
        width: 2.4rem;
        height: 0.533rem;
      }
      .bosn {
        box-sizing: border-box;
        padding: 30px 0.4rem;
        color: #ecca80;
        font-size: 0.2933rem;
        text-align: left;
        box-sizing: border-box;
        padding: 0.4rem 1.6rem;
        color: #ecca80;
        font-size: 12px;
        text-align: left;
        box-sizing: border-box;
        padding: 0.2rem 0.4rem;
        color: #ecca80;
        font-size: 13px;
        text-align: left;
        // width: 80%;
        //   margin: 0.1333rem auto;
        //   color: #fff;
        align-items: baseline;
        display: flex;
        .tis {
          margin-right: 0.1333rem;
          color: #fff;
          width: 25px;
          height: 36px;
          background: url(../../assets/img_s/bit.png) no-repeat;
          background-size: 100% 100%;
          text-align: center;
          line-height: 36px;
        }
      }
      .bosnio {
        box-sizing: border-box;
        padding: 0.4rem 0.2667rem;
        color: #fff;
        font-size: 0.2933rem;
        text-align: left;
      }
      .quks {
        //   display: flex;
        padding: 0 0.5333rem;
        box-sizing: border-box;
        .btis {
          color: #27f7e1;
          display: flex;
          margin-top: 0.5333rem;
          align-items: baseline;
        }
        .btis div:nth-child(1) {
          margin-right: 0.1333rem;
          color: #fff;
          width: 0.7rem;
          height: 0.8rem;
          background: url(../../assets/img_s/bit.png) no-repeat;
          background-size: 100% 100%;
          text-align: center;
          line-height: 0.75rem;
        }
        .btis div:nth-child(2) {
          font-size: 0.32rem;
          border-bottom: 1px solid #27f7e1;
        }
        .nres {
          margin-top: 0.2667rem;
          box-sizing: border-box;
          padding-left: 0.8533rem;
          color: #fff;
        }
      }
      .prmse {
        display: flex;
        margin-top: 0.2667rem;
        // padding: 0.4rem 1.6rem;
        .itm {
          width: 2.6667rem;
          margin: 0 0.2667rem;
          text-align: center;
          color: #27f7e1;
          div {
            margin-top: 0.0333rem;
          }
          img {
            border-radius: 0.2667rem;
            width: 2.3667rem;
            margin-bottom: 0.1333rem;
            height: 1.8667rem;
          }
        }
      }
    }
    .yjfz {
      display: none;
    }
    .incoe {
      width: 100%;
      //   height: 8rem;
      display: flex;
      margin: 0.5333rem auto 0;
      .imgs {
        position: relative;
        color: #49f6ff;
        // margin: 0 0.6333rem;
        width: 25%;
        text-align: center;
        div {
          margin-top: 0.1333rem;
        }
      }
      .imge {
        position: absolute;
        width: 1rem;
        top: 10%;
        right: -16%;
        height: 0.1333rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      img {
        width: 1.4rem;
        height: 1.4rem;
      }
    }
    .mysne {
      width: 92%;
      margin: 0.5333rem auto 0;
      display: flex;
      // background: url(../../assets/img_s/jods.png) no-repeat;
      .boxs:nth-child(1) {
        display: none;
      }
      .boxs:nth-child(2) {
        display: none;
      }
      .boxs {
        width: 60%;
        background: url(../../assets/img_s/bg.png) no-repeat;
        background-size: 100% 100%;
        height: 6.6667rem;
        margin: 0.5333rem auto;
        border-radius: 20px;
        padding: 0.2667rem 0;
        .ton {
          width: 80%;
          font-size: 0.3467rem;
          height: 1.0667rem;
          margin: 0.7333rem auto;
          background: url(../../assets/img_s/33.png) no-repeat;
          background-size: 100% 100%;
          text-align: center;
          color: #27f7e1;
          line-height: 1.0667rem;
        }
        .botmns {
          width: 80%;
          margin: 0.1333rem auto;
          color: #fff;
          align-items: baseline;
          display: flex;
          .tis {
            margin-right: 0.1333rem;
            color: #fff;
            width: 0.7rem;
            height: 0.8rem;
            background: url(../../assets/img_s/bit.png) no-repeat;
            background-size: 100% 100%;
            text-align: center;
            line-height: 0.75rem;
          }
        }
        .botmns div:nth-child(2) {
          flex: 1;
          // padding-top: .18rem;
        }
      }
    }
    .dibu {
      width: 92%;
      margin: 1.0667rem auto 0;
      //   padding-bottom: 6.0667rem;
      color: #deb35b;
      .names {
        text-align: center;
        font-size: 0.4267rem;
      }
      .boosp {
        // display: flex;
        // flex-direction: column;
        // justify-content: center;
      }
      .gb {
        width: 5.3333rem;
        color: #000;
        margin: 0.8rem auto;
        height: 1.0667rem;
        background: #d7b671;
        font-size: 0.3733rem;
        text-align: center;
        line-height: 1.0667rem;
      }
    }
  }
}
</style>
