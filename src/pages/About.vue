<template>
	<Layout>
		<div class="About">
			<PageHeader text="About" />
			<div class="About-Profile">
				<g-image
					class="About-ProfileImg"
					src="@/assets/images/profile.png"
				/>
				<div class="About-ProfileContentsBox">
					<h2 class="About-ProfileHeading">
						tyankatsu
					</h2>
					<dl class="About-ProfileList">
						<div class="About-ProfileListItem">
							<dt class="About-ProfileListItemHeading">
								職業
							</dt>
							<dd class="About-ProfileListItemData">
								フロントエンドエンジニア
							</dd>
						</div>
						<div class="About-ProfileListItem">
							<dt class="About-ProfileListItemHeading">
								前職
							</dt>
							<dd class="About-ProfileListItemData">
								Webデザイナー
							</dd>
						</div>
						<div class="About-ProfileListItem">
							<dt class="About-ProfileListItemHeading">
								好きな食べ物
							</dt>
							<dd class="About-ProfileListItemData">
								ほうれん草
							</dd>
						</div>
						<div class="About-ProfileListItem">
							<dt class="About-ProfileListItemHeading">
								嫌いな食べ物
							</dt>
							<dd class="About-ProfileListItemData">
								カレーライス
							</dd>
						</div>
						<div class="About-ProfileListItem">
							<dt class="About-ProfileListItemHeading">
								好きなこと
							</dt>
							<dd class="About-ProfileListItemData">
								コードを書くこと / Webのアニメーションを見ること / 効率化が図れそうな技術を試すこと / 技術ブログを見て回ること
							</dd>
						</div>
						<div class="About-ProfileListItem">
							<dt class="About-ProfileListItemHeading">
								作ってるもの
							</dt>
							<dd class="About-ProfileListItemData">
								<ul>
									<li>
										<a
											href="https://github.com/tyankatsu0105/cz-format-extension"
											target="_blank"
										>
											cz-format-extension
										</a>
									</li>
									<li>
										<a
											href="https://github.com/gridsome/eslint-plugin-gridsome"
											target="_blank"
										>
											eslint-plugin-gridsome
										</a>
									</li>
								</ul>
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
import PageHeader from "@/basics/PageHeader";
import { SITE_NAME } from "@/const";
import Layout from "@/layouts/Default";
export default {
  components: {
    PageHeader,
    Layout
  },
  metaInfo() {
    return {
      title: "About",
      meta: [
        {
          name: "description",
          content: `${SITE_NAME}の著者紹介ページです。`
        },
        {
          vmid: "og:title",
          property: "og:title",
          content: `About - ${SITE_NAME}`
        },
        {
          vmid: "og:type",
          property: "og:type",
          content: "article"
        },
        {
          vmid: "og:url",
          property: "og:url",
          content: `${process.env.VUE_APP_BASE_URL}/about`
        },
        {
          vmid: "og:image",
          property: "og:image",
          content: `${process.env.VUE_APP_STATIC_SRC_URL}/assets/images/ogp.png`
        },
        {
          vmid: "og:site_name",
          property: "og:site_name",
          content: SITE_NAME
        },
        {
          vmid: "og:description",
          property: "og:description",
          content: `${SITE_NAME}の著者紹介ページです。`
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
          content: `About - ${SITE_NAME}`
        },
        {
          vmid: "twitter:url",
          name: "twitter:url",
          content: `${process.env.VUE_APP_BASE_URL}/about`
        },
        {
          vmid: "twitter:description",
          name: "twitter:description",
          content: `${SITE_NAME}の著者紹介ページです。`
        },
        {
          vmid: "twitter:image",
          name: "twitter:image",
          content: `${process.env.VUE_APP_STATIC_SRC_URL}/assets/images/ogp.png`
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.About {
  &-Profile {
    display: flex;
    align-items: flex-start;
    @include mq-xs {
      flex-direction: column;
    }
  }
  &-ProfileImg {
    width: 30%;
    @include mq-xs {
      width: 100%;
    }
  }
  &-ProfileContentsBox {
    width: 70%;
    padding-left: 40px;
    @include mq-xs {
      width: 100%;
      padding-left: 0;
      margin-top: 32px;
    }
  }
  &-ProfileHeading {
    margin-bottom: 32px;
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1;
  }
  &-ProfileListItem {
    font-size: 1.3rem;

    & + & {
      padding-top: 12px;
      margin-top: 12px;
      border-top: 2px solid #5e5e5e;
    }
  }
  &-ProfileListItemHeading {
    font-weight: bold;
  }
  &-ProfileListItemData {
    a {
      display: inline-block;
      color: lighten($color-accent, 30%);
      text-decoration: underline;

      &:hover {
        opacity: $opc-default;
      }
    }
  }
}
</style>
