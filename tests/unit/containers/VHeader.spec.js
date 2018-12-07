import { shallowMount } from "@vue/test-utils";
import VHeader from "@/containers/VHeader.vue";

describe("VHeader", () => {
  it("render", () => {
    const wrapper = shallowMount(VHeader);

    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("methods", () => {
    describe("changeHeaderStatus", () => {
      it("isOpenHeader is change", () => {
        const wrapper = shallowMount(VHeader);
        wrapper.setData({
          isOpenHeader: false
        });
        wrapper.vm.changeHeaderStatus(false);
        expect(wrapper.vm.isOpenHeader).toEqual(false);

        wrapper.vm.changeHeaderStatus(true);
        expect(wrapper.vm.isOpenHeader).toEqual(true);
      });
    });
  });
});
