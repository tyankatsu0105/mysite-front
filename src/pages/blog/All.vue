<template>
	<Layout>
		<div class="All">
			<PageHeader text="Blog" />
			<blog-articles :page="$page" />
			<transition
				appear
				name="pager"
			>
				<div class="All-PagerBlock">
					<Pager
						:info="$page.allWordPressPost.pageInfo"
						class="All-Pager"
						:show-navigation="false"
					/>
				</div>
			</transition>
		</div>
	</Layout>
</template>

<script>
import { Pager } from "gridsome";

import BlogArticles from "@/containers/BlogArticles";
import PageHeader from "@/basics/PageHeader";

export default {
  components: {
    Pager,
    BlogArticles,
    PageHeader
  },
  metaInfo() {
    return {
      title: `Blog All Page ${
        this.$page.allWordPressPost.pageInfo.currentPage
      }`,
      meta: [
        {
          name: "description",
          content:
            "フロントエンドに関する情報をメインに投稿するブログ記事の一覧ページです。"
        }
      ]
    };
  }
};
</script>


<page-query>
query Blog($page: Int) {
  allWordPressPost(perPage: 12, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        slug
        excerpt
        date(format: "YYYY.MM.DD", locale: "ja")
        categories {
          title
        }
        featuredMedia {
          url
        }
      }
    }
  }
}
</page-query>


<style scoped lang='scss'>
@import "@/styles/utility/transition-pager.scss";
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
      margin-top: 20px;
      display: grid;
      grid-auto-rows: auto;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 20px;
      justify-items: center;
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
          transform: none;
          box-shadow: none;
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
