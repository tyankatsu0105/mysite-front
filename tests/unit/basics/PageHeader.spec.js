import { shallowMount } from "@vue/test-utils";
import PageHeader from "@/basics/PageHeader.vue";

describe("PageHeader", () => {
  it("render", () => {
    const wrapper = shallowMount(PageHeader);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
