<template>
	<header class="VHeader">
		<HeaderOpenButton @open-header="changeHeaderStatus" />
		<transition
			name="header"
		>
			<HeaderMenu
				v-if="isOpenHeader"
				@close-header="changeHeaderStatus"
			/>
		</transition>
	</header>
</template>

<script>
import HeaderOpenButton from "@/basics/HeaderOpenButton.vue";
import HeaderMenu from "@/components/HeaderMenu.vue";
export default {
  components: {
    HeaderOpenButton,
    HeaderMenu
  },
  data() {
    return {
      isOpenHeader: false
    };
  },
  methods: {
    changeHeaderStatus(status) {
      this.isOpenHeader = status;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/utility/transition-header.scss";
.VHeader {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1;

  &::after {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 0;
    height: 0;
    content: "";
    border-color: transparentize($color-primary, 0.1) transparent transparent
      transparent;
    border-style: solid;
    border-width: 120px 120px 0 0;
  }
}
</style>
