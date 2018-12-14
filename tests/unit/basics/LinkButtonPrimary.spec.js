import { shallowMount } from "@vue/test-utils";
import LinkButtonPrimary from "@/basics/LinkButtonPrimary.vue";

const setProps = {
  text: "リンク",
  to: "hogehoge.com"
};

describe("LinkButtonPrimary", () => {
  it("render", () => {
    const wrapper = shallowMount(LinkButtonPrimary, {
      setProps
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
