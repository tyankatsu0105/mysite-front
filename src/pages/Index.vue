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
					<g-link
						:to="{ name: 'about' }"
						class="Index_Link"
					>
						About
					</g-link>
					<g-link
						:to="{ name: 'about' }"
						class="Index_Link"
					>
						About
					</g-link>
					<g-link
						:to="{ name: 'about' }"
						class="Index_Link"
					>
						About
					</g-link>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import IndexCanvas from "@/containers/IndexCanvas.vue";
import VHeader from "@/containers/VHeader.vue";
export default {
  components: {
    IndexCanvas,
    VHeader
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
    justify-content: space-between;
    margin-top: 24px;
  }
  &_Link {
    padding: 8px 16px;
    font-size: 1.3rem;
    border: 1px solid currentColor;
    border-radius: 4px;

    & + & {
      margin-left: 12px;
    }
  }
}
</style>
