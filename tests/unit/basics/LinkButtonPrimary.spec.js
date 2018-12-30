import { shallowMount } from "@vue/test-utils";
import LinkButtonPrimary from "@/basics/LinkButtonPrimary.vue";

const propsData = {
  text: "リンク",
  to: "about"
};

describe("LinkButtonPrimary", () => {
  it("render", () => {
    const wrapper = shallowMount(LinkButtonPrimary, {
      propsData,
      stubs: ["g-link"]
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
