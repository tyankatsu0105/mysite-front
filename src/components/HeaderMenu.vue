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
						<span>
							Home
						</span>
					</g-link>
				</li>
				<li class="HeaderMenu_NavListItem">
					<g-link
						:to="{ name: 'about' }"
						class="HeaderMenu_NavListItemLink"
						exact
					>
						<span>
							About
						</span>
					</g-link>
					<g-link
						to="/blog/all"
						class="HeaderMenu_NavListItemLink"
						exact
					>
						<span>
							Blog
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
    height: 100vh;
    padding: 44px 0;
    overflow-y: scroll;
  }
  &_NavListItemLink {
    padding: 8px 40px;
    text-transform: uppercase;

    span {
      padding: 0 5px 5px;
      border-bottom: 1px solid transparent;
    }

    &.active {
      span {
        font-weight: bold;
        border-bottom-color: $color-accent;
      }
    }
  }
}
</style>
