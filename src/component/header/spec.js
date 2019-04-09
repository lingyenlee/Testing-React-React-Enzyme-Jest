import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAttr } from "../../../Utils";

//pass default props or some empty objects in the props
// do a setup that do shallow render
const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {

 // run beforeEach pass the props to the shallow render of Header
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

  // it("should render without error", () => {
  //   const component = shallow(<Header />);
  //   console.log(component.debug());
  //   const wrapper = component.find(`[data-test=""]`);
  //   expect(wrapper.length).toBe(1);
  // });
});
