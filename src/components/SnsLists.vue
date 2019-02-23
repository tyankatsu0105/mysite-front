<template>
	<div
		:class="{'_isOpen': isOpenLists}"
		class="SnsLists"
	>
		<div class="SnsLists-ContentsBox">
			<button
				@click="isOpenLists = !isOpenLists"
				type="button"
				class="SnsLists-Button"
			>
				<FontAwesomeIcon :icon="{ prefix: 'fa', iconName: 'share-alt' }" />
			</button>
			<div class="SnsLists-Item _twitter">
				<a
					:href="`https://twitter.com/share?text=${siteInfo.title}&url=${siteUrl}${siteInfo.path}&hashtags=TyankatsuSB`"
					onClick="window.open(encodeURI(decodeURI(this.href)), 'tweetwindow', 'width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1'); return false;"
					rel="nofollow"
					class="SnsLists-Link"
				>
					<FontAwesomeIcon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
				</a>
			</div>
			<div class="SnsLists-Item _hatena">
				<a
					:href="`http://b.hatena.ne.jp/entry/${siteUrl}${siteInfo.path}`"
					class="SnsLists-Link "
					target="_blank"
					title="このエントリーをはてなブックマークに追加"
				>
					<VIcon
						class="SnsLists-LinkIcon"
					>
						<IconHatena />
					</VIcon>
				</a>
			</div>
			<div class="SnsLists-Item _pocket">
				<a
					:href="`http://getpocket.com/edit?url=${siteUrl}${siteInfo.path}&title=${siteInfo.title}`"
					class="SnsLists-Link "
					onclick="window.open(this.href, 'PCwindow', 'width=550, height=350, menubar=no, toolbar=no, scrollbars=yes'); return false;"
				>
					<FontAwesomeIcon :icon="{ prefix: 'fab', iconName: 'get-pocket' }" />
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import VIcon from "@/basics/VIcon.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGetPocket } from "@fortawesome/free-brands-svg-icons";

import IconHatena from "@/basics/VIcon/IconHatena.vue";

export default {
  components: {
    VIcon,
    FontAwesomeIcon,
    IconHatena
  },
  props: {
    siteInfo: {
      type: Object,
      requirer: true,
      default: () => {}
    }
  },
  data() {
    return {
      isOpenLists: false,
      siteUrl: process.env.VUE_APP_BASE_URL
    };
  },
  created() {
    library.add(faTwitter, faGetPocket, faShareAlt);
  }
};
</script>

<style scoped lang='scss'>
.SnsLists {
  position: fixed;
  bottom: 20px;
  left: 20px;
  &-ContentsBox {
    position: relative;
    width: 40px;
    height: 40px;
  }
  &-Button {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: lighten($color-primary, 10%);
    border-radius: 50%;
    box-shadow: $box-shadow-default;
    transition: $tst-default;

    &:hover {
      transform: scale(1.2);
    }
  }
  &-Item {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    border-radius: 50%;
    box-shadow: $box-shadow-default;
    transition: $tst-default;

    &._twitter {
      background-color: #0c7abf;
    }
    &._hatena {
      background-color: #00a4de;
      .VIcon {
        width: 30px;
        height: 30px;
      }
    }
    &._pocket {
      background-color: #ff234f;
    }

    &:hover {
      width: 110%;
      height: 110%;
      box-shadow: $box-shadow-default-hover;
    }
  }
  &-Link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 20px;

    color: #fff;
  }

  &._isOpen {
    .SnsLists-Item {
      visibility: visible;
      &._twitter {
        transform: translateY(calc(-100% - 20px));
      }
      &._hatena {
        transform: translate(calc(100%), calc(-100%));
      }
      &._pocket {
        transform: translateX(calc(100% + 20px));
      }
    }
  }
}
</style>
