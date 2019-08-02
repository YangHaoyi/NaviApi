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
                        @click="toSolutionPage">解决方案</el-menu-item>
          <!--<el-submenu index="2">-->
          <!--<template slot="title">解决方案</template>-->
          <!--<el-menu-item index="2-1">选项1</el-menu-item>-->
          <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
          <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
          <!--<el-submenu index="2-4">-->
          <!--<template slot="title">选项4</template>-->
          <!--<el-menu-item index="2-4-1">选项1</el-menu-item>-->
          <!--<el-menu-item index="2-4-2">选项2</el-menu-item>-->
          <!--<el-menu-item index="2-4-3">选项3</el-menu-item>-->
          <!--</el-submenu>-->
          <!--</el-submenu>-->
          <el-menu-item index="3" >开发支持</el-menu-item>
          <el-menu-item index="4"
                        @click="toDemoPage">
            示例中心</el-menu-item>
          <!--<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
        </el-menu>

      </div>
    </el-header>
    <el-container>
      <el-aside width="230px">
        <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :default-active="activeIndex"
          router
          style="width:100%;float:left;padding: 0"
        >
          <NavMenu :navMenus="menuData"></NavMenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view style="margin-left:230px"></router-view>
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
  import NavMenu from "../../widget/NavMenu.vue";
    export default {
      screenHeight: document.body.clientHeight-60,//减去header的60px
      components: {
        NavMenu: NavMenu
      },
      name: 'app',
      data () {
        return {
          activeIndex: 'OverviewPage',
          titleMenuIndex: '3',
          menuData: [
            {
              //一级
              entity: {
                id: 0,
                name: "OverviewPage",
                icon: "el-icon-edit-outline",
                alias: "概述"
              }
            },
            {
              //一级
              entity: {
                id: 0,
                name: "StartGuidePage",
                icon: "el-icon-document",
                alias: "入门指南"
              }
            },
            {
              //一级
              entity: {
                id: 1,
                name: "systemManage",
                icon: "el-icon-tickets",
                alias: "开发指南"
              },
              //二级
              childs: [
                {
                  entity: {
                    id: 3,
                    name: "ConfigProjectPage",
                    icon: "el-icon-loading",
                    alias: "配置工程",
                    value: { path: "/ConfigProjectPage" }
                  }
                },
                {
                  entity: {
                    id: 4,
                    name: "ShowMapPage",
                    icon: "el-icon-location-outline",
                    alias: "显示地图",
                    value: "/system/role"
                  }
                },
                {
                  entity: {
                    id: 2,
                    name: "ControlMapPage",
                    icon: "el-icon-edit",
                    alias: "地图交互",
                    value: "/system/menu"
                  }
                },
                // {
                //   entity: {
                //     id: 5,
                //     name: "groupManage",
                //     icon: "el-icon-mobile-phone\r\n",
                //     alias: "分组管理",
                //     value: "/system/group"
                //   }
                // }
              ]
            },
            {
              //一级
              entity: {
                id: 0,
                name: "DownloadPage",
                icon: "el-icon-download",
                alias: "相关下载"
              }
            },
            {
              //一级
              entity: {
                id: 0,
                name: "FAQPage",
                icon: "el-icon-news",
                alias: "常见问题"
              }
            },


            // {
            //   //一级
            //   entity: {
            //     id: 6,
            //     name: "userManage",
            //     icon: "el-icon-news",
            //     alias: "常见问题"
            //   },
            //   //二级
            //   childs: [
            //     {
            //       entity: {
            //         id: 7,
            //         name: "accountManage",
            //         icon: "el-icon-phone-outline\r\n",
            //         alias: "帐号管理",
            //         value: ""
            //       },
            //       //三级
            //       childs: [
            //         {
            //           entity: {
            //             id: 14,
            //             name: "emailManage",
            //             icon: "el-icon-sold-out\r\n",
            //             alias: "邮箱管理",
            //             value: "/content/email"
            //           }
            //         },
            //         {
            //           entity: {
            //             id: 13,
            //             name: "passManage",
            //             icon: "el-icon-service\r\n",
            //             alias: "密码管理",
            //             value: "/content/pass"
            //           }
            //         }
            //       ]
            //     },
            //     {
            //       entity: {
            //         id: 8,
            //         name: "integralManage",
            //         icon: "el-icon-picture",
            //         alias: "积分管理",
            //
            //         value: "/user/integral"
            //       }
            //     }
            //   ]
            // },
            // {
            //   //一级
            //   entity: {
            //     id: 40,
            //
            //     name: "contentManage",
            //     icon: "el-icon-rank",
            //     alias: "四级菜单"
            //   },
            //   //er级
            //   childs: [
            //     {
            //       entity: {
            //         id: 41,
            //         name: "classifyManage2",
            //         icon: "el-icon-printer",
            //         alias: "分类管理"
            //       },
            //       //三级
            //       childs: [
            //         {
            //           entity: {
            //             id: 42,
            //             name: "classifyManage3",
            //             icon: "el-icon-printer",
            //             alias: "分类管理"
            //           },
            //           //四级
            //           childs: [
            //             {
            //               entity: {
            //                 id: 43,
            //                 name: "classifyManage4",
            //                 icon: "el-icon-printer",
            //                 alias: "分类管理",
            //                 value: "/content/classify"
            //               }
            //             }
            //           ]
            //         }
            //       ]
            //     }
            //   ]
            // }
          ],
        }
      },
      mounted(){
        console.log(window.location.href);
        let start = window.location.href.lastIndexOf('/');
        let path = window.location.href.slice(start+1);
        this.activeIndex = path;

        console.log(this.activeIndex);
        document.getElementById('layout').style.height=this.screenHeight+"px";//页面初始化
        window.onresize = () => {
          return (() => {
            this.screenHeight = document.body.clientHeight
          })()
        }
      },
      methods: {
        toProductsPage(){
          this.$router.push('ProductsPage');
        },
        toSolutionPage(){
          this.$router.push('SolutionPage');
        },
        toDemoPage(){
          this.$router.push('DemoPage');
        },
      },
      watch:{
        screenHeight (val) {
          this.screenHeight = val
          document.getElementById('layout').style.height=this.screenHeight-60+"px";//检测窗口的大小，并赋值
        }
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
    min-height: 100vh;
  }

  .el-aside {
    background-color: #545c64;
    color: #333;
    width: 230px;
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

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
