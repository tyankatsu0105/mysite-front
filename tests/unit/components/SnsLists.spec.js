import { shallowMount } from "@vue/test-utils";
import SnsLists from "@/components/SnsLists.vue";

const propsData = {
  shareText: "shareするテキスト"
};

window.location.href = "aaaaaa";

describe("SnsLists", () => {
  global.it("render", () => {
    const wrapper = shallowMount(SnsLists, {
      propsData
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
  describe("computed", () => {
    it("pageLink", () => {
      const wrapper = shallowMount(SnsLists, {
        propsData
      });

      expect(wrapper.vm.pageLink).toEqual("http://localhost/");
    });
  });
});
