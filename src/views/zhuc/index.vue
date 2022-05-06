<template>
  <div class="activity-container">
    <div class="circle"></div>
    <!-- <img src="../../assets/img/qx4.png" alt="" />
    <span>{{ $t("common.noData") }}</span> -->
    <div class="lefts">
      <img src="../../assets/img_s/left.png" alt="" />
    </div>
    <div class="loigns">
      <img src="../../assets/img_s/lgos.png" alt="" />
    </div>
    <div class="rgihs">
      <div class="inos">
        <img src="../../assets/img_s/use.png" alt="" />
        <input type="text" placeholder="请输入用户名" v-model="datafrom.name" />
      </div>
      <div class="inos">
        <img src="../../assets/img_s/pasww.png" alt="" />
        <input type="password" placeholder="请输入密码" v-model="datafrom.paossw" />
      </div>
      <div class="inos">
        <img src="../../assets/img_s/pasww.png" alt="" />
        <input type="password" placeholder="请再次输入密码" v-model="datafrom.paossw" />
      </div>
      <div class="inos">
        <img src="../../assets/img_s/pasww.png" alt="" />
        <input type="password" placeholder="请输入TRC20地址" v-model="datafrom.paossw" />
      </div>
      <div class="bge" @click="deng">注册</div>
      <div class="zhuc">
        <div>已有账号?</div>
        <a href="javascript:void(0);" @click="dnekus">立即登录</a>
      </div>
    </div>
  </div>
</template>

<script>
import {getUserInfo} from '@/api/demo.js'
export default {
  name: "",
  data() {
    return {
      datafrom: {
        paossw: "",
        name: "",
      },
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    dnekus(){
       this.$emit('Usna','')
    },
    deng() {
      getUserInfo().then(res=>{
          
      })
      console.log(this.datafrom.paossw == undefined);
      if (this.datafrom.name == "") {
        this.$message({
          message: "请输入用户名",
          type: "warning",
        });
      } else if (this.datafrom.paossw == "") {
        this.$message({
          message: "请输入密码",
          type: "warning",
        });
      } else {
        let parme = this.datafrom;
        console.log(parme);
      }
    },
  },
  computed: {},
  watch: {},
};
</script>

<style lang="less" scoped>
@media screen and (min-width: 992px) {
  .nav {
    height: 70px;
  }
  .activity-container {
    background: url(../../assets/img/pc_bg.jpg);
    height: 100vh;
    .lefts {
      display: block;
    }
    .circle {
      display: none;
    }
    .loigns {
      display: none;
    }
  }
}
@media screen and (max-width: 992px) {
  .nav {
    height: 50px;
  }
  .activity-container {
    background: url(../../assets/img/pc_bg.jpg);
    flex-direction: column;
    margin-top: 60px;
    justify-content: stretch !important;
    .lefts {
      display: none;
    }
    .rgihs {
      margin-top: 30px;
      .inos {
        display: flex;
      }
    }
    .circle {
      box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.9);
    }
    .loigns {
      width: 80%;
      height: 44px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.activity-container {
  width: 100%;
  background-size: 100% 100%;
  box-sizing: border-box;
  //   padding: 0px 100px;
   
  justify-content: center;
  display: flex;
  // align-content: center;
  align-items: center;
  // padding-top: 40px;
  .lefts {
    width: 400px;
    height: 200px;
    margin-right: 120px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .rgihs {
    width: 400px;
    height: 500px;
    position: relative;
    background: url(../../assets/img_s/rogh-bg.png) no-repeat;
    background-size: 100% 100%;
    // padding: 15px 15px;
    box-sizing: border-box;
    padding: 70px 0;
    .inos {
      width: 290px;
      margin: 0 auto 25px;
      height: 36px;
      border: 0.2px solid #3c8fef;
      border-radius: 5px;
      position: relative;
      input {
        width: 100%;
        background: #1427613d;
        height: 100%;
        border: 0;
        color: #fff;
        box-sizing: border-box;
        padding-left: 50px;
        font-size: 12px;
      }
      img {
        position: absolute;
        width: 17px;
        height: 16px;
        left: 10%;
        top: 50%;
        transform: translate(-50%, -50%);
        height: 18px;
      }
      input::-webkit-input-placeholder {
        color: #fff;
        // padding-left: 40px;
      }
    }
    .jizhu {
      width: 290px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
    }
    .jizhu div:nth-child(1) {
      color: #fff;
    }
    .jizhu div:nth-child(2) {
      color: #0adfef;
    }
    .bge {
      width: 290px;
      margin: 25px auto 35px;
      height: 34px;
      background: url(../../assets/img_s/dlu.png) no-repeat;
      background-size: 100% 100%;
      font-size: 14px;
      color: #fff;
      text-align: center;
      line-height: 34px;
    }
    .zhuc {
      text-align: center;
      color: #fff;
      display: flex;
      justify-content: center;
      font-size: 13px;
      a {
        color: #0adfef;
        text-decoration: revert;
        margin-left: .2667rem;
      }
    }
    // box-sizing: border-box;
  }
}
</style>
