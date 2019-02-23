<template>
	<div class="PostsArticleCategory">
		<FontAwesomeIcon
			:icon="{ prefix: 'fa', iconName: 'folder' }"
		/>
		<p class="PostsArticleCategory-CategoryText">
			{{ text }}
		</p>
	</div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

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
  },
  created() {
    library.add(faFolder);
  }
};
</script>

<style scoped lang='scss'>
.PostsArticleCategory {
  &-CategoryText {
    display: inline-block;
    margin-left: 5px;
    font-size: 1rem;
  }
}
</style>
