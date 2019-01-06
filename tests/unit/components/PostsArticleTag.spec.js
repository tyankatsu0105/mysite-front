import { shallowMount } from "@vue/test-utils";
import PostsArticleTag from "@/components/PostsArticleTag.vue";

const propsData = {
  node: [
    {
      title: "Gridsome",
      id: "5HQR4kLzgc0IAeKoM0EwgI"
    },
    {
      title: "FrontEnd",
      id: "3uo6xqFMfuOaosgiOemwCa"
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
