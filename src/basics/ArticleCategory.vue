<template>
	<g-link
		:to="to"
		class="ArticleCategory"
	>
		{{ text }}
	</g-link>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      requirer: true
    },
    to: {
      type: String,
      requirer: true
    }
  }
};
</script>

<style scoped lang='scss'>
.ArticleCategory {
  display: inline-block;
}
</style>
