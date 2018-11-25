import DefaultLayout from "@/layouts/Default.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTimes);

import "@/styles/core/reset.scss";
import "@/styles/core/base.scss";

export default function(Vue) {
  Vue.component("Layout", DefaultLayout);
  Vue.component("font-awesome-icon", FontAwesomeIcon);
}
