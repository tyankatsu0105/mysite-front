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

import "@/styles/core/reset.scss";
import "@/styles/core/base.scss";

export default function(Vue) {
  Vue.use(store);
  Vue.component("Layout", DefaultLayout);
  Vue.component("font-awesome-icon", FontAwesomeIcon);
}
