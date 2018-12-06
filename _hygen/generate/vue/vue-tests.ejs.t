---
to: tests/unit/<%= dir %>/<% if(hierarchy){ -%><%= hierarchyName %>/<% } -%><%= name %>.spec.js
---
import { shallowMount } from "@vue/test-utils";
import <%= name %> from "@/<%= dir %>/<% if(hierarchy){ -%><%= hierarchyName %>/<% } -%><%= name %>.vue";

describe("<%= name %>", () => {
  it("render", () => {
    const wrapper = shallowMount(<%= name %>);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
