module.exports = {
  root: true,
  extends: ["airbnb-base/legacy", "plugin:vue/recommended", "prettier", "plugin:gridsome/recommended"],
  plugins: ["gridsome", "prettier"],
  rules: {
    "prettier/prettier": "error",
    // Web Componentsと差別化を図るため
    "vue/component-name-in-template-casing": "error",
    "vue/html-closing-bracket-newline": "error",
    "vue/html-closing-bracket-spacing": "error",
    "vue/html-indent": ["error", "tab"],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          normal: "never"
        }
      }
    ],
    "vue/no-multi-spaces": "error",
    "vue/no-confusing-v-for-v-if": "error",
    "vue/attributes-order": "error",
    "vue/order-in-components": "error",
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  },
  globals: {
    TimelineLite: false,
    TimelineMax: false,
    TweenLite: false,
    TweenMax: false,
    Back: false,
    Bounce: false,
    Circ: false,
    Cubic: false,
    Ease: false,
    EaseLookup: false,
    Elastic: false,
    Expo: false,
    Linear: false,
    Power0: false,
    Power1: false,
    Power2: false,
    Power3: false,
    Power4: false,
    Quad: false,
    Quart: false,
    Quint: false,
    RoughEase: false,
    Sine: false,
    SlowMo: false,
    SteppedEase: false,
    Strong: false,
    Draggable: false,
    SplitText: false,
    VelocityTracker: false,
    CSSPlugin: false,
    ThrowPropsPlugin: false,
    BezierPlugin: false
  }
};