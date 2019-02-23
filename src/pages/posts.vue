<template>
	<Layout>
		<div class="All">
			<PageHeader text="Posts" />
			<PostsArticles :page="$page" />
			<Transition
				appear
				name="pager"
			>
				<div class="All-PagerBlock">
					<Pager
						:info="$page.allContentfulPosts.pageInfo"
						:show-navigation="false"
						class="All-Pager"
					/>
				</div>
			</Transition>
		</div>
	</Layout>
</template>

<script>
import { Pager } from "gridsome";

import PostsArticles from "@/containers/PostsArticles";
import PageHeader from "@/basics/PageHeader";
import Layout from "@/layouts/Default";

import { SITE_NAME } from "@/const";

export default {
  components: {
    Pager,
    PostsArticles,
    PageHeader,
    Layout
  },
  metaInfo() {
    return {
      title: `Posts All Page ${
        this.$page.allContentfulPosts.pageInfo.currentPage
      }`,
      meta: [
        {
          name: "description",
          content: `${SITE_NAME}の記事一覧ページです。フロントエンドに関する情報を中心に投稿します。${
            this.$page.allContentfulPosts.pageInfo.currentPage
          }ページ目です。`
        },
        {
          key: "og:title",
          property: "og:title",
          content: `Posts All Page ${
            this.$page.allContentfulPosts.pageInfo.currentPage
          } - ${SITE_NAME}`
        },
        {
          key: "og:type",
          property: "og:type",
          content: "website"
        },
        {
          key: "og:url",
          property: "og:url",
          content: `${process.env.VUE_APP_BASE_URL}/posts/${
            this.$page.allContentfulPosts.pageInfo.currentPage
          }`
        },
        {
          key: "og:image",
          property: "og:image",
          content: `${process.env.VUE_APP_BASE_URL}/ogp.png`
        },
        {
          key: "og:site_name",
          property: "og:site_name",
          content: SITE_NAME
        },
        {
          key: "og:description",
          property: "og:description",
          content: `${SITE_NAME}の記事一覧ページです。フロントエンドに関する情報を中心に投稿します。${
            this.$page.allContentfulPosts.pageInfo.currentPage
          }ページ目です。`
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
          content: `Posts All Page ${
            this.$page.allContentfulPosts.pageInfo.currentPage
          } - ${SITE_NAME}`
        },
        {
          key: "twitter:url",
          name: "twitter:url",
          content: `${process.env.VUE_APP_BASE_URL}/posts/${
            this.$page.allContentfulPosts.pageInfo.currentPage
          }`
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: `${SITE_NAME}の記事一覧ページです。フロントエンドに関する情報を中心に投稿します。${
            this.$page.allContentfulPosts.pageInfo.currentPage
          }ページ目です。`
        },
        {
          key: "twitter:image",
          name: "twitter:image",
          content: `${process.env.VUE_APP_BASE_URL}/ogp.png`
        }
      ]
    };
  }
};
</script>

<page-query>
query Post($page: Int) {
  allContentfulPosts(perPage: 12, order: DESC, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    totalCount
    edges {
      node {
        id
        title
        path
        eyecatch {
          file {
            url
          }
        }
        category {
          title
        }
        tags {
          sys {
            id
          }
          fields {
            title
          }
        }
        date(format: "YYYY.MM.DD", locale: "ja")
      }
    }
  }
}
</page-query>


<style scoped lang='scss'>
@import "@/styles/utility/transition-pager.scss";
/* stylelint-disable selector-no-qualifying-type  */
.All {
  &-PagerBlock {
    position: fixed;
    top: 100px;
    right: 0;
    font-size: 1.2rem;

    @include mq-xs {
      position: static;
    }
  }
  &-Pager {
    display: flex;
    flex-direction: column;
    transition: $tst-default;

    @include mq-xs {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-auto-rows: auto;
      grid-gap: 20px;
      justify-items: center;
      margin-top: 20px;
    }
    a {
      position: relative;
      padding: 4px 16px;
      text-align: center;
      background-color: $color-black;
      border-radius: 8px;
      box-shadow: $box-shadow-default;
      transition: $tst-default;

      @include mq-xs {
        padding: 4px 12px;
      }

      &.active--exact,
      &:hover {
        font-weight: bold;
        box-shadow: $box-shadow-default-hover;
        transform: translateX(-10px);

        @include mq-xs {
          box-shadow: none;
          transform: none;
        }
      }
      &.active--exact {
        color: $color-accent;
      }
    }
    a + a {
      margin-top: 10px;

      @include mq-xs {
        margin-top: 0;
      }
    }
  }
}
</style>
