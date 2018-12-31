import VuePrism from "vue-prism";
import store from "@/store";

import "@/styles/core/fonts.scss";
import "@/styles/core/reset.scss";
import "@/styles/core/base.scss";

import "prismjs/themes/prism-tomorrow.css";

export default function(Vue, { head }) {
  head.meta.push({
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  });
  Vue.use(VuePrism);
  Vue.use(store);
}
