<template>

  <div class="pageContent">

    <div class="pageTitle">
      概述
    </div>

    <div class="updateTimeText">
      2019年7月25日 09:50
    </div>

    <div class="childTitle">
      图吧地图SDK简介
    </div>

    <div class="pageCutLine"/>

    <div class="contentText">
      图吧导航开放平台目前开放了基于6.2地图引擎的Jnavicore_6.2以及基于6.5引擎的Jnavicore_6.5两套地图SDK工具。<br/>
      图吧地图 Android SDK 是一套地图开发调用接口，开发者可以轻松地在自己的Android应用中加入地图相关的功能，包括：<br/>
      地图显示、与地图交互、在地图上绘制、兴趣点搜索、地理编码、离线地图等功能。<br/>
    </div>

    <div class="childTitle">
      功能介绍与体验
    </div>

    <div class="pageCutLine"/>

    <div class="codeRowContent">
      <div style="width: 600px" v-highlight>
      <pre>
        <code class="css">
      /** 地图View */<br/>
      private MapView mapView;<br/>
      @Override<br/>
      public void updateMapView() {<br/>
          ViewGroup.LayoutParams params = new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT,
              ViewGroup.LayoutParams.MATCH_PARENT);<br/>
          mapView.setLayoutParams(params);<br/>
          rootViewGroup.addView(mapView);<br/>
      }<br/>
    </code>
      </pre>
      </div>
      <div>
        <img alt="Map content" src="../../../assets/map_content.jpg" style="width:600px;height:300px;margin-left: 30px;margin-top: 30px">
      </div>
    </div>


    <div class="childTitle">
      账号与Key的申请
    </div>

    <div class="pageCutLine"/>

    <div class="contentText">
      注册成为图吧开发者需要分三步：<br/>
      第一步，申请apiKey；<br/>
      第二步，去控制台创建应用；<br/>
      第三步，获取Key。<br/>
    </div>

    <div class="childTitle">
      给开发者的建议
    </div>

    <div class="pageCutLine"/>

    <div class="contentText">
      图吧开放平台提供的地图API/SDK，您需要先申请Key，才能使用该服务。<br/>
    </div>


  </div>


</template>

<script>
  import * as hljs from "highlight.js";

  hljs.initHighlightingOnLoad();
    export default {
        name: "OverviewPage"
    }
</script>

<style scoped>
  @import "../../../css/page.css";



</style>
