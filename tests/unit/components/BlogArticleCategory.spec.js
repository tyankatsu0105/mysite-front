import { shallowMount } from "@vue/test-utils";
import BlogArticleCategory from "@/components/BlogArticleCategory.vue";

const propsData = {
  text: "カテゴリ",
  link: "hogehoge.com"
};

describe("BlogArticleCategory", () => {
  it("render", () => {
    const wrapper = shallowMount(BlogArticleCategory, {
      propsData
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});