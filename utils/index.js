export function findByTestAtrribute(wrapper, component) {
  return wrapper.find(`[data-test='${component}']`);
}
