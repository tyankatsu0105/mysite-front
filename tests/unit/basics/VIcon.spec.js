import { shallowMount } from "@vue/test-utils";
import VIcon from "@/basics/VIcon.vue";

const propsData = {
  name: "hatena"
};

describe("VIcon", () => {
  it("render", () => {
    const wrapper = shallowMount(VIcon, {
      propsData
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("computed", () => {
    it("icon", () => {
      const wrapper = shallowMount(VIcon, {
        propsData
      });
      expect(wrapper.vm.icon).toEqual("icon-hatena");
    });
  });
});
