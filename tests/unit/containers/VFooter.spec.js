import { shallowMount } from "@vue/test-utils";
import VFooter from "@/containers/VFooter.vue";

describe("VFooter", () => {
  it("render", () => {
    const wrapper = shallowMount(VFooter);
    wrapper.setData({
      currentYear: new Date("2018").getFullYear()
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
  describe("copyright", () => {
    let SITE_NAME;
    beforeEach(() => {
      SITE_NAME = "Tyankatsu Sketch Book";
    });
    it("2018", () => {
      const wrapper = shallowMount(VFooter);
      wrapper.setData({
        currentYear: new Date("2018").getFullYear()
      });
      expect(wrapper.vm.copyright).toEqual(`2018 ${SITE_NAME}`);
    });
    it("2018 - 2019", () => {
      const wrapper = shallowMount(VFooter);
      wrapper.setData({
        currentYear: new Date("2019").getFullYear()
      });
      expect(wrapper.vm.copyright).toEqual(`2018 - 2019 ${SITE_NAME}`);
    });
  });
});
