<template>
	<component
		:is="icon"
		class="VIcon"
	/>
</template>

<script>
import IconHatena from "@/basics/VIcon/IconHatena.vue";
export default {
  components: {
    "icon-hatena": IconHatena
  },
  props: {
    name: {
      type: String,
      requirer: true,
      default: ""
    }
  },
  computed: {
    icon() {
      return "icon-" + this.name.toLowerCase();
    }
  }
};
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
