import Vue from 'vue';
import Router from 'vue-router';
import OverviewPage from "./pages/develop/component/OverviewPage.vue";
import StartGuidePage from "./pages/develop/component/StartGuidePage.vue";
import ConfigProjectPage from "./pages/develop/component/ConfigProjectPage.vue";
import ShowMapPage from "./pages/develop/component/ShowMapPage.vue";
import ControlMapPage from "./pages/develop/component/ControlMapPage.vue";
import FAQPage from "./pages/develop/component/FAQPage.vue";
import DownloadPage from "./pages/develop/component/DownloadPage.vue";
import ProductsPage from "./pages/products/ProductsPage.vue";
import SolutionPage from "./pages/solution/SolutionPage.vue";
import DevelopPage from "./pages/develop/DevelopPage.vue";
import DemoPage from "./pages/demo/DemoPage.vue";

Vue.use(Router);

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        redirect: '/DevelopPage',

      },
      {
        path: '/ProductsPage',
        name: 'ProductsPage',
        component: ProductsPage
      },
      {
        path: '/SolutionPage',
        name: 'SolutionPage',
        component: SolutionPage
      },
      {
        path: '/DevelopPage',
        name: 'DevelopPage',
        component: DevelopPage,
        children:[
          {
            path: '/',
            redirect: '/OverviewPage',

          },
          {
            path: '/OverviewPage',
            name: 'OverviewPage',
            component: OverviewPage
          },
          {
            path: '/StartGuidePage',
            name: 'StartGuidePage',
            component: StartGuidePage,
          },
          {
            path: '/ConfigProjectPage',
            name: 'ConfigProjectPage',
            component: ConfigProjectPage
          },
          {
            path: '/ShowMapPage',
            name: 'ShowMapPage',
            component: ShowMapPage
          },
          {
            path: '/ControlMapPage',
            name: 'ControlMapPage',
            component: ControlMapPage
          },
          {
            path: '/DownloadPage',
            name: 'DownloadPage',
            component: DownloadPage
          },
          {
            path: '/FAQPage',
            name: 'FAQPage',
            component: FAQPage
          },
        ]
      },
      {
        path: '/DemoPage',
        name: 'DemoPage',
        component: DemoPage
      },
    ],
})

