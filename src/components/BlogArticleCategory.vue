<template>
	<div class="BlogArticleCategory">
		<font-awesome-icon
			:icon="{ prefix: 'fa', iconName: 'folder' }"
		/>
		<p class="BlogArticleCategory-CategoryText">
			{{ text }}
		</p>
	</div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  components: {
    FontAwesomeIcon
  },
  props: {
    text: {
      type: String,
      requirer: true,
      default: ""
    }
  }
};
</script>

<style scoped lang='scss'>
.BlogArticleCategory {
  &-CategoryText {
    display: inline-block;
    margin-left: 5px;
    font-size: 1rem;
  }
}
</style>
