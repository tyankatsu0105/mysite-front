
<template>
	<Layout>
		<div class="ContentfulPosts">
			<transition
				appear
				name="ContentfulPosts-EyecatchBox"
			>
				<!-- <div class="ContentfulPosts-EyecatchBox">
					<g-image
						v-if="$page.post.featuredMedia"
						class="ContentfulPosts-Eyecatch"
						:src="$page.post.featuredMedia.url.src"
						width="100%"
					/>
				</div> -->
			</transition>
		
			<h1 class="ContentfulPosts-Heading">
				{{ $page.post.title }}
			</h1>

			<div class="ContentfulPosts-Info">
				<posts-article-date
					:text="$page.post.date"
					:time="$page.post.date"
				/>
				<!-- <posts-article-category
					:text="$page.post.categories[0].title"
				/> -->
			</div>
			
			
			<!-- eslint-disable vue/no-v-html -->
			<vue-markdown
				class="ContentfulPosts-Contents"
				:source="$page.post.contents"
			/>
			<!--eslint-enable-->
			<div class="ContentfulPosts-SnsLists">
				<sns-lists :site-info="siteInfo" />
			</div>
		</div>
	</Layout>
</template>

<script>
import PostsArticleDate from "@/components/PostsArticleDate.vue";
// import PostsArticleCategory from "@/components/PostsArticleCategory.vue";
import SnsLists from "@/components/SnsLists.vue";
import Layout from "@/layouts/Default";

import VueMarkdown from "vue-markdown";

import sliceText from "@/util/sliceText.js";

import { SITE_NAME } from "@/const";
export default {
  components: {
    PostsArticleDate,
    // PostsArticleCategory,
    SnsLists,
    Layout,
    VueMarkdown
  },
  computed: {
    siteInfo() {
      return {
        title: this.$page.post.title,
        path: this.$page.post.path
      };
    },
    ogpImage() {
      if (this.$page.post.featuredMedia) {
        return this.$page.post.featuredMedia.url.src;
      }
      return `${process.env.VUE_APP_STATIC_SRC_URL}/ogp.png`;
    }
  },
  mounted() {
    this.wrap("table", "div", "wrapTable");
    this.wrap("pre", "div", "preWrap");
    this.setIncludeCodeTitleClass();
    this.setCodeTitle();
  },
  beforeDestroy() {
    this.wrap();
  },
  methods: {
    sliceText,
    /**
     * 要素を任意の要素でwrapする
     * @param {string} elements - wrap元の要素
     * @param {string} tag - wrapする要素
     * @param {string} className - wrapのクラス名
     */
    wrap(elements, tag, className) {
      document.querySelectorAll(elements).forEach(element => {
        let wrapElement = document.createElement(tag);
        wrapElement.className = className;
        element.parentElement.insertBefore(wrapElement, element);
        wrapElement.appendChild(element);
      });
    },
    /**
     * codeにタイトル見出しを付与する
     */
    setCodeTitle() {
      document.querySelectorAll("code").forEach(element => {
        if (
          element.className.match(/language-/) &&
          element.className.match(/^:/)
        ) {
          let codeTitle = element.className.split(" ")[0];
          codeTitle = codeTitle.substr(1);

          let createTitleElement = document.createElement("code");
          createTitleElement.classList.add("codeTitle");
          createTitleElement.append(codeTitle);

          element.parentNode.insertBefore(createTitleElement, element);
        }
      });
    },
    setIncludeCodeTitleClass() {
      document.querySelectorAll("code").forEach(element => {
        if (element.className.match(/^:/)) {
          element.parentNode.classList.add("includeCodeTitle");
        }
      });
    }
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: "description",
          content: sliceText(this.$page.post.contents, 0, 100)
        },
        {
          vmid: "og:title",
          property: "og:title",
          content: this.$page.post.title
        },
        {
          vmid: "og:type",
          property: "og:type",
          content: "artcle"
        },
        {
          vmid: "og:url",
          property: "og:url",
          content: `${process.env.VUE_APP_BASE_URL}${this.$page.post.path}`
        },
        {
          vmid: "og:image",
          property: "og:image",
          content: this.ogpImage
        },
        {
          vmid: "og:site_name",
          property: "og:site_name",
          content: SITE_NAME
        },
        {
          vmid: "og:description",
          property: "og:description",
          content: sliceText(this.$page.post.contents, 0, 100)
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
          content: this.$page.post.title
        },
        {
          vmid: "twitter:url",
          name: "twitter:url",
          content: `${process.env.VUE_APP_BASE_URL}${this.$page.post.path}`
        },
        {
          vmid: "twitter:description",
          name: "twitter:description",
          content: sliceText(this.$page.post.contents, 0, 100)
        },
        {
          vmid: "twitter:image",
          name: "twitter:image",
          content: this.ogpImage
        }
      ]
    };
  }
};
</script>

