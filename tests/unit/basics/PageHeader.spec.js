import { shallowMount } from "@vue/test-utils";
import PageHeader from "@/basics/PageHeader.vue";

const propsData = {
  text: "Page"
};

describe("PageHeader", () => {
  it("render", () => {
    const wrapper = shallowMount(PageHeader, {
      propsData
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
