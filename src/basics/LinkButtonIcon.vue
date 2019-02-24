<template>
	<g-link
		:href="href"
		class="LinkButtonIcon"
	>
		<FontAwesomeIcon :icon="icon" />
	</g-link>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faGithub, faNpm } from "@fortawesome/free-brands-svg-icons";
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
  },
  created() {
    library.add(faTwitter, faGithub, faNpm);
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
