<template>
	<div class="BlogArticles">
		<blog-article
			v-for="edge in page.allWordPressPost.edges"
			:key="edge.node.id"
			heading-tag="h2"
			:article="edge.node"
		/>
	</div>
</template>

<script>
import BlogArticle from "@/components/BlogArticle";
export default {
  components: {
    BlogArticle
  },
  props: {
    page: {
      type: Object
    }
  }
};
</script>

<style scoped lang='scss'>
.BlogArticles {
  display: grid;
  grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;
  grid-gap: 30px;
  justify-items: center;
}
</style>
