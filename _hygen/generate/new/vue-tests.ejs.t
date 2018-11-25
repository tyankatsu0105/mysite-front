---
to: tests/unit/<%= dir %>/<%= name %>.spec.js
---
import { shallowMount } from "@vue/test-utils";
import <%= name %> from "@/<%= dir %>/<%= name %>.vue";

describe("<%= name %>", () => {
  it("render", () => {
    const wrapper = shallowMount(<%= name %>);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
