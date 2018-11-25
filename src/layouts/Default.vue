<template>
  <div class="Default">
    <v-header />
    <transition-group 
      name="page" 
      tag="main" 
      appear>
      <div 
        key="main" 
        class="Default_Contents"><slot></slot></div>
    </transition-group>
  </div>
</template>

<script>
import VHeader from "@/components/VHeader";
export default {
  components: {
    VHeader
  },
  metaInfo: {
    htmlAttrs: {
      lang: "ja"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Noto+Sans+JP"
      }
    ]
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/utility/transition-page.scss";
.Default {
  background-color: #333;

  &_Contents {
    max-width: 600px;
    padding-right: 20px;
    padding-left: 20px;
    margin: 0 auto;
  }
}
</style>
