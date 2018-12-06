<template>
	<button
		class="HeaderOpenButton"
		type="button"
		@click="openHeader"
	>
		Menu
	</button>
</template>

<script>
export default {
  props: {
    isOpenHeader: {
      type: Boolean
    }
  },
  methods: {
    openHeader() {
      this.$emit("open-header", true);
    }
  }
};
</script>

<style scoped lang="scss">
.HeaderOpenButton {
  position: relative;
  padding-bottom: 8px;
  font-size: 1.2rem;
  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    content: "";
    background-color: $color-accent;
    transition: $tst-default;
  }

  &:hover {
    &::before {
      width: calc(100% + 20px);
    }
  }
}
</style>
