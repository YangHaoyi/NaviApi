<template>

  <div class="pageContent">

    <div class="pageTitle">
      Android Studio 配置工程
    </div>

    <div class="updateTimeText">
      2019年7月25日 09:50
    </div>

    <div class="childTitle">
      新建一个Android工程
    </div>

    <div class="pageCutLine"/>

    <div class="contentText">
      新建一个 Empty Activity 应用项目，您可参考 入门指南 创建工程 章节创建一个 Android 工程。<br/>
    </div>

    <div class="childTitle">
      通过拷贝添加SDK
    </div>

    <div class="pageCutLine"/>

    <div class="contentText">
      1、添加 Jar 文件：<br/>
      将下载的地图 SDK 的 jar包复制到工程的 libs 目录下，如果有老版本 jar 包在其中，请删除。<br/>
    </div>

    <div>
      <img alt="Map Jar" src="../../../assets/map_jar.png" style="width:300px;height:200px;margin-top: 20px;margin-bottom: 20px;">
    </div>

    <div class="contentText">
      2、添加 So 库：<br/>
      将下载的地图 SDK 的 So库复制到工程的 JniLibs 目录下，根据所要运行的主机版本选取创建指定的So库文件夹（armeabi、armeabi-v7a、arm64-v8a、x86、x86_64等）。<br/>
    </div>

    <div>
      <img alt="Map So" src="../../../assets/map_so.png" style="width:300px;height:200px;margin-top: 20px;margin-bottom: 20px;">
    </div>

  </div>

</template>

<script>
    export default {
        name: "ConfigProjectPage"
    }
</script>

<style scoped>
  @import "../../../css/page.css";
</style>
