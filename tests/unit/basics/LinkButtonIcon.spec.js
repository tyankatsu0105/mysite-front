import { shallowMount } from "@vue/test-utils";
import LinkButtonIcon from "@/basics/LinkButtonIcon.vue";

describe("LinkButtonIcon", () => {
  it("render", () => {
    const wrapper = shallowMount(LinkButtonIcon);
    wrapper.setProps({
      icon: {
        prefix: "fab",
        iconName: "twitter"
      },
      href: "hogehoge.com"
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
