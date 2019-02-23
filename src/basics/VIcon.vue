<template>
	<div class="VIcon">
		<slot></slot>
	</div>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
.VIcon {
  svg {
    color: currentColor;
  }
  /deep/ g {
    fill: currentColor;
  }
}
</style>
