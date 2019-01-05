import { shallowMount } from "@vue/test-utils";
import PostsArticles from "@/containers/PostsArticles.vue";

const propsData = {
  page: {
    allContentfulPosts: {
      pageInfo: {
        totalPages: 4,
        currentPage: 1
      },
      edges: [
        {
          node: {
            id: "56X3zCipcA2Gw8WOGgSico",
            name: "Title",
            eyecatch: ["4bRUr9soZOiy6QwukMsqeg"],
            contents: "contents",
            title: "タイトル２",
            slug: "fuga",
            path: "/posts/fuga",
            date: "2019.01.05"
          }
        },
        {
          node: {
            id: "gsSl9UAyukmMYCKaEgwsW",
            name: "Title",
            eyecatch: ["4bRUr9soZOiy6QwukMsqeg"],
            contents: "contents",
            title: "タイトル２",
            slug: "fuga",
            path: "/posts/fuga",
            date: "2019.01.05"
          }
        }
      ]
    }
  }
};

describe("PostsArticles", () => {
  it("render", () => {
    const wrapper = shallowMount(PostsArticles, {
      propsData,
      stubs: ["g-link", "g-image", "font-awesome-icon"]
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
