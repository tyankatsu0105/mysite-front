import { shallowMount } from "@vue/test-utils";
import HeaderOpenButton from "@/basics/HeaderOpenButton.vue";

describe("HeaderOpenButton", () => {
  it("render", () => {
    const wrapper = shallowMount(HeaderOpenButton);

    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("methods", () => {
    describe("closeHeader", () => {
      it("call emit", () => {
        const wrapper = shallowMount(HeaderOpenButton);
        wrapper.vm.openHeader();
        expect(wrapper.emitted("open-header")).toEqual([[true]]);
      });
    });
  });
});
