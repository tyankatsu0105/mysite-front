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
      requirer: true,
      default: ""
    },
    time: {
      type: String,
      requirer: false,
      default: ""
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
