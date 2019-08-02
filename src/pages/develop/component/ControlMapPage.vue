<template>

  <div class="pageContent">

    <div class="pageTitle">
      地图交互
    </div>

    <div class="updateTimeText">
      2019年7月25日 09:50
    </div>

    <div class="childTitle">
      MapManager
    </div>

    <div class="pageCutLine"/>

    <div class="pageContent">
      控件是指浮在地图图面上的一系列用于操作地图的组件，例如缩放按钮、指南针、定位按钮、比例尺等。<br/>
      MapManager类用于操控这些控件，以定制自己想要的视图效果。<br/>
    </div>

    <div style="width: 600px" v-highlight>
         <pre>
            <code class="css">

                //定义一个MapManager对象
                private MapManager mapManager;
                mapManager = MapManager.getInstance();

            </code>
          </pre>
    </div>

    <div class="childTitle">
      缩放按钮
    </div>

    <div class="pageCutLine"/>

    <div class="pageContent">
      缩放按钮是提供给 App 端用户控制地图缩放级别的交换按钮，每次点击改变1个级别，具体使用方法如下：<br/>
    </div>

    <div style="width: 600px" v-highlight>
         <pre>
            <code class="css">

                /** 放大地图 */
                public void zoomIn(){
                    MapManager.getInstance().zoomIn();
                }
                /** 缩小地图 */
                public void zoomOut(){
                    MapManager.getInstance().zoomOut();
                }

            </code>
          </pre>
    </div>

    <div class="childTitle">
      中心点连线
    </div>

    <div class="pageCutLine"/>

    <div class="pageContent">
      中心点连线是自车位置与地图中心点的连线，开发者可以自行设置显示和隐藏，并可以通过自定义方法设置连线的样式，连线的宽度与连线的颜色。<br/>
    </div>

    <div style="width: 600px" v-highlight>
         <pre>
            <code class="css">

                /** 初始化地图中心点连接线 */
                private void initMapCenterLine(){
                    MapManager.getInstance().setCaretLineVisible(true);
                    MapManager.getInstance().setCenterMarkLineStrokeStyle(MapManager.StrokeStyle.StrokeStyle_solid);
                    MapManager.getInstance().setCenterMarkLineWidth(2);
                    MapManager.getInstance().setCenterMarkLineColor(0xFFA1C9F2);
                    MapManager.getInstance().setCenterMarkLineEnable(true);
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
        name: "ControlMapPage"
    }
</script>

<style scoped>

  @import "../../../css/page.css";

</style>
