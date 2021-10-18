/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { createContext, useReducer } from 'react';

const initialState = {};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'type': {
        const newState = { ...state, action };
        return newState;
      }
      default:
        throw new Error('Invalid Action');
    }
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
