import { shallowMount } from "@vue/test-utils";
import Index from "@/pages/Index.vue";

describe("Index", () => {
  it("render", () => {
    const wrapper = shallowMount(Index);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
