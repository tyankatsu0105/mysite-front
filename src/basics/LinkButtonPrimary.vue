<template>
	<g-link
		:to="to"
		class="LinkButtonPrimary"
	>
		{{ text }}
	</g-link>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      requirer: true,
      default: ""
    },
    to: {
      type: String,
      requirer: true,
      default: "/"
    }
  }
};
</script>

<style scoped lang='scss'>
.LinkButtonPrimary {
  padding: 8px 24px;
  font-size: 1.3rem;
  text-transform: uppercase;
  background-color: $color-black;
  border-radius: 8px;
  box-shadow: $box-shadow-default;
  transition: $tst-default;

  &:hover {
    box-shadow: $box-shadow-default-hover;
  }
}
</style>
