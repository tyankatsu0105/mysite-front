import { shallowMount } from "@vue/test-utils";
import BlogArticles from "@/containers/BlogArticles.vue";

const propsData = {
  page: {
    allWordPressPost: {
      pageInfo: {
        totalPages: 4,
        currentPage: 1
      },
      edges: [
        {
          node: {
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
        },
        {
          node: {
            id: "1",
            title: "Hello world!",
            path: "/2018/11/21/hello-world",
            slug: "hello-world",
            excerpt:
              "<p>WordPress へようこそ。これは最初の投稿です。編集もしくは削除してブログを始めてください !</p>\n",
            date: "2018.11.21",
            categories: [
              {
                title: "未分類",
                path: "/category/%25e6%259c%25aa%25e5%2588%2586%25e9%25a1%259e"
              }
            ],
            featuredMedia: null
          }
        }
      ]
    }
  }
};

describe("BlogArticles", () => {
  it("render", () => {
    const wrapper = shallowMount(BlogArticles, {
      propsData,
      stubs: ["g-link", "g-image", "font-awesome-icon"]
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
