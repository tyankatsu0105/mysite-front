import { shallowMount } from "@vue/test-utils";
import LinkButtonIcon from "@/basics/LinkButtonIcon.vue";

const setProps = {
  icon: {
    prefix: "fab",
    iconName: "twitter"
  },
  href: "hogehoge.com"
};

describe("LinkButtonIcon", () => {
  it("render", () => {
    const wrapper = shallowMount(LinkButtonIcon, {
      setProps
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
