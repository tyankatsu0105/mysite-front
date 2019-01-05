import { shallowMount } from "@vue/test-utils";
import PostsArticleCategory from "@/components/PostsArticleCategory.vue";

const propsData = {
  text: "カテゴリ"
};

describe("PostsArticleCategory", () => {
  it("render", () => {
    const wrapper = shallowMount(PostsArticleCategory, {
      propsData,
      stubs: ["font-awesome-icon"]
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
