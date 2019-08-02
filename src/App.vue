<template>
  <router-view></router-view>
</template>
<script>


export default {
  screenHeight: document.body.clientHeight-60,//减去header的60px
  name: 'app',
  data () {
    return {
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
  },
  watch:{
    screenHeight (val) {
      this.screenHeight = val
      document.getElementById('layout').style.height=this.screenHeight-60+"px";//检测窗口的大小，并赋值
    }
  },
}
</script>

<style>

body {
  margin:0;
  padding:0;
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
