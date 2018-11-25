<template>
  <header class="VHeader">
    <button 
      class="VHeader_TriggerButton" 
      type="button" 
      @click="isOpen = !isOpen">
      Menu
    </button>
    <transition name="header">
      <div 
        v-if="isOpen" 
        class="VHeader_NavContainer">
        <nav 
          class="VHeader_Nav">
          <button 
            class="VHeader_NavClose" 
            @click="isOpen = !isOpen"><font-awesome-icon icon="times" />
          </button>
          <ul class="VHeader_NavList">
            <li class="VHeader_NavListItem">
              <g-link 
                :to="{ name: 'home' }" 
                class="VHeader_NavListItemLink"
                exact>Home</g-link>
            </li>
            <li class="VHeader_NavListItem">
              <g-link 
                :to="{ name: 'about' }" 
                class="VHeader_NavListItemLink"
                exact>About</g-link>
            </li>
          </ul>
        </nav>
      </div>
      
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
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

  &_TriggerButton {
    position: relative;
    padding-bottom: 8px;
    font-size: 1.2rem;
    &::before {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      content: "";
      background-color: $color-accent;
      transition: $tst-default;
    }

    &:hover {
      &::before {
        width: calc(100% + 20px);
      }
    }
  }

  &_Nav {
    position: relative;
    padding: 36px 0;
  }
  &_NavClose {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 1.5rem;
    color: inherit;
  }

  &_NavContainer {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    color: $color-primary;
    background-color: #fff;
  }
  &_NavListItemLink {
    padding: 8px 40px;

    &.active {
      background-color: $color-font;
    }
  }
}
</style>
