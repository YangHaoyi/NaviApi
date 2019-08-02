<template>

    <div class="pageContent">

      <div class="pageTitle">
        显示地图
      </div>

      <div class="updateTimeText">
        2019年7月25日 09:50
      </div>

      <div class="childTitle">
        第一步，配置AndroidManifest.xml
      </div>

      <div class="pageCutLine"/>

      <div class="contentText">
        使用地图SDK之前，需要在 AndroidManifest.xml 文件中进行相关权限设置，确保地图功能可以正常使用。<br/>
      </div>

      <div style="width: 600px" v-highlight>
      <pre>
        <code class="css">
                地图SDK（包含其搜索功能）需要的基础权限
                &#60;!--允许程序打开网络套接字--&#62;
                &#60;uses-permission android:name="android.permission.INTERNET"/&#62;
                &#60;!--允许程序设置内置sd卡的写权限--&#62;
                &#60;uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"&#62;
                &#60;!--允许程序获取网络状态--&#62;
                &#60;uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/&#62;
                &#60;!--允许程序访问WiFi网络信息--&#62;
                &#60;uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/&#62;
                &#60;!--允许程序读写手机状态和身份--&#62;
                &#60;uses-permission android:name="android.permission.READ_PHONE_STATE"/&#62;
                &#60;!--允许程序访问CellID或WiFi热点来获取粗略的位置--&#62;
                &#60;uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/&#62;
                &#60;uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/&#62;
                &#60;!--运行程序使用系统弹窗--&#62;
                &#60;uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/&#62;
                &#60;uses-permission android:name="android.permission.SYSTEM_OVERLAY_WINDOW"/&#62;


         </code>
      </pre>
      </div>

      <div class="childTitle">
        设置图吧导航Key
      </div>

      <div class="pageCutLine"/>

      <div class="contentText">
        在EngineHelper的EngineInit方法中设置图吧导航的Key<br/>
      </div>

      <div style="width: 600px" v-highlight>
         <pre>
            <code class="css">
              EngineHelper.EngineInit(context, width, height, 0,11, 应用名,申请的Key);
            </code>
          </pre>
      </div>

      <div class="childTitle">
        第二步，向工程中添加地图开发包
      </div>

      <div class="pageCutLine"/>

      <div class="contentText">
        可参考配置工程中新建工程的步骤，添加Jar包与so库到工程目录下。<br/>
      </div>

      <div>
        <img alt="Map Jar" src="../../../assets/map_jar.png" style="width:300px;height:200px;margin-top: 20px;margin-bottom: 20px;">
      </div>

      <div class="childTitle">
        第三步，初始化地图容器
      </div>

      <div class="pageCutLine"/>

      <div class="contentText">
        MapView 是 AndroidView 类的一个子类， 用于在 Android View 中放置地图。<br/>
        用 MapView 加载地图的方法与 Android 提供的其他 View 一样，具体的使用步骤如下：<br/>
      </div>

      <div style="width: 600px" v-highlight>
         <pre>
            <code class="css">
                /** 地图View */
                private MapView mapView;

                @Override
                public void updateMapView() {
                    ViewGroup.LayoutParams params = new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT);
                    mapView.setLayoutParams(params);
                    rootViewGroup.addView(mapView);
                }
            </code>
          </pre>
      </div>

    </div>

</template>

<script>
  import * as hljs from "highlight.js";
  hljs.initHighlightingOnLoad();
    export default {
        name: "ShowMapPage"
    }
</script>

<style scoped>

  @import "../../../css/page.css";

</style>
