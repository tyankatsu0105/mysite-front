<template>
	<Layout>
		<div class="All">
			<PageHeader text="Blog" />
			<blog-articles :page="$page" />
			<div class="All-PagerBlock">
				<Pager
					:info="$page.allWordPressPost.pageInfo"
					class="All-Pager"
					:show-navigation="false"
				/>
			</div>
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
  metaInfo: {
    title: `Blog All`
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
          path
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
.All {
  &-PagerBlock {
    position: fixed;
    top: 100px;
    right: 0;
  }
  &-Pager {
    display: flex;
    flex-direction: column;
    transition: $tst-default;
    a {
      position: relative;
      padding: 4px 16px;
      text-align: center;
      background-color: $color-black;
      border-radius: 8px;
      box-shadow: $box-shadow-default;
      transition: $tst-default;

      &:hover {
        box-shadow: $box-shadow-default-hover;
        transform: translateX(-10px);
      }
    }
    a + a {
      margin-top: 10px;
    }
    .active--exact {
      color: $color-accent;
    }
  }
}
</style>
