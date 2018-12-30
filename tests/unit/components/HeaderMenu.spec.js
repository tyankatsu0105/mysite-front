import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import HeaderMenu from "@/components/HeaderMenu.vue";

describe("HeaderMenu", () => {
  it("render", () => {
    const wrapper = shallowMount(HeaderMenu, {
      stubs: {
        GLink: RouterLinkStub
      }
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  describe("methods", () => {
    describe("closeHeader", () => {
      it("call emit", () => {
        const wrapper = shallowMount(HeaderMenu);
        wrapper.vm.closeHeader();
        expect(wrapper.emitted("close-header")).toEqual([[false]]);
      });
    });
  });
});
