<template>

  <div class="pageContent">

    <div class="pageTitle">
      入门指南
    </div>

    <div class="updateTimeText">
      2019年7月25日 09:50
    </div>

    <div class="childTitle">
      第 1 步：下载并安装 Android Studio
    </div>

    <div class="pageCutLine"/>

    <div class="contentText">
      按照指南下载并安装 Android Studio。（注：下载地址为Google官方网站)<br/>
    </div>

    <div class="childTitle">
      第 2 步：获取图吧Key
    </div>

    <div class="pageCutLine"/>

    <div class="contentText">
      在引擎初始化EngineInit的时候传入appName与应用key<br/>
    </div>

    <div class="childTitle">
      第 3 步：创建项目
    </div>

    <div class="pageCutLine"/>

    <div class="contentText">
      1.启动 Android Studio。如果您看到 Welcome to Android Studio 对话框，请选择 Start a new Android Studio project，否则，请点击 Android Studio 菜单<br/>
      栏中的 File，然后点击 New->New Project，按提示输入您的应用名称、公司域和项目位置。 然后点击 Next。<br/>
      2.选择您的应用所需的机型。 如果您不能确定自己的需要，只需选择 Phone and Tablet。然后点击 Next。<br/>
      3.在“Add an activity to Mobile”对话框中选择 Empty Activity。 然后点击 Next。<br/>
      4.按提示输入 Activity 名称、布局名称和标题。 使用默认值即可。 然后点击 Finish。<br/>
    </div>


  </div>
</template>

<script>
    export default {
        name: "StartGuidePage"
    }
</script>

<style scoped>
  @import "../../../css/page.css";

</style>
