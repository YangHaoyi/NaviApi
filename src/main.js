import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
