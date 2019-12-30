<template>
	<Layout>
		<div class="Works">
			<PageHeader text="Works" />
			<h2 class="Works-CategoryHeading">
				OSS
			</h2>
			<ul class="Works-List">
				<li class="Works-ListItem">
					<g-link
						href="https://github.com/tyankatsu0105/install-with-types"
						class="Works-ListItemInner"
					>
						<div class="Works-ListItem_Head">
							<FontAwesomeIcon
								:icon="{ prefix: 'fab', iconName: 'github' }"
								size="6x"
							/>
						</div>
						<div class="Works-ListItem_Body">
							<h3 class="Works-ListItem_BodyHeading">
								install-with-types
							</h3>
							<p class="Works-ListItem_BodyDescription">
								パッケージをインストールする際に、@types/xx があれば、それも一緒にインストールするCLI
							</p>
						</div>
					</g-link>
				</li>

				<li class="Works-ListItem">
					<g-link
						href="https://github.com/tyankatsu0105/convert-mention-action"
						class="Works-ListItemInner"
					>
						<div class="Works-ListItem_Head">
							<g-image src="https://raw.githubusercontent.com/tyankatsu0105/convert-mention-action/master/assets/logo.png" />
						</div>
						<div class="Works-ListItem_Body">
							<h3 class="Works-ListItem_BodyHeading">
								convert-mention-action
							</h3>
							<p class="Works-ListItem_BodyDescription">
								IssueやPRでメンションを飛ばすとSlackのメンションに変換して通知するGitHub Action
							</p>
						</div>
					</g-link>
				</li>

				<li class="Works-ListItem">
					<g-link
						href="https://github.com/tyankatsu0105/read-package-version-actions"
						class="Works-ListItemInner"
					>
						<div class="Works-ListItem_Head">
							<FontAwesomeIcon
								:icon="{ prefix: 'fab', iconName: 'github' }"
								size="6x"
							/>
						</div>
						<div class="Works-ListItem_Body">
							<h3 class="Works-ListItem_BodyHeading">
								read-package-version-actions
							</h3>
							<p class="Works-ListItem_BodyDescription">
								package.jsonのversionを出力するGitHub Action
							</p>
						</div>
					</g-link>
				</li>

				<li class="Works-ListItem">
					<g-link
						href="https://github.com/gridsome/gridsome-helper-json"
						class="Works-ListItemInner"
					>
						<div class="Works-ListItem_Head">
							<FontAwesomeIcon
								:icon="{ prefix: 'fab', iconName: 'github' }"
								size="6x"
							/>
						</div>
						<div class="Works-ListItem_Body">
							<h3 class="Works-ListItem_BodyHeading">
								gridsome-helper-json
							</h3>
							<p class="Works-ListItem_BodyDescription">
								VeturでGridsomeの独自コンポーネントのautocompleteを表示する
							</p>
						</div>
					</g-link>
				</li>

				<li class="Works-ListItem">
					<g-link
						href="https://github.com/gridsome/eslint-plugin-gridsome"
						class="Works-ListItemInner"
					>
						<div class="Works-ListItem_Head">
							<g-image src="https://raw.githubusercontent.com/gridsome/eslint-plugin-gridsome/master/assets/logo/eslint-plugin-gridsome.png" />
						</div>
						<div class="Works-ListItem_Body">
							<h3 class="Works-ListItem_BodyHeading">
								eslint-plugin-gridsome
							</h3>
							<p class="Works-ListItem_BodyDescription">
								Gridsome向けのESLintルール拡張
							</p>
						</div>
					</g-link>
				</li>

				<li class="Works-ListItem">
					<g-link
						href="https://github.com/tyankatsu0105/types-gridsome"
						class="Works-ListItemInner"
					>
						<div class="Works-ListItem_Head">
							<g-image src="https://raw.githubusercontent.com/tyankatsu0105/types-gridsome/master/assets/logo.png" />
						</div>
						<div class="Works-ListItem_Body">
							<h3 class="Works-ListItem_BodyHeading">
								types-gridsome
							</h3>
							<p class="Works-ListItem_BodyDescription">
								Gridsomeの設定ファイルの型定義
							</p>
						</div>
					</g-link>
				</li>

				<li class="Works-ListItem">
					<g-link
						href="https://github.com/tyankatsu0105/stylelint-starterkit-plugin"
						class="Works-ListItemInner"
					>
						<div class="Works-ListItem_Head">
							<g-image src="https://raw.githubusercontent.com/tyankatsu0105/stylelint-starterkit-plugin/master/assets/logo/stylelint-starterkit-plugin.png" />
						</div>
						<div class="Works-ListItem_Body">
							<h3 class="Works-ListItem_BodyHeading">
								stylelint-starterkit-plugin
							</h3>
							<p class="Works-ListItem_BodyDescription">
								StylelintのPlugin開発のボイラープレートをCLIで作成する
							</p>
						</div>
					</g-link>
				</li>

				<li class="Works-ListItem">
					<g-link
						href="https://github.com/tyankatsu0105/stylelint-config-ecss"
						class="Works-ListItemInner"
					>
						<div class="Works-ListItem_Head">
							<FontAwesomeIcon
								:icon="{ prefix: 'fab', iconName: 'github' }"
								size="6x"
							/>
						</div>
						<div class="Works-ListItem_Body">
							<h3 class="Works-ListItem_BodyHeading">
								stylelint-config-ecss
							</h3>
							<p class="Works-ListItem_BodyDescription">
								ECSSのルールに則ることを目指すStylelint config
							</p>
						</div>
					</g-link>
				</li>

				<li class="Works-ListItem">
					<g-link
						href="https://github.com/tyankatsu0105/stylelint-plugin-ecss"
						class="Works-ListItemInner"
					>
						<div class="Works-ListItem_Head">
							<FontAwesomeIcon
								:icon="{ prefix: 'fab', iconName: 'github' }"
								size="6x"
							/>
						</div>
						<div class="Works-ListItem_Body">
							<h3 class="Works-ListItem_BodyHeading">
								stylelint-plugin-ecss
							</h3>
							<p class="Works-ListItem_BodyDescription">
								ECSSのルールに則るのに不足しているStylelintのルールの拡張
							</p>
						</div>
					</g-link>
				</li>

				<li class="Works-ListItem">
					<g-link
						href="https://github.com/tyankatsu0105/copy-versions"
						class="Works-ListItemInner"
					>
						<div class="Works-ListItem_Head">
							<FontAwesomeIcon
								:icon="{ prefix: 'fab', iconName: 'github' }"
								size="6x"
							/>
						</div>
						<div class="Works-ListItem_Body">
							<h3 class="Works-ListItem_BodyHeading">
								copy-versions
							</h3>
							<p class="Works-ListItem_BodyDescription">
								nodeやnpm、yarn、パッケージのバージョンをクリップボードにコピーするCLI
							</p>
						</div>
					</g-link>
				</li>

				<li class="Works-ListItem">
					<g-link
						href="https://github.com/tyankatsu0105/dom-node-size-label"
						class="Works-ListItemInner"
					>
						<div class="Works-ListItem_Head">
							<g-image src="https://raw.githubusercontent.com/tyankatsu0105/dom-node-size-label/master/assets/logo/logo.png" />
						</div>
						<div class="Works-ListItem_Body">
							<h3 class="Works-ListItem_BodyHeading">
								dom-node-size-label
							</h3>
							<p class="Works-ListItem_BodyDescription">
								DOMのNode数を表示するChrome拡張
							</p>
						</div>
					</g-link>
				</li>
			</ul>

			<h2 class="Works-CategoryHeading">
				書籍
			</h2>
			<ul class="Works-List">
				<li class="Works-ListItem">
					<g-link
						href="https://ponday.booth.pm/items/1316963"
						class="Works-ListItemInner"
					>
						<div class="Works-ListItem_Head">
							<FontAwesomeIcon
								:icon="{ prefix: 'fas', iconName: 'book' }"
								size="6x"
							/>
						</div>
						<div class="Works-ListItem_Body">
							<h3 class="Works-ListItem_BodyHeading">
								チームマネジメントとGridsome／VuePress
							</h3>
							<p class="Works-ListItem_BodyDescription">
								Gridsomeの章を執筆
							</p>
						</div>
					</g-link>
				</li>
			</ul>
		</div>
	</Layout>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import PageHeader from "@/basics/PageHeader.vue";
