import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";
import { findByTestAttr, checkProps } from "../../../Utils";
import renderer from "react-test-renderer";

const setUp = props => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Checking Proptypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Desc",
        tempArr: [
          {
            fName: "Test fName",
            lName: "Test lName",
            email: "test@email.com",
            age: 23,
            onlineStatus: false,
          },
        ],
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc",
      };
      wrapper = setUp(props);
    });

    it("should match snapshot without props", () => {
      const tree = renderer.create(<Headline />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should match snapshot with props", () => {
      const props = {
        header: "Test Header",
        desc: "Test Desc",
      };
      const tree = renderer.create(<Headline {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("Should render without errors", () => {
      const component = findByTestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });

    it("Should render a H1", () => {
      const h1 = findByTestAttr(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    it("Shoudl render a desc", () => {
      const desc = findByTestAttr(wrapper, "desc");
      expect(desc.length).toBe(1);
    });

    describe("Have no props", () => {
      let wrapper;
      beforeEach(() => {
        wrapper = setUp();
      });
      it("Should not render", () => {
        const component = findByTestAttr(wrapper, "HeadlineComponent");
        expect(component.length).toBe(0);
      });
    });
  });
});
