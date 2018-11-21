import DefaultLayout from "@/layouts/Default.vue";

import "@/styles/core/reset.scss";
import "@/styles/core/base.scss";

export default function(Vue) {
  Vue.component("Layout", DefaultLayout);
}
