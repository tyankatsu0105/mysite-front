<template>
	<div class="BlogArticleCategory">
		<g-link :to="link">
			<font-awesome-icon
				:icon="{ prefix: 'fa', iconName: 'folder' }"
			/>
			<p class="BlogArticleCategory-CategoryText">
				{{ text }}
			</p>
		</g-link>
	</div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      requirer: true
    },
    link: {
      type: String,
      requirer: true
    }
  }
};
</script>

<style scoped lang='scss'>
.BlogArticleCategory {
  a {
    transition: $tst-default;

    &:hover {
      color: $color-accent;
    }
  }

  &-CategoryText {
    display: inline-block;
    margin-left: 5px;
    font-size: 1rem;
  }
}
</style>
