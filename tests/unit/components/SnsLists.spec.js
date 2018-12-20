import { shallowMount } from "@vue/test-utils";
import SnsLists from "@/components/SnsLists.vue";

const propsData = {
  siteInfo: {
    title: "サイトのタイトル",
    path: "/to/path"
  }
};

describe("SnsLists", () => {
  it("render", () => {
    const wrapper = shallowMount(SnsLists, {
      propsData
    });
    wrapper.setData({
      isOpenLists: false,
      siteUrl: "http://www.hogefuga.com"
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
