import App from './App';
import { shallow } from 'enzyme';
import { findByTestAtrribute, testStore } from '../utils';
import React from 'react';

function setUp(initialState = {}) {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />).childAt(0).dive();
  console.log(wrapper.debug());
  return wrapper;
}

describe('App Component', () => {

  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [{
        title: 'Example title',
        body: 'Some Text'
      },{
        title: 'Example title',
        body: 'Some Text'
      },{
        title: 'Example title',
        body: 'Some Text'
      }]
    };
    wrapper = setUp(initialState);
  });

  it('Should render without errors', () => {
    const component = findByTestAtrribute(wrapper, 'app-component');
    expect(component.length).toBe(1);
  });
});
