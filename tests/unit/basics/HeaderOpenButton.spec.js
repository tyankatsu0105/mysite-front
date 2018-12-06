import { shallowMount } from "@vue/test-utils";
import HeaderOpenButton from "@/basics/HeaderOpenButton.vue";

describe("HeaderOpenButton", () => {
  it("render", () => {
    const wrapper = shallowMount(HeaderOpenButton);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
