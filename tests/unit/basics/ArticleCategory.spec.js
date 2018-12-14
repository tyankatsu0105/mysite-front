import { shallowMount } from "@vue/test-utils";
import ArticleCategory from "@/basics/ArticleCategory.vue";

describe("ArticleCategory", () => {
  it("render", () => {
    const wrapper = shallowMount(ArticleCategory);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
