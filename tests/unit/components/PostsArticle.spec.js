import { shallowMount } from "@vue/test-utils";
import PostsArticle from "@/components/PostsArticle.vue";

const propsData = {
  article: {
    id: "NVcaE83kWYECOGcs2GkYC",
    name: "Title",
    contents: "コンテンツ",
    title: "title",
    slug: "try-gridsome",
    path: "/posts/try-gridsome",
    eyecatch: {
      file: {
        url: {
          type: "image",
          mimeType: "image/png",
          src: "hogehoge.png"
        }
      }
    },
    category: {
      title: "技術記事"
    },
    tags: [
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
