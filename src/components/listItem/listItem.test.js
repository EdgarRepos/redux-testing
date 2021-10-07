import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './index';
import { findByTestAtrribute } from '../../../utils';

describe("ListItem Component", () => {

  describe("Should render", () => {
    
    let wrapper;

    beforeEach(() => {
      const props = {
        title: 'Example Title',
        description: 'Example description'
      }
      wrapper = shallow(<ListItem {...props}/>)
    });

    it('Should render without error', () => {
      const component = findByTestAtrribute(wrapper, 'list-item-component');
      expect(component.length).toBe(1);
    });
  
    it('Should render a title', () => {
      const title = findByTestAtrribute(wrapper, 'component-title');
      expect(title.length).toBe(1);
    });
  
    it('Should render a description', () => {
      const description = findByTestAtrribute(wrapper, 'component-description');
      expect(description.length).toBe(1);
    });
  });

  describe("Should NOT render", () => {
    
    let wrapper;

    beforeEach(() => {
      const props = {
        description: 'Example description'
      }
      wrapper = shallow(<ListItem {...props}/>)
    });

    it('Component is not rendering', () => {
      const component = findByTestAtrribute(wrapper, 'list-item-component');
      expect(component.length).toBe(0);
    });

  });
})