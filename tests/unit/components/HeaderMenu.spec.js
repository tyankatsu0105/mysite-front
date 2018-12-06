import { shallowMount } from "@vue/test-utils";
import HeaderMenu from "@/components/HeaderMenu.vue";

describe("HeaderMenu", () => {
  it("render", () => {
    const wrapper = shallowMount(HeaderMenu);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
