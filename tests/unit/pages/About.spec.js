import { shallowMount } from "@vue/test-utils";
import About from "@/pages/About.vue";

describe("About", () => {
  it("render", () => {
    const wrapper = shallowMount(About);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
