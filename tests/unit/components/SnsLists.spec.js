import { shallowMount } from "@vue/test-utils";
import SnsLists from "@/components/SnsLists.vue";

const propsData = {
  siteInfo: {
    title: "サイトのタイトル",
    slug: "post-title"
  }
};

describe("SnsLists", () => {
  it("render", () => {
    const wrapper = shallowMount(SnsLists, {
      propsData,
      stubs: ["font-awesome-icon"]
    });
    wrapper.setData({
      isOpenLists: false,
      siteUrl: "http://www.hogefuga.com"
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
