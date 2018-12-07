import { shallowMount } from "@vue/test-utils";
import LinkButtonPrimary from "@/basics/LinkButtonPrimary.vue";

describe("LinkButtonPrimary", () => {
  it("render", () => {
    const wrapper = shallowMount(LinkButtonPrimary);
    wrapper.setProps({
      text: "リンク",
      to: "hogehoge.com"
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
