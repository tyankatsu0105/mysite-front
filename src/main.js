import VuePrism from "vue-prism";
import store from "@/store";
import TagManager from "@/thirdparty/TagManager";

import "@/styles/core/fonts.scss";
import "@/styles/core/reset.scss";
import "@/styles/core/base.scss";

import "prismjs/themes/prism-tomorrow.css";

TagManager();

export default function(Vue, { head }) {
  head.meta.push({
    name: "google-site-verification",
    content: "DcneOuaFfensAf9vHJG_AE21c0W8CKhZIqKlYwxnzvo"
  });
  Vue.use(VuePrism);
  Vue.use(store);
}
