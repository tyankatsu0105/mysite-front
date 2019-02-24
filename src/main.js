import store from "@/store";
import TagManager from "@/thirdparty/TagManager";

import "@/styles/core/fonts.scss";
import "@/styles/core/reset.scss";
import "@/styles/core/base.scss";

import "prismjs/themes/prism-tomorrow.css";

if (process.browser) {
  TagManager();
}

export default function(Vue) {
  Vue.use(store);
}
