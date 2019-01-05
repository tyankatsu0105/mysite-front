<template>
	<transition name="index">
		<div class="Index">
			<v-header />
			<index-canvas />
			<div class="Index_ContentsBlock">
				<h1 class="Index_Heading">
					Tyankatsu<br>Sketch Book
				</h1>
				<div class="Index_LinkBox">
					<LinkButtonPrimary
						text="About"
						to="about"
						class="Index_Link"
					/>
					<LinkButtonPrimary
						text="Posts"
						to="posts"
						class="Index_Link"
					/>
				</div>
				<div class="Index_LinkBox">
					<LinkButtonIcon
						:icon="{ prefix: 'fab', iconName: 'twitter' }"
						href="https://twitter.com/tyankatsu5"
						class="Index_Link"
					/>
					<LinkButtonIcon
						:icon="{ prefix: 'fab', iconName: 'github' }"
						href="https://github.com/tyankatsu0105"
						class="Index_Link"
					/>
					<LinkButtonIcon
						:icon="{ prefix: 'fab', iconName: 'npm' }"
						href="https://www.npmjs.com/~tyankatsu0105"
						class="Index_Link"
					/>
				</div>
			</div>
			<v-footer />
		</div>
	</transition>
</template>

<script>
import IndexCanvas from "@/containers/IndexCanvas.vue";
import VHeader from "@/containers/VHeader.vue";
import VFooter from "@/containers/VFooter.vue";

import LinkButtonPrimary from "@/basics/LinkButtonPrimary.vue";
import LinkButtonIcon from "@/basics/LinkButtonIcon.vue";

import { DESCRIPTION, SITE_NAME } from "@/const";

export default {
  components: {
    IndexCanvas,
    VHeader,
    LinkButtonPrimary,
    LinkButtonIcon,
    VFooter
  },
  metaInfo() {
    return {
      title: SITE_NAME,
      htmlAttrs: {
        lang: "ja"
      },
      meta: [
        {
          name: "description",
          content: DESCRIPTION
        },
        {
          vmid: "og:title",
          property: "og:title",
          content: SITE_NAME
        },
        {
          vmid: "og:type",
          property: "og:type",
          content: "website"
        },
        {
          vmid: "og:url",
          property: "og:url",
          content: `${process.env.VUE_APP_BASE_URL}`
        },
        {
          vmid: "og:image",
          property: "og:image",
          content: `${process.env.VUE_APP_STATIC_SRC_URL}/ogp.png`
        },
        {
          vmid: "og:site_name",
          property: "og:site_name",
          content: SITE_NAME
        },
        {
          vmid: "og:description",
          property: "og:description",
          content: DESCRIPTION
        },
        {
          vmid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          vmid: "twitter:site",
          name: "twitter:site",
          content: "@tyankatsu5"
        },
        {
          vmid: "twitter:creator",
          name: "twitter:creator",
          content: "tyankatsu"
        },
        {
          vmid: "twitter:title",
          name: "twitter:title",
          content: SITE_NAME
        },
        {
          vmid: "twitter:url",
          name: "twitter:url",
          content: `${process.env.VUE_APP_BASE_URL}`
        },
        {
          vmid: "twitter:description",
          name: "twitter:description",
          content: DESCRIPTION
        },
        {
          vmid: "twitter:image",
          name: "twitter:image",
          content: `${process.env.VUE_APP_STATIC_SRC_URL}/ogp.png`
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/utility/transition-index.scss";
.Index {
  &_ContentsBlock {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &_Heading {
    font-size: 3rem;
    text-align: center;
  }
  &_LinkBox {
    display: flex;
    justify-content: center;
    margin-top: 24px;
  }
  &_Link {
    & + & {
      margin-left: 12px;
    }
  }
  .VFooter {
    position: absolute;
    bottom: 0;
  }
}
</style>
