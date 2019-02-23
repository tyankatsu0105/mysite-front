<template>
	<div class="PostsArticleDate">
		<FontAwesomeIcon
			:icon="{ prefix: 'fa', iconName: 'clock' }"
		/>
		<time
			:datetime="time"
			class="PostsArticleDate-DateText"
		>
			{{ text }}
		</time>
	</div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock } from "@fortawesome/free-solid-svg-icons";
export default {
  components: {
    FontAwesomeIcon
  },
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
  },
  created() {
    library.add(faClock);
  }
};
</script>

<style scoped lang='scss'>
.PostsArticleDate {
  &-DateText {
    margin-left: 5px;
  }
}
</style>
