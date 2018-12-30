<template>
	<button
		class="HeaderCloseButton"
		@click="closeHeader"
	>
		<font-awesome-icon icon="times" />
	</button>
</template>

<script>
export default {
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
