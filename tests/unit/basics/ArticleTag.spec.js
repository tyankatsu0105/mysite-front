import { shallowMount } from "@vue/test-utils";
import ArticleTag from "@/basics/ArticleTag.vue";

describe("ArticleTag", () => {
  it("render", () => {
    const wrapper = shallowMount(ArticleTag);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
