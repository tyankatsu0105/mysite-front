<template>
	<div class="IndexCanvas">
		<canvas
			ref="canvas"
			:width="canvasSize.width"
			:height="canvasSize.height"
			@mousedown="clickAction"
		></canvas>
	</div>
</template>

<script>
import { TweenMax } from "gsap";

export default {
  data() {
    return {
      canvasSize: {
        width: 0,
        height: 0
      }
    };
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.resizeHandler();
    window.addEventListener("resize", () => {
      this.resizeHandler();
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", () => {
      this.resizeHandler();
    });
  },
  methods: {
    resizeHandler() {
      this.canvasSize.width = this.canvas.parentNode.clientWidth;
      this.canvasSize.height = this.canvas.parentNode.clientHeight;
    },
    clickAction(event) {
      const clientPositionX = event.offsetX;
      const clientPositionY = event.offsetY;

      const createCircle = () => {
        const ctx = this.canvas.getContext("2d");
        const init = {
          radius: 1,
          globalAlpha: 0.5,
          color: "#fff"
        };
        const circle = init;
        const render = () => {
          ctx.save();
          ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height);
          ctx.beginPath();
          ctx.strokeStyle = circle.color;
          ctx.arc(
            clientPositionX,
            clientPositionY,
            circle.radius,
            0,
            Math.PI * 2,
            false
          );
          ctx.globalAlpha = circle.globalAlpha;
          ctx.lineWidth = 5;
          ctx.stroke();
          ctx.restore();
        };
        TweenMax.to(circle, 1, {
          radius: 100,
          globalAlpha: 0,
          ease: Strong.easeOut,
          onUpdate() {
            render();
          }
        });
      };
      createCircle();
    }
  }
};
</script>

<style lang="scss" scoped>
.IndexCanvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-color: $color-primary;
}
</style>
