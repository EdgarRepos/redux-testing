import React from "react";
import { shallow } from "enzyme";
import Headline from "./Headline";

import { findByTestAtrribute } from "../../../utils/index";

function setUp(props = {}) {
  const wrapper = shallow(<Headline {...props}/>);
  return wrapper; 
}

describe("Headline Component", () => {
  

  describe("With props", () => {

    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        description: "Test Description"
      };
      wrapper = setUp(props);
    })

    it("Should render without errors", () => {
      const component = findByTestAtrribute(wrapper, "headline-component");
      expect(component.length).toBe(1);
    })

    it("Should render a header", () => {
      const component = findByTestAtrribute(wrapper, "header");
      expect(component.length).toBe(1);
    })

    it("Should render a description", () => {
      const component = findByTestAtrribute(wrapper, "description");
      expect(component.length).toBe(1);
    })

  });

  describe("Without props", () => {

    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    })
    
    it("Should NOT render", () => {
      const component = findByTestAtrribute(wrapper, "headline-component");
      expect(component.length).toBe(0);
    })
  });

});