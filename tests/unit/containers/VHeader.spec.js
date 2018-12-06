import { shallowMount } from "@vue/test-utils";
import VHeader from "@/containers/VHeader.vue";

describe("VHeader", () => {
  it("render", () => {
    const wrapper = shallowMount(VHeader);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
