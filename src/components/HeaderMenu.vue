<template>
	<div class="HeaderMenu">
		<nav class="HeaderMenu_Nav">
			<HeaderCloseButton @close-header="closeHeader" />
			<ul class="HeaderMenu_NavList">
				<li class="HeaderMenu_NavListItem">
					<g-link
						to="/"
						class="HeaderMenu_NavListItemLink"
						exact
					>
						<span>
							Home
						</span>
					</g-link>
				</li>
				<li class="HeaderMenu_NavListItem">
					<g-link
						to="/about"
						class="HeaderMenu_NavListItemLink"
						exact
					>
						<span>
							About
						</span>
					</g-link>
				</li>
        
				<li class="HeaderMenu_NavListItem">
					<g-link
						to="/works"
						class="HeaderMenu_NavListItemLink"
						exact
					>
						<span>
							Works
						</span>
					</g-link>
				</li>
        
				<li class="HeaderMenu_NavListItem">
					<g-link
						to="/posts"
						class="HeaderMenu_NavListItemLink"
						exact
					>
						<span>
							Posts
						</span>
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
      type: Boolean,
      requirer: true,
      default: false
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
    height: 100vh;
    padding: 44px 0;
    overflow-y: scroll;
  }
  &_NavListItemLink {
    padding: 8px 40px;
    text-transform: uppercase;

    span {
      position: relative;
      padding: 0 5px 5px;
      border-bottom: 1px solid transparent;

      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        content: "";
        background-color: $color-accent;
        transition: $tst-default;
      }
    }

    &:hover,
    &.active {
      span {
        font-weight: bold;
        &::after {
          width: 100%;
        }
      }
    }
  }
}
</style>
