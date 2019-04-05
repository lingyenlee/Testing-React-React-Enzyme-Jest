import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAttr } from "../../../Utils";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render without error", () => {
    const wrapper = findByTestAttr(component, "HeaderComponent");
    expect(wrapper.length).toBe(1);
  });
  it("should render a logo", () => {
    const wrapper = findByTestAttr(component, "logoIMG");
    expect(wrapper.length).toBe(1);
  });
});
