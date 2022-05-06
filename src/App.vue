<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "dsf-dsf",
  data() {
    return {
      listim: [
        {
          names: "首页",
        },
        {
          names: "流程",
        },
        {
          names: "规则",
        },
        {
          names: "优势",
        },
        {
          names: "问题",
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
      indexs:0,
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
  },
  computed: {},
  watch: {},
};
</script>

<style lang="less" scoped>
@media screen and (min-width: 992px) {
  .hesr {
    display: none;
  }
  .container{
       background: url(./assets/img_s/bj.jpg) no-repeat;
       background-size: 100% 100%;
  }
  .nav {
    display: flex;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    justify-content: space-between;
    height: 1.7333rem !important;
    .letfs {
      width: 240px;
      height: 40px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .right{
      display: flex;
      height: 1.7333rem;
      line-height: 1.7333rem;
      div{
        //  margin: 0 .4rem;
         padding: 0 .4rem;
         font-size: .2933rem;
      }
    }
  }
}
@media screen and (max-width: 992px) {
  .nav {
    display: none;
  }
    .container{
       background: url(./assets/img_s/bj.jpg) no-repeat;
       background-size: 100% 100%;
  }
  .hesr {
    height: 100%;
    background: #000;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 .6667rem;
    .letfs {
      width: 5.3333rem;
      height: .7rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .rifhs{
       width: .7333rem;
       height: .7rem;
       img{
         width: 100%;
         height: 100%;
       }
    }
  }
}
@import "@/assets/css/media.less";
html {
  height: 100%;
}
</style>
