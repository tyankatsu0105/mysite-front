<template>
	<button
		class="HeaderCloseButton"
		@click="closeHeader"
	>
		<font-awesome-icon icon="times" />
	</button>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
export default {
  components: {
    FontAwesomeIcon
  },
  mounted() {
    library.add(faTimes);
  },
  methods: {
    closeHeader() {
      this.$emit("close-header", false);
    }
  }
};
</script>

<style scoped lang="scss">
.HeaderCloseButton {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 1.5rem;
  color: inherit;
}
</style>
