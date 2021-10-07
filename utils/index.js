// import { applyMiddleware, createStore } from "redux"; //delete the middlewares later on
import rootReducer from "../src/reducers";
import { middlewares, createStoreWithMiddleware } from '../src/createStore';

export function findByTestAtrribute(wrapper, component) {
  return wrapper.find(`[data-test='${component}']`);
};

export function testStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
