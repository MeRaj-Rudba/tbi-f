import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

//Import antd
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
// import UIantd from 'ui-vue-antd';

//import vuetify
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
// import '@mdi/font/css/materialdesignicons.css'
Vue.use(Vuetify);

//import vuelidate
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

//import page title
import VuePageTitle from "vue-page-title";
Vue.use(VuePageTitle, { router });

//import custom css
import "./assets/dist/css/adminlte.css";
import "./assets/vendor/fontawesome-free/css/all.min.css";

import "./assets/dist/js/adminlte";

Vue.use(Antd);
// Vue.use(UIantd);
//Import Axios
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import VueEllipseProgress from "vue-ellipse-progress";

Vue.use(VueEllipseProgress);
//Import Vuex Store
// import store from './vuex/store'

Vue.config.productionTip = false;

axios.defaults.baseURL = "http://localhost/tcl-sfa/public/api/";

new Vue({
  router,

  vuetify: new Vuetify({
    icons: {
      iconfont: "mdiSvg", // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
    },
    theme: {
      themes: {
        light: {
          primary: "#14C6FF",
          secondary: "#424242",
          accent: "#82B1FF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
          lightblue: "#14c6FF",
          yellow: "#FFCF00",
          pink: "#FF1976",
          orange: "#FF8657",
          magenta: "#C33AFC",
          darkblue: "#1E2D56",
          gray: "#909090",
          neutralgray: "#9BA6C1",
          green: "#2ED47A",
          red: "#FF5c4E",
          darkblueshade: "#308DC2",
          lightgray: "#BDBDBD",
          lightpink: "#FFCFE3",
          white: "#FFFFFF",
        },
      },
    },
  }),
  render: (h) => h(App),
}).$mount("#app");
