import { shallowMount } from "@vue/test-utils";
import IndexCanvas from "@/containers/IndexCanvas.vue";

describe("IndexCanvas", () => {
  it("render", () => {
    const wrapper = shallowMount(IndexCanvas);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
