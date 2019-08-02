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
                        @click="toSolutionPage">
            解决方案
          </el-menu-item>
          <el-menu-item index="3"
                        @click="toDevelopPage">
            开发支持
          </el-menu-item>
          <el-menu-item index="4">示例中心</el-menu-item>
        </el-menu>

      </div>
    </el-header>
    <el-container>
      <el-container>

        <el-main>
         <div style="margin-top: 75px">
           <el-row>
             <!--<el-col :span="8" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">-->
               <!--<el-card :body-style="{ padding: '0px',width:'300px' }">-->
                 <!--<img src="../../assets/map_content.jpg" class="image">-->
                 <!--<div style="padding: 14px;">-->
                   <!--<span>地图展示</span>-->
                   <!--<div class="bottom clearfix">-->
                     <!--<time class="time">{{ currentDate }}</time>-->
                     <!--<el-button type="text" class="button">查看详情</el-button>-->
                   <!--</div>-->
                 <!--</div>-->
               <!--</el-card>-->
             <!--</el-col>-->
            <div style="display: flex;flex-direction: row">
              <div style="margin: 30px">
                <el-button plain type="primary" style="padding: 0">
                <el-card :body-style="{ padding: '0px',width:'350px',height:'300px' }">
                  <img src="../../assets/map_content.jpg" class="image">
                  <div style="padding: 14px;">
                    <span>地图展示</span>
                    <div class="bottom clearfix">
                      <time class="time">该示例用来展示地图</time>
                      <!--<el-button type="text" class="button">查看详情</el-button>-->
                    </div>
                  </div>
                </el-card>
                </el-button>
              </div>
              <div style="margin: 30px">
                <el-button plain type="primary" style="padding: 0px">
                <el-card :body-style="{ padding: '0px',width:'350px',height:'300px' }">
                  <img src="../../assets/map_content.jpg" class="image">
                  <div style="padding: 14px;">
                    <span>地图覆盖物</span>
                    <div class="bottom clearfix">
                      <time class="time">该示例用于展示如何在地图界面上绘制地图marker</time>
                      <!--<el-button type="text" class="button">查看详情</el-button>-->
                    </div>
                  </div>
                </el-card>
                </el-button>
              </div>
              <div style="margin: 30px">
                <el-button plain type="primary" style="padding: 0px">
                  <el-card :body-style="{ padding: '0px',width:'350px',height:'300px' }">
                    <img src="../../assets/map_content.jpg" class="image">
                    <div style="padding: 14px;">
                      <span>地图模式</span>
                      <div class="bottom clearfix">
                        <time class="time">该示例用于展示2D,2.5D以及3D地图显示模式</time>
                        <!--<el-button type="text" class="button">查看详情</el-button>-->
                      </div>
                    </div>
                  </el-card>
                </el-button>

              </div>
            </div>
           </el-row>
         </div>
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
    name: "DemoPage",
    data(){
      return{
        titleMenuIndex: '4',
        currentDate: new Date()
      }
    },
    methods: {
      toProductsPage(){
        this.$router.push('ProductsPage');
      },
      toSolutionPage(){
        this.$router.push('SolutionPage');
      },
      toDevelopPage(){
        this.$router.push('DevelopPage');
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
    text-align: center;
    padding: 0;
    min-height: 100vh;
    /*center-hour*/
    /*justify-content:center;*/
    align-items:center;
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

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

</style>
