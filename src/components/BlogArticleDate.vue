<template>
	<div class="BlogArticleDate">
		<font-awesome-icon
			:icon="{ prefix: 'fa', iconName: 'clock' }"
		/>
		<time
			:datetime="time"
			class="BlogArticleDate-DateText"
		>
			{{ text }}
		</time>
	</div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      requirer: true
    },
    time: {
      type: String,
      requirer: false
    }
  }
};
</script>

<style scoped lang='scss'>
.BlogArticleDate {
  &-DateText {
    margin-left: 5px;
  }
}
</style>
