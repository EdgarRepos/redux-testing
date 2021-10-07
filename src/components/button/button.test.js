import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrribute } from "../../../utils";
import SharedButton from './index';

describe('SharedButton Component', () => {

  let wrapper;

  beforeEach(() => {
    const props = {
      buttonText: 'Example Button Text',
      emitEvent: () => {

      }
    }
    wrapper = shallow(<SharedButton {...props} />);
  });

  it('Should Render a button', () => {
    const button = findByTestAtrribute(wrapper, 'button-component');
    expect(button.length).toBe(1);
  });

});
