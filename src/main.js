import VuePrism from "vue-prism";
import store from "@/store";
import TagManager from "@/thirdparty/TagManager";

import "@/styles/core/fonts.scss";
import "@/styles/core/reset.scss";
import "@/styles/core/base.scss";

import "prismjs/themes/prism-tomorrow.css";

TagManager();

export default function(Vue) {
  Vue.use(VuePrism);
  Vue.use(store);
}
