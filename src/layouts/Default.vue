<template>
	<div class="Default">
		<VHeader />
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
		<VFooter />
	</div>
</template>

<script>
import VHeader from "@/containers/VHeader.vue";
import VFooter from "@/containers/VFooter.vue";
export default {
  components: {
    VHeader,
    VFooter
  },
  metaInfo: {
    htmlAttrs: {
      lang: "ja"
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/utility/transition-page.scss";
.Default {
  display: grid;
  grid-template-rows: 1fr 50px;
  grid-template-columns: auto;
  min-height: 100vh;

  &_Contents {
    max-width: 1500px;
    padding: 56px 36px;
    margin: 0 auto;

    @include mq-xs {
      max-width: 100vw;
      padding: 24px 15px;
      margin: 88px auto 24px;
    }
  }
}
</style>
