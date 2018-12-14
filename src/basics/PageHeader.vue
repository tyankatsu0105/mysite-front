<template>
	<h1 class="PageHeader">
		{{ text }}
	</h1>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      requirer: true
    }
  }
};
</script>

<style scoped lang='scss'>
.PageHeader {
  margin-bottom: 40px;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.3em;
}
</style>
