<template>
	<div
		class="PostsArticleTag"
	>
		<ul
			class="PostsArticleTag-List"
		>
			<li
				v-for="tag in node"
				:key="tag.sys.id"
				class="PostsArticleTag-Item"
			>
				#{{ tag.fields.title }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  props: {
    node: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped lang='scss'>
.PostsArticleTag {
  &-List {
    display: flex;
    flex-wrap: wrap;
  }
  &-Item {
    padding: 4px 8px;
    margin-right: 4px;
    margin-bottom: 4px;
    font-size: 0.8rem;
    background-color: lighten($color-primary, 10%);
    border-radius: 5px;
  }
}
</style>
