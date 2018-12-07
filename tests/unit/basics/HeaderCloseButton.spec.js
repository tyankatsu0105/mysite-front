import { shallowMount } from "@vue/test-utils";
import HeaderCloseButton from "@/basics/HeaderCloseButton.vue";

describe("HeaderCloseButton", () => {
  it("render", () => {
    const wrapper = shallowMount(HeaderCloseButton);

    expect(wrapper.html()).toMatchSnapshot();
  });
  describe("methods", () => {
    describe("closeHeader", () => {
      it("call emit", () => {
        const wrapper = shallowMount(HeaderCloseButton);
        wrapper.vm.closeHeader();
        expect(wrapper.emitted("close-header")).toEqual([[false]]);
      });
    });
  });
});
