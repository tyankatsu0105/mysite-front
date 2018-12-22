<template>
	<div class="Default">
		<v-header />
		<transition-group
			name="page"
			tag="main"
			appear
		>
			<div
				key="main"
				class="Default_Contents"
			>
				<slot></slot>
			</div>
		</transition-group>
		<v-footer />
	</div>
</template>

<script>
import VHeader from "@/containers/VHeader";
import VFooter from "@/containers/VFooter";
export default {
  components: {
    VHeader,
    VFooter
  },
  metaInfo: {
    htmlAttrs: {
      lang: "ja"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/utility/transition-page.scss";
.Default {
  &_Contents {
    max-width: 1500px;
    padding: 24px 36px;
    margin: 32px auto;

    @include mq-xs {
      padding: 24px 15px;
      margin: 88px auto;
    }
  }
}
</style>