<page-query>
query Post($path: String!) {
  post: contentfulPosts(path: $path) {
    id
    name
    eyecatch
    contents
    title
    slug
    path
    date(format: "YYYY.MM.DD", locale: "ja")
  }
}
</page-query>

<style lang="scss">
@import "@/styles/utility/transition-ContentfulPosts-EyecatchBox.scss";
.ContentfulPosts {
  &-EyecatchBox {
    position: relative;
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: "";
    }
  }
  &-Eyecatch {
    object-fit: cover;
    height: 370px;
    @include mq-xs {
      height: 70vw;
    }
  }
  &-Heading {
    margin-top: 16px;
    font-size: 2.2rem;
    font-weight: bold;

    @include mq-xs {
      margin-top: 20px;
      font-size: 1.4rem;
    }
  }
  &-SnsLists {
    margin-top: 10px;
  }
  &-Info {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: 10px;
    font-size: 1rem;

    @include mq-xs {
      justify-content: flex-start;
    }

    /deep/ .PostsArticleCategory-CategoryText {
      font-size: inherit;
    }
  }
  .PostsArticleCategory {
    margin-left: 10px;
  }
  &-Contents {
    padding-top: 20px;
    margin-top: 20px;
    border-top: 2px solid #5e5e5e;
    // ==============================================
    // Base
    // ==============================================
    > * {
      margin-top: 10px;
      line-height: 1.8;
    }
    img {
      margin-top: 10px;
    }
    a,
    cite {
      display: inline-block;
    }
    a {
      margin: 0 5px;
      color: lighten($color-accent, 30%);
      text-decoration: underline;

      &:hover {
        transform: scale(1.1);
      }
    }
    // ==============================================
    // headings
    // ==============================================
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 40px 0 20px;
      font-weight: bold;
    }
    h2 {
      padding-bottom: 3px;
      font-size: 2rem;
      font-size: 1.3rem;
      border-bottom: 3px solid lighten($color-accent, 20%);
    }
    h3 {
      padding-left: 10px;
      font-size: 1.6rem;
      border-left: 5px solid lighten($color-accent, 20%);
      @include mq-xs {
        font-size: 1.2rem;
      }
    }
    h4 {
      font-size: 1.4rem;
      @include mq-xs {
        font-size: 1.1rem;
      }
    }
    h5 {
      font-size: 1.1rem;
    }
    h6 {
      font-size: 1rem;
    }
    // ==============================================
    // list
    // ==============================================
    ul {
      list-style-type: disc;
    }

    ol {
      list-style-type: decimal;
    }
    ul {
      list-style-position: inside;
    }
    ol {
      list-style-position: inside;
    }
    li {
      padding-left: 1em;
      text-indent: -1em;
    }
    // ==============================================
    // table
    // ==============================================
    table {
      white-space: nowrap;
      table-layout: fixed;
      border-collapse: collapse;
    }
    th,
    td {
      padding: 4px 8px;
      border: 1px solid #ccc;
    }
    th {
      font-weight: bold;
    }
    tr:nth-child(even) {
      background-color: darken(#ccc, 50%);
    }
    .wrapTable {
      width: 100%;
      overflow: scroll;
    }
    // ==============================================
    // blockquote
    // ==============================================
    blockquote {
      padding: 12px;
      font-size: 0.9rem;
      line-height: 1.4;
      background-color: #3a424e;
      border-radius: 5px;
      box-shadow: $box-shadow-default;
      p::before {
        display: block;
        margin-bottom: 5px;
        content: "--Note--";
      }
    }
    // ==============================================
    // hr
    // ==============================================
    hr {
      margin: 32px 0;
    }
    // ==============================================
    // code
    // ==============================================
    @import "@/styles/thirdparty/prism.scss";
    .preWrap {
      position: relative;
      .includeCodeTitle {
        padding: 3em 1em 1em;
      }
      .includeCode {
        padding: 1em;
      }
      .codeTitle {
        position: absolute;
        top: 0;
        left: 0;
        padding: 0.3em 0.5em;
        background-color: #333;
      }
    }
    code {
      padding: 8px 12px;
      background-color: #000;
      border-radius: 4px;
    }
  }
}
</style>
