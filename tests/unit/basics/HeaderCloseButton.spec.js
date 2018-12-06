import { shallowMount } from "@vue/test-utils";
import HeaderCloseButton from "@/basics/HeaderCloseButton.vue";

describe("HeaderCloseButton", () => {
  it("render", () => {
    const wrapper = shallowMount(HeaderCloseButton);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