import { SITE_NAME } from "@/const";
import Layout from "@/layouts/Default.vue";
export default {
  components: {
    FontAwesomeIcon,

    PageHeader,
    Layout
  },
  created() {
    library.add(faGithub, faBook);
  },
  metaInfo() {
    return {
      title: "Works",
      meta: [
        {
          name: "description",
          content: `${SITE_NAME}の作ったものページです。`
        },
        {
          key: "og:title",
          property: "og:title",
          content: `Works - ${SITE_NAME}`
        },
        {
          key: "og:type",
          property: "og:type",
          content: "article"
        },
        {
          key: "og:url",
          property: "og:url",
          content: `${process.env.GRIDSOME_APP_BASE_URL}/works`
        },
        {
          key: "og:image",
          property: "og:image",
          content: `${process.env.GRIDSOME_APP_BASE_URL}/ogp.png`
        },
        {
          key: "og:site_name",
          property: "og:site_name",
          content: SITE_NAME
        },
        {
          key: "og:description",
          property: "og:description",
          content: `${SITE_NAME}の作ったものページです。`
        },
        {
          key: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          key: "twitter:site",
          name: "twitter:site",
          content: "@tyankatsu5"
        },
        {
          key: "twitter:creator",
          name: "twitter:creator",
          content: "tyankatsu"
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: `Works - ${SITE_NAME}`
        },
        {
          key: "twitter:url",
          name: "twitter:url",
          content: `${process.env.GRIDSOME_APP_BASE_URL}/works`
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: `${SITE_NAME}の作ったものページです。`
        },
        {
          key: "twitter:image",
          name: "twitter:image",
          content: `${process.env.GRIDSOME_APP_BASE_URL}/ogp.png`
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.Works {
  &-CategoryHeading {
    margin-bottom: 16px;
    font-size: 2rem;
    font-weight: bold;
  }
  &-List {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: auto;
    grid-gap: 30px;
    justify-items: center;
    margin-bottom: 32px;

    @media screen and (max-width: 1280px) {
      grid-template-columns: 1fr 1fr;
    }

    @include mq-xs {
      grid-template: 1fr / 100%;
    }
  }

  &-ListItemInner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  &-ListItem {
    width: 100%;
    height: 100%;
    background-color: $color-works-item;
    border-radius: 5px;
    box-shadow: $box-shadow-default;
    transition: $tst-default;
    &:hover {
      box-shadow: $box-shadow-default-hover;
      transform: translateY(-5px);
    }
    &_Head {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      min-height: 200px;
      padding: 16px;
    }
    &_Body {
      padding: 8px;
      background-color: darken($color-works-item, 3);
    }
    &_BodyHeading {
      font-size: 1.4rem;
      font-weight: bold;
    }
    &_BodyDescription {
      margin-top: 4px;
    }
  }
}
</style>
