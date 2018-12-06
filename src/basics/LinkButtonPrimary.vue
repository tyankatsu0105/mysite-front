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
    tag: {
      type: String,
      requirer: false
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
  padding: 8px 16px;
  font-size: 1.3rem;
  border-radius: 6px;
  box-shadow: 0 2px 5px 0 #1e1e1e;
  transition: $tst-default;

  &:hover {
    box-shadow: 0 2px 6px #0e0e0e;
    transform: translateY(-2px);
  }
}
</style>
