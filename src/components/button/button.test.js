import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrribute } from "../../../utils";
import SharedButton from './index';

describe('SharedButton Component', () => {

  let wrapper;
  let mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    const props = {
      buttonText: 'Example Button Text',
      emitEvent: mockFunc
    }
    wrapper = shallow(<SharedButton {...props} />);
  });

  it('Should Render a button', () => {
    const button = findByTestAtrribute(wrapper, 'button-component');
    expect(button.length).toBe(1);
  });

  it('Should emit callback on click event', () => {
    const button = findByTestAtrribute(wrapper, 'button-component');
    button.simulate('click');
    const callback = mockFunc.mock.calls.length;
    expect(callback).toBe(1);
  })

});
