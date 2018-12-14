import { shallowMount } from "@vue/test-utils";
import ArticleCategory from "@/basics/ArticleCategory.vue";

const propsData = {
  text: "aaaaa",
  to: "hogehoge.com"
};

describe("ArticleCategory", () => {
  it("render", () => {
    const wrapper = shallowMount(ArticleCategory, {
      propsData
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
