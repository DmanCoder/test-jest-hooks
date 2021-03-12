// import checkPropTypes from 'check-prop-types';
// import { createStore, applyMiddleware } from 'redux';

// import rootReducer from '../src/reducers/index';
// import { middleWares } from '../src/configureStore';

// export const storeFactory = (initialState) => {
//   const createStoreWithMiddleWare = applyMiddleware(...middleWares)(createStore)
//   return createStoreWithMiddleWare(rootReducer, initialState);
// };

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

// /**
//  * Throw error if conformingProps do not pass propTypes validation.
//  * @param {React.Component} component - Component to check props against.
//  * @param {object} conformingProps - Props we expect to conform to defined propTypes.
//  */
// export const checkProps = (component, conformingProps) => {
//   const propError = checkPropTypes(
//     component.propTypes,
//     conformingProps,
//     'prop',
//     component.name
//   );
//   expect(propError).toBeUndefined();
// };
