<template>
	<div class="HeaderMenu">
		<nav class="HeaderMenu-Nav">
			<HeaderCloseButton @close-header="closeHeader" />
			<ul class="HeaderMenu-NavList">
				<li class="HeaderMenu-NavListItem">
					<g-link
						:to="{ name: 'home' }"
						class="HeaderMenu-NavListItemLink"
						exact
					>
						Home
					</g-link>
				</li>
				<li class="HeaderMenu-NavListItem">
					<g-link
						:to="{ name: 'about' }"
						class="HeaderMenu-NavListItemLink"
						exact
					>
						About
					</g-link>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
import HeaderCloseButton from "@/basics/HeaderCloseButton.vue";
export default {
  components: {
    HeaderCloseButton
  },
  props: {
    isOpenHeader: {
      type: Boolean
    }
  },
  methods: {
    closeHeader() {
      this.$emit("close-header", false);
    }
  }
};
</script>

<style scoped lang="scss">
.HeaderMenu {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  color: $color-primary;
  background-color: #fff;
  &-Nav {
    position: relative;
    padding: 36px 0;
  }
  &-NavListItemLink {
    padding: 8px 40px;

    &.active {
      background-color: $color-font;
    }
  }
}
</style>
