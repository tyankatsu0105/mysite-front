import VuePrism from "vue-prism";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimes,
  faClock,
  faFolder,
  faShareAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faNpm,
  faReadme,
  faGetPocket
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import store from "@/store";

library.add(
  faTimes,
  faTwitter,
  faGithub,
  faNpm,
  faReadme,
  faClock,
  faFolder,
  faGetPocket,
  faShareAlt
);

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
  Vue.component("font-awesome-icon", FontAwesomeIcon);
}
