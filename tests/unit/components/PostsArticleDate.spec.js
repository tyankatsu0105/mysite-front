import { shallowMount } from "@vue/test-utils";
import PostsArticleDate from "@/components/PostsArticleDate.vue";

const propsData = {
  time: `2018.12.15`,
  text: `2018.12.15`
};

describe("PostsArticleDate", () => {
  it("render", () => {
    const wrapper = shallowMount(PostsArticleDate, {
      propsData,
      stubs: ["font-awesome-icon"]
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
