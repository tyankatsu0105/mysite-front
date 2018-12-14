import { shallowMount } from "@vue/test-utils";
import BlogArticle from "@/components/BlogArticle.vue";

const propsData = {
  headingTag: "h3",
  article: {
    id: "5",
    title: "マークダウン全パターンテスト",
    path: "/2018/11/21/%25e3%2583%2586%25e3%2582%25b9%25e3%2583%2588",
    slug: "%e3%83%86%e3%82%b9%e3%83%88",
    excerpt:
      "<p>One morning, when Gregor Samsa woke from troubled dreams. One morning, when Gregor Samsa woke from troubled dr [&hellip;]</p>\n",
    date: "2018.11.21",
    categories: [
      {
        title: "技術記事",
        path:
          "/category/%25e6%258a%2580%25e8%25a1%2593%25e8%25a8%2598%25e4%25ba%258b"
      }
    ],
    featuredMedia: {
      url: {
        type: "image",
        mimeType: "image/png",
        src:
          "http://localhost/wp-content/uploads/2018/11/29c8dd728fdef9dd47042b62023c6186.png"
      }
    }
  }
};

describe("BlogArticle", () => {
  it("render", () => {
    const wrapper = shallowMount(BlogArticle, {
      propsData
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
