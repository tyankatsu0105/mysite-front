<template>
	<div class="VFooter">
		<div class="VFooter-Copyright">
			<small>&copy; {{ copyright }}</small>
		</div>
	</div>
</template>

<script>
import { SITE_NAME } from "@/const";
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  },
  computed: {
    copyright() {
      const createYear = 2018;

      let sinceYear;
      if (createYear === this.currentYear) {
        sinceYear = createYear;
      } else {
        sinceYear = `${createYear} - ${this.currentYear}`;
      }
      return `${sinceYear} ${SITE_NAME}`;
    }
  }
};
</script>

<style scoped lang='scss'>
.VFooter {
  width: 100%;
  padding: 12px 0;
  &-Copyright {
    text-align: center;
  }
}
</style>
