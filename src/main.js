import VuePrism from "vue-prism";
import store from "@/store";
import TagManager from "@/thirdparty/TagManager";

import "@/styles/core/fonts.scss";
import "@/styles/core/reset.scss";
import "@/styles/core/base.scss";

import "prismjs/themes/prism-tomorrow.css";

TagManager();

export default function(Vue, { head }) {
  head.script.push({
    charset: "UTF-8",
    src: "//cdn.iframe.ly/embed.js"
  });
  head.meta.push({
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  });
  Vue.use(VuePrism);
  Vue.use(store);
}
