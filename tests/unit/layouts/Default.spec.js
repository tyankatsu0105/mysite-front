import { shallowMount } from "@vue/test-utils";
import Default from "@/layouts/Default.vue";

describe("Default", () => {
  it("render", () => {
    const wrapper = shallowMount(Default);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
