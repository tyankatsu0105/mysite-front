import { shallowMount } from "@vue/test-utils";
import PostsArticleTag from "@/components/PostsArticleTag.vue";

const propsData = {
  node: [
    {
      id: "5HQR4kLzgc0IAeKoM0EwgI",
      title: "Gridsome"
    },
    {
      id: "5HQR4kLzgc0IAeKoM0EwgI",
      title: "Frontend"
    }
  ]
};

describe("PostsArticleTag", () => {
  it("render", () => {
    const wrapper = shallowMount(PostsArticleTag, {
      propsData,
      stubs: ["g-link", "g-image", "font-awesome-icon"]
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
