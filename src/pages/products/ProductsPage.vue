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
          router
          active-text-color="#ffd04b">
          <el-menu-item index="1">
            产品介绍
          </el-menu-item>
          <el-menu-item index="2"
                        @click="toSolutionPage">
            解决方案</el-menu-item>
          <el-menu-item index="3" :index="developPage">
            开发支持</el-menu-item>
          <el-menu-item index="4"
                        @click="toDemoPage">
            示例中心</el-menu-item>
        </el-menu>

      </div>
    </el-header>
    <el-container>
      <el-container>
        <el-main>
          <img alt="Map company" src="../../assets/navinfo_main.png" style="width:100%;">
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
        name: "ProductsPage",
        data(){
          return{
            titleMenuIndex: '1',
            developPage:"DevelopPage",
          }
        },
        methods: {
        toSolutionPage(){
          this.$router.push('SolutionPage');
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
    background-color: #030311;
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
