import { shallowMount } from "@vue/test-utils";
import BlogArticle from "@/components/BlogArticle.vue";

describe("BlogArticle", () => {
  it("render", () => {
    const wrapper = shallowMount(BlogArticle);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
