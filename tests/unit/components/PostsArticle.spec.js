import { shallowMount } from "@vue/test-utils";
import PostsArticle from "@/components/PostsArticle.vue";

const propsData = {
  headingTag: "h3",
  article: {
    id: "NVcaE83kWYECOGcs2GkYC",
    name: "Title",
    contents: "コンテンツ",
    title: "title",
    slug: "try-gridsome",
    path: "/posts/try-gridsome",
    categories: [
      {
        title: "技術記事"
      }
    ],
    tags: [
      {
        title: "Gridsome",
        id: "5HQR4kLzgc0IAeKoM0EwgI"
      },
      {
        title: "FrontEnd",
        id: "3uo6xqFMfuOaosgiOemwCa"
      }
    ],
    date: "2019.01.07"
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
