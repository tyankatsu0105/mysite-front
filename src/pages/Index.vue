<template>
  <div class="Index">
    <v-header />
    <index-canvas />
    <div class="Index-ContentsBlock">
      <h1 class="Index-Heading">Tyankatsu<br>Sketch<br>Book</h1>
      <div class="Index-LinkBox">
        <g-link 
          :to="{ name: 'about' }" 
          class="Index-Link">About</g-link>
        <g-link 
          :to="{ name: 'about' }" 
          class="Index-Link">About</g-link>
        <g-link 
          :to="{ name: 'about' }" 
          class="Index-Link">About</g-link>
      </div>
    </div>
  </div>
</template>

<script>
import IndexCanvas from "@/components/IndexCanvas.vue";
import VHeader from "@/components/VHeader.vue";
export default {
  components: {
    IndexCanvas,
    VHeader
  }
};
</script>

<style lang="scss" scoped>
.Index {
  &-ContentsBlock {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &-Heading {
    font-size: 3rem;
    text-align: center;
  }
  &-LinkBox {
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
  }
  &-Link {
    padding: 8px 16px;
    font-size: 1.3rem;
    border: 1px solid currentColor;
    border-radius: 4px;

    & + & {
      margin-left: 10px;
    }
  }
}
</style>
