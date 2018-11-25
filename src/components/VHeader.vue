<template>
  <div class="VHeader">
    <button 
      class="VHeader_TriggerButton" 
      type="button" 
      @click="isOpen = !isOpen">
      Menu
    </button>
    <transition>
      <v-header-contents v-if="isOpen" />
    </transition>
  </div>
</template>

<script>
import VHeaderContents from "@/components/VHeaderContents";
export default {
  components: {
    VHeaderContents
  },
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/utility/transition-v.scss";
.VHeader {
  &_TriggerButton {
    position: fixed;
    top: 0;
    left: 0;
  }
}
</style>
