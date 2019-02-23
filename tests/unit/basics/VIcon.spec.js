import { shallowMount } from "@vue/test-utils";
import VIcon from "@/basics/VIcon.vue";

describe("VIcon", () => {
  it("render", () => {
    const wrapper = shallowMount(VIcon, {
      slots: {
        default: '<svg class="icon"></svg>'
      }
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
