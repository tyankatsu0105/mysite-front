<template>
	<a
		:href="href"
		target="_blank"
		class="LinkButtonIcon"
	>
		<font-awesome-icon :icon="icon" />
	</a>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  components: {
    FontAwesomeIcon
  },
  props: {
    icon: {
      type: Object,
      default: () => {}
    },
    href: {
      type: String,
      requirer: true,
      default: "/"
    }
  }
};
</script>

<style scoped lang='scss'>
.LinkButtonIcon {
  position: relative;
  padding: 8px 24px;
  font-size: 1.3rem;
  background-color: $color-black;
  border-radius: 8px;
  box-shadow: $box-shadow-default;
  transition: $tst-default;

  &:hover {
    box-shadow: $box-shadow-default-hover;
  }
}
</style>
