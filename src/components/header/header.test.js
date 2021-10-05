import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAtrribute } from "../../../utils";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props}/>);
  return component;
};

describe("Header Component", () => {
  
  let wrapper;

  beforeEach(() => {
    wrapper = setUp();
  })

  it('Should render without errors', () => {
    const headerComponent = findByTestAtrribute(wrapper, "header-component");
    expect(headerComponent.length).toBe(1);
  })

  it('Should render logo', () => {
    const logo = findByTestAtrribute(wrapper, "logoIMG");
    expect(logo.length).toBe(1);
  })
})
