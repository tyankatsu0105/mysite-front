import { shallowMount } from "@vue/test-utils";
import BlogArticleDate from "@/components/BlogArticleDate.vue";

const propsData = {
  time: `2018.12.15`,
  text: `2018.12.15`
};

describe("BlogArticleDate", () => {
  it("render", () => {
    const wrapper = shallowMount(BlogArticleDate, {
      propsData,
      stubs: ["font-awesome-icon"]
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
