import { shallowMount } from "@vue/test-utils";
import BlogArticles from "@/containers/BlogArticles.vue";

describe("BlogArticles", () => {
  it("render", () => {
    const wrapper = shallowMount(BlogArticles);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
