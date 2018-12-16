import VuePrism from "vue-prism";
import DefaultLayout from "@/layouts/Default.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes, faClock, faFolder } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faNpm,
  faReadme
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import store from "@/store";

library.add(faTimes, faTwitter, faGithub, faNpm, faReadme, faClock, faFolder);

import "@/styles/core/fonts.scss";
import "@/styles/core/reset.scss";
import "@/styles/core/base.scss";

import "prismjs/themes/prism-tomorrow.css";

export default function(Vue) {
  Vue.use(VuePrism);
  Vue.use(store);
  Vue.component("Layout", DefaultLayout);
  Vue.component("font-awesome-icon", FontAwesomeIcon);
}
