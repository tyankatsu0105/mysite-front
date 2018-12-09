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
      requirer: true
    },
    to: {
      type: String,
      requirer: true
    }
  }
};
</script>

<style scoped lang='scss'>
.LinkButtonPrimary {
  padding: 8px 24px;
  font-size: 1.3rem;
  background-color: $color-black;
  border-radius: 8px;
  box-shadow: 0 0 16px #292929;
  transition: $tst-default;

  &:hover {
    box-shadow: 0 0 18px #181818;
  }
}
</style>
