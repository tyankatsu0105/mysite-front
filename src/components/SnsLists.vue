<template>
	<div
		class="SnsLists"
		:class="{'_isOpen': isOpenLists}"
	>
		<div class="SnsLists-ContentsBox">
			<button
				type="button"
				class="SnsLists-Button"
				@click="isOpenLists = !isOpenLists"
			>
				<font-awesome-icon :icon="{ prefix: 'fa', iconName: 'share-alt' }" />
			</button>
			<div class="SnsLists-Item _twitter">
				<a
					:href="`https://twitter.com/share?text=${siteInfo.title}&url=${siteUrl}${siteInfo.path}&hashtags=TyankatsuSB`"
					onClick="window.open(encodeURI(decodeURI(this.href)), 'tweetwindow', 'width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1'); return false;"
					rel="nofollow"
					class="SnsLists-Link"
				>
					<font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
				</a>
			</div>
			<div class="SnsLists-Item _hatena">
				<a
					:href="`http://b.hatena.ne.jp/entry/${siteUrl}${siteInfo.path}`"
					class="SnsLists-Link "
					target="_blank"
					title="このエントリーをはてなブックマークに追加"
				>
					<v-icon
						name="hatena"
						class="SnsLists-LinkIcon"
					/>
				</a>
			</div>
			<div class="SnsLists-Item _pocket">
				<a
					class="SnsLists-Link "
					:href="`http://getpocket.com/edit?url=${siteUrl}${siteInfo.path}&title=${siteInfo.title}`"
					onclick="window.open(this.href, 'PCwindow', 'width=550, height=350, menubar=no, toolbar=no, scrollbars=yes'); return false;"
				>
					<font-awesome-icon :icon="{ prefix: 'fab', iconName: 'get-pocket' }" />
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import VIcon from "@/basics/VIcon.vue";

export default {
  components: {
    VIcon
  },
  props: {
    siteInfo: {
      type: Object,
      requirer: true
    }
  },
  data() {
    return {
      isOpenLists: false,
      siteUrl: process.env.VUE_APP_BASE_URL
    };
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
    z-index: 1;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: lighten($color-primary, 10%);
    border-radius: 50%;
    box-shadow: $box-shadow-default;

    &:hover {
      transform: scale(1.2);
      transition: $tst-default;
    }
  }
  &-Item {
    box-shadow: $box-shadow-default;
    transition: $tst-default;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;

    &._twitter {
      background-color: #0c7abf;
    }
    &._hatena {
      background-color: #00a4de;
      .VIcon {
        width: 30px;
      }
    }
    &._pocket {
      background-color: #ff234f;
    }

    &:hover {
      box-shadow: $box-shadow-default-hover;
    }
  }
  &-Link {
    width: 100%;
    height: 100%;
    font-size: 20px;

    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &._isOpen {
    .SnsLists-Item {
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
