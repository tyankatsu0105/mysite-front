import { shallowMount } from "@vue/test-utils";
import PostsArticle from "@/components/PostsArticle.vue";

const propsData = {
  headingTag: "h3",
  article: {
    id: "56X3zCipcA2Gw8WOGgSico",
    name: "Title",
    eyecatch: ["4bRUr9soZOiy6QwukMsqeg"],
    contents: "contents",
    title: "タイトル２",
    slug: "fuga",
    path: "/posts/fuga",
    date: "2019.01.05"
  }
};

describe("PostsArticle", () => {
  it("render", () => {
    const wrapper = shallowMount(PostsArticle, {
      propsData,
      stubs: ["g-link", "g-image", "font-awesome-icon"]
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
