<template>
	<g-link
		:to="to"
		class="ArticleTag"
	>
		#{{ text }}
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
.ArticleTag {
  display: inline-block;
}
</style>
