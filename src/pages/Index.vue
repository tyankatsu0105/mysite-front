<template>
	<transition name="index">
		<div class="Index">
			<v-header />
			<index-canvas />
			<div class="Index_ContentsBlock">
				<h1 class="Index_Heading">
					Tyankatsu<br>Sketch<br>Book
				</h1>
				<div class="Index_LinkBox">
					<LinkButtonPrimary
						text="About"
						to="about"
						class="Index_Link"
					/>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import IndexCanvas from "@/containers/IndexCanvas.vue";
import VHeader from "@/containers/VHeader.vue";

import LinkButtonPrimary from "@/basics/LinkButtonPrimary.vue";
export default {
  components: {
    IndexCanvas,
    VHeader,
    LinkButtonPrimary
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/utility/transition-index.scss";
.Index {
  &_ContentsBlock {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &_Heading {
    font-size: 3rem;
    text-align: center;
  }
  &_LinkBox {
    display: flex;
    justify-content: center;
    margin-top: 24px;
  }
  &_Link {
    & + & {
      margin-left: 12px;
    }
  }
}
</style>
