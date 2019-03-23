<template>
	<div class="PostsArticles">
		<PostsArticle
			v-for="edge in page.allContentfulPosts.edges"
			:key="edge.node.id"
			:article="edge.node"
		/>
	</div>
</template>

<script>
import PostsArticle from "@/components/PostsArticle.vue";
export default {
  components: {
    PostsArticle
  },
  props: {
    page: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style scoped lang="scss">
.PostsArticles {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: auto;
  grid-gap: 30px;
  justify-items: center;

  @media screen and (max-width: 1280px) {
    grid-template-columns: 1fr 1fr;
  }

  @include mq-xs {
    grid-template: 1fr / 100%;
  }
}
</style>
