<template>
	<div class="HeaderMenu">
		<nav class="HeaderMenu_Nav">
			<HeaderCloseButton @close-header="closeHeader" />
			<ul class="HeaderMenu_NavList">
				<li class="HeaderMenu_NavListItem">
					<g-link
						:to="{ name: 'home' }"
						class="HeaderMenu_NavListItemLink"
						exact
					>
						Home
					</g-link>
				</li>
				<li class="HeaderMenu_NavListItem">
					<g-link
						:to="{ name: 'about' }"
						class="HeaderMenu_NavListItemLink"
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
  &_Nav {
    position: relative;
    padding: 36px 0;
  }
  &_NavListItemLink {
    padding: 8px 40px;

    &.active {
      background-color: $color-font;
    }
  }
}
</style>
