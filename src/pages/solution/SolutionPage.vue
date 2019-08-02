<template>
  <el-container>
    <el-header>
      <div class="homeTitle">
        <div class="companyContent">
          <div class="companyName">
            NavInfo
          </div>
        </div>
        <el-menu
          :default-active="titleMenuIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#1D2128"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1"
                        @click="toProductsPage">
            产品介绍
          </el-menu-item>
          <el-menu-item index="2"
          >
            解决方案</el-menu-item>
          <el-menu-item index="3"
                        @click="toDevelopPage">
            开发支持</el-menu-item>
          <el-menu-item index="4"
                        @click="toDemoPage">
            示例中心</el-menu-item>
          <!--<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
        </el-menu>

      </div>
    </el-header>
    <el-container>
      <!--<el-aside width="230px">-->
      <!--<el-menu-->
      <!--background-color="#545c64"-->
      <!--text-color="#fff"-->
      <!--active-text-color="#ffd04b"-->
      <!--:default-active="activeIndex"-->
      <!--router-->
      <!--style="width:230px;height:200%;float:left"-->
      <!--&gt;-->
      <!--<NavMenu :navMenus="menuData"></NavMenu>-->
      <!--</el-menu>-->
      <!--</el-aside>-->
      <el-container>
        <el-main>
          <img alt="Map solution" src="../../assets/navi_solution.png" style="width:100%;">
        </el-main>

        <el-footer>

          <div class="footContent">

            <div class="footText">
              新手入门
            </div>

            <div class="footText">
              商务合作
            </div>

            <div class="footText">
              关于我们
            </div>

          </div>

        </el-footer>

      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "SolutionPage",
    data(){
      return{
        titleMenuIndex: '2',
      }
    },
    methods: {
      toProductsPage(){
        this.$router.push('ProductsPage');
      },
      toDevelopPage(){
        this.$router.push('DevelopPage');
      },
      toDemoPage(){
        this.$router.push('DemoPage');
      },

    },
  }
</script>

<style scoped>

  body {
    margin:0;
    padding:0;
  }

  .homeTitle{
    background: #1D2128;
    color: #eee;
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .el-header, .el-footer {
    background-color: #1D2128;
    color: #eee;
    text-align: center;
    line-height: 60px;
    padding: 0;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 0;
    min-height: 100vh;
  }
  .companyName{
    color:white;
    /*文字加粗*/
    font-weight:bold;
    /*文字大小*/
    font-size:20px;
  }

  .companyContent{
    display: flex;
    /*设置元素居中*/
    justify-content: center;
    align-items: center;
    /*设置内边距 上 右 下 左*/
    padding:0 10px 0 10px;
    margin-right:150px;
  }
  .footContent{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .footText{
    color:#FFFFFF;
    font-size: 15px;
    margin-right: 200px;
  }

  /*.el-aside {*/
  /*background-color: #545c64;*/
  /*color: #333;*/
  /*width: 230px;*/
  /*}*/

</style>
