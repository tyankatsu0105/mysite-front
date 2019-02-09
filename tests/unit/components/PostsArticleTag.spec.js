import { shallowMount } from "@vue/test-utils";
import PostsArticleTag from "@/components/PostsArticleTag.vue";

const propsData = {
  node: [
    {
      sys: {
        id: "5HQR4kLzgc0IAeKoM0EwgI"
      },
      fields: {
        title: "Gridsome"
      }
    },
    {
      sys: {
        id: "5HQR4kLzgc0IAeKoM0EwgI"
      },
      fields: {
        title: "Frontend"
      }
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
